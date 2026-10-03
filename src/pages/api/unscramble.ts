/**
 * API Endpoint: POST /api/unscramble
 * Handles word unscrambling requests
 */

import { unscramble, groupResultsByLength, type UnscrambleOptions } from '../../utils/wordDatabase';

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    const { letters, dictionary = 'ENABLE', startsWith, endsWith, mustInclude } = body;

    // Validate input
    if (!letters || typeof letters !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Missing or invalid "letters" parameter' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (letters.length > 15) {
      return new Response(
        JSON.stringify({ error: 'Maximum 15 letters allowed' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create unscramble options
    const options: UnscrambleOptions = {
      letters,
      dictionary: dictionary as 'ENABLE' | 'TWL' | 'CSW',
      ...(startsWith && { startsWith }),
      ...(endsWith && { endsWith }),
      ...(mustInclude && { mustInclude }),
    };

    // Perform unscrambling
    const results = unscramble(options);
    const grouped = groupResultsByLength(results);

    // Return results
    return new Response(
      JSON.stringify({
        success: true,
        input: letters,
        totalResults: results.length,
        results,
        grouped,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unscramble API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET(request: Request) {
  // Support GET requests with query parameters
  try {
    const url = new URL(request.url);
    const letters = url.searchParams.get('letters');
    const dictionary = url.searchParams.get('dictionary') || 'ENABLE';
    const startsWith = url.searchParams.get('startsWith');
    const endsWith = url.searchParams.get('endsWith');
    const mustInclude = url.searchParams.get('mustInclude');

    // Validate input
    if (!letters) {
      return new Response(
        JSON.stringify({ error: 'Missing "letters" query parameter' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (letters.length > 15) {
      return new Response(
        JSON.stringify({ error: 'Maximum 15 letters allowed' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create unscramble options
    const options: UnscrambleOptions = {
      letters,
      dictionary: dictionary as 'ENABLE' | 'TWL' | 'CSW',
      ...(startsWith && { startsWith }),
      ...(endsWith && { endsWith }),
      ...(mustInclude && { mustInclude }),
    };

    // Perform unscrambling
    const results = unscramble(options);
    const grouped = groupResultsByLength(results);

    // Return results
    return new Response(
      JSON.stringify({
        success: true,
        input: letters,
        totalResults: results.length,
        results,
        grouped,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unscramble API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
