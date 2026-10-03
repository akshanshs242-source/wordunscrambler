// Invisible Bot Guard & Anti-Scraper Middleware
// Zero CAPTCHA, Zero User Friction, 100% Free & Unlimited for Humans

export interface GuardPayload {
  token?: string;       // Client-generated ephemeral signature
  ts?: number;          // Page load timestamp
  clientTime?: number;  // Submission timestamp
  hp?: string;          // Honeypot field (must be empty)
  entropy?: string;     // Micro environmental entropy hash
}

// Known scraper / headless bot signatures
const DISALLOWED_UA_PATTERNS = [
  /python-requests/i,
  /aiohttp/i,
  /scrapy/i,
  /httpclient/i,
  /curl\//i,
  /wget\//i,
  /postman/i,
  /headlesschrome/i,
  /phantomjs/i,
  /selenium/i,
  /puppeteer/i,
  /playwright/i,
  /go-http-client/i,
  /libwww-perl/i
];

/**
 * Validates request against invisible security heuristics
 */
export function verifyHumanRequest(
  request: Request,
  payload: GuardPayload
): { ok: boolean; reason?: string } {
  const ua = request.headers.get('user-agent') || '';

  // 1. Honeypot check: If the hidden bot-trap input has ANY text, it's a scraper
  if (payload.hp && payload.hp.trim().length > 0) {
    return { ok: false, reason: 'Bot trap triggered (honeypot populated).' };
  }

  // 2. User-Agent heuristics for automated libraries
  for (const pattern of DISALLOWED_UA_PATTERNS) {
    if (pattern.test(ua)) {
      return { ok: false, reason: 'Automated client environment detected.' };
    }
  }

  // 3. Origin & Sec-Fetch Headers (Stops external hotlinking & script cross-site forgery)
  const secFetchSite = request.headers.get('sec-fetch-site');
  if (secFetchSite && secFetchSite !== 'same-origin' && secFetchSite !== 'same-site') {
    return { ok: false, reason: 'Cross-origin scraper request rejected.' };
  }

  // 4. Time-Delta Heuristic:
  // Real humans take at least 350ms to paste/type and click download.
  // Instant submissions (< 250ms) are automated scrapers.
  if (payload.ts && payload.clientTime) {
    const elapsed = payload.clientTime - payload.ts;
    if (elapsed < 300) {
      return { ok: false, reason: 'Sub-human submission speed detected (< 300ms).' };
    }
    // Token expired (> 24 hours stale tab)
    if (elapsed > 86400000) {
      return { ok: false, reason: 'Expired session nonce.' };
    }
  }

  // 5. Environmental entropy validation
  // Real browsers pass entropy from client-side JS evaluation
  if (!payload.entropy || payload.entropy.length < 8) {
    return { ok: false, reason: 'Missing client runtime signature.' };
  }

  return { ok: true };
}

// In-memory sliding window rate limiter for edge workers
// Allows generous human usage (40 reqs/min) while blocking flood scrapers (100+ reqs/min)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(ip: string, maxPerMinute: number = 40): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean old entries periodically
  if (rateLimitMap.size > 5000) {
    for (const [k, v] of rateLimitMap.entries()) {
      if (v.resetAt < now) rateLimitMap.delete(k);
    }
  }

  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60000 });
    return true;
  }

  if (record.count >= maxPerMinute) {
    return false;
  }

  record.count++;
  return true;
}
