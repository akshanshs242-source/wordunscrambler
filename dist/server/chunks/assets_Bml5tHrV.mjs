globalThis.process ??= {};
globalThis.process.env ??= {};
//#region node_modules/astro/dist/core/errors/errors-data.js
var ClientAddressNotAvailable = {
	name: "ClientAddressNotAvailable",
	title: "`Astro.clientAddress` is not available in current adapter.",
	message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
};
var PrerenderClientAddressNotAvailable = {
	name: "PrerenderClientAddressNotAvailable",
	title: "`Astro.clientAddress` cannot be used inside prerendered routes.",
	message: (name) => `\`Astro.clientAddress\` cannot be used inside prerendered route ${name}.`
};
var StaticClientAddressNotAvailable = {
	name: "StaticClientAddressNotAvailable",
	title: "`Astro.clientAddress` is not available in prerendered pages.",
	message: "`Astro.clientAddress` is only available on pages that are server-rendered.",
	hint: "See https://docs.astro.build/en/guides/on-demand-rendering/ for more information on how to enable SSR."
};
var NoMatchingStaticPathFound = {
	name: "NoMatchingStaticPathFound",
	title: "No static path found for requested path.",
	message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
	hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
};
var OnlyResponseCanBeReturned = {
	name: "OnlyResponseCanBeReturned",
	title: "Invalid type returned by Astro page.",
	message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
	hint: "See https://docs.astro.build/en/guides/on-demand-rendering/#response for more information."
};
var MissingMediaQueryDirective = {
	name: "MissingMediaQueryDirective",
	title: "Missing value for `client:media` directive.",
	message: "Media query not provided for `client:media` directive. A media query similar to `client:media=\"(max-width: 600px)\"` must be provided."
};
var NoMatchingRenderer = {
	name: "NoMatchingRenderer",
	title: "No matching renderer found.",
	message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are" : "is"} ${validRenderersCount} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
	hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`
};
var NoClientOnlyHint = {
	name: "NoClientOnlyHint",
	title: "Missing hint on client:only directive.",
	message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
	hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on \`client:only\`.`
};
var InvalidGetStaticPathsEntry = {
	name: "InvalidGetStaticPathsEntry",
	title: "Invalid entry inside `getStaticPaths()`'s return value.",
	message: (entryType) => `Invalid entry returned by \`getStaticPaths()\`. Expected an object, got \`${entryType}\`.`,
	hint: "If you're using a `.map` call, you might be looking for `.flatMap()` instead. See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on `getStaticPaths()`."
};
var InvalidGetStaticPathsReturn = {
	name: "InvalidGetStaticPathsReturn",
	title: "Invalid value returned by `getStaticPaths()`.",
	message: (returnType) => `Invalid type returned by \`getStaticPaths()\`. Expected an \`array\`, got \`${returnType}\`.`,
	hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on `getStaticPaths()`."
};
var GetStaticPathsExpectedParams = {
	name: "GetStaticPathsExpectedParams",
	title: "Missing params property on `getStaticPaths()` route.",
	message: "Missing or empty required `params` property on `getStaticPaths()` route.",
	hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on `getStaticPaths()`."
};
var GetStaticPathsInvalidRouteParam = {
	name: "GetStaticPathsInvalidRouteParam",
	title: "Invalid route parameter returned by `getStaticPaths()`.",
	message: (key, value, valueType) => `Invalid \`getStaticPaths()\` route parameter for \`${key}\`. Expected a string or undefined, received \`${valueType}\` (\`${value}\`).`,
	hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on `getStaticPaths()`."
};
var GetStaticPathsRequired = {
	name: "GetStaticPathsRequired",
	title: "`getStaticPaths()` function required for dynamic routes.",
	message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths()` function from your dynamic route.",
	hint: `See https://docs.astro.build/en/guides/routing/#dynamic-routes for more information on dynamic routes.

	If you meant for this route to be server-rendered, set \`export const prerender = false;\` in the page.`
};
var ReservedSlotName = {
	name: "ReservedSlotName",
	title: "Invalid slot name.",
	message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
};
var NoMatchingImport = {
	name: "NoMatchingImport",
	title: "No import found for component.",
	message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
	hint: "Please make sure the component is properly imported."
};
var InvalidComponentArgs = {
	name: "InvalidComponentArgs",
	title: "Invalid component arguments.",
	message: (name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`,
	hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
};
var PageNumberParamNotFound = {
	name: "PageNumberParamNotFound",
	title: "Page number param not found.",
	message: (paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`,
	hint: "Rename your file to `[page].astro` or `[...page].astro`."
};
var ImageMissingAlt = {
	name: "ImageMissingAlt",
	title: "Image missing required \"alt\" property.",
	message: "Image missing \"alt\" property. \"alt\" text is required to describe important images on the page.",
	hint: "Use an empty string (\"\") for decorative images."
};
var InvalidImageService = {
	name: "InvalidImageService",
	title: "Error while loading image service.",
	message: "There was an error loading the configured image service. Please see the stack trace for more information."
};
var MissingImageDimension = {
	name: "MissingImageDimension",
	title: "Missing image dimensions.",
	message: (missingDimension, imageURL) => `Missing ${missingDimension === "both" ? "width and height attributes" : `${missingDimension} attribute`} for ${imageURL}. When using remote images, both dimensions are required in order to avoid CLS.`,
	hint: "If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets). You can also use `inferSize={true}` for remote images to get the original dimensions."
};
var FailedToFetchRemoteImageDimensions = {
	name: "FailedToFetchRemoteImageDimensions",
	title: "Failed to retrieve remote image dimensions.",
	message: (imageURL) => `Failed to get the dimensions for ${imageURL}.`,
	hint: "Verify your remote image URL is accurate, and that you are not using `inferSize` with a file located in your `public/` folder."
};
var RemoteImageNotAllowed = {
	name: "RemoteImageNotAllowed",
	title: "Remote image is not allowed.",
	message: (imageURL) => `Remote image ${imageURL} is not allowed by your image configuration.`,
	hint: "Update `image.domains` or `image.remotePatterns`, or remove `inferSize` for this image."
};
var UnsupportedImageFormat = {
	name: "UnsupportedImageFormat",
	title: "Unsupported image format.",
	message: (format, imagePath, supportedFormats) => `Received unsupported format \`${format}\` from \`${imagePath}\`. Currently only ${supportedFormats.join(", ")} are supported by our image services.`,
	hint: "Using an `img` tag directly instead of the `Image` component might be what you're looking for."
};
var UnsupportedImageConversion = {
	name: "UnsupportedImageConversion",
	title: "Unsupported image conversion.",
	message: "Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported."
};
var PrerenderDynamicEndpointPathCollide = {
	name: "PrerenderDynamicEndpointPathCollide",
	title: "Prerendered dynamic endpoint has path collision.",
	message: (pathname) => `Could not render \`${pathname}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
	hint: (filename) => `Rename \`${filename}\` to \`${filename.replace(/\.(?:js|ts)/, (m) => `.json` + m)}\``
};
var ExpectedImage = {
	name: "ExpectedImage",
	title: "Expected src to be an image.",
	message: (src, typeofOptions, fullOptions) => `Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${src}\` (type: \`${typeofOptions}\`).

Full serialized options received: \`${fullOptions}\`.`,
	hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."
};
var ExpectedImageOptions = {
	name: "ExpectedImageOptions",
	title: "Expected image options.",
	message: (options) => `Expected \`getImage()\` parameter to be an object. Received \`${options}\`.`
};
var ExpectedNotESMImage = {
	name: "ExpectedNotESMImage",
	title: "Expected image options, not an ESM-imported image.",
	message: "An ESM-imported image cannot be passed directly to `getImage()`. Instead, pass an object with the image in the `src` property.",
	hint: "Try changing `getImage(myImage)` to `getImage({ src: myImage })`"
};
var IncompatibleDescriptorOptions = {
	name: "IncompatibleDescriptorOptions",
	title: "Cannot set both `densities` and `widths`.",
	message: "Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",
	hint: "Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors."
};
var NoImageMetadata = {
	name: "NoImageMetadata",
	title: "Could not process image metadata.",
	message: (imagePath) => `Could not process image metadata${imagePath ? ` for \`${imagePath}\`` : ""}.`,
	hint: "This is often caused by a corrupted or malformed image. Re-exporting the image from your image editor may fix this issue."
};
var ResponseSentError = {
	name: "ResponseSentError",
	title: "Unable to set response.",
	message: "The response has already been sent to the browser and cannot be altered."
};
var MiddlewareNoDataOrNextCalled = {
	name: "MiddlewareNoDataOrNextCalled",
	title: "The middleware didn't return a `Response`.",
	message: "Make sure your middleware returns a `Response` object, either directly or by returning the `Response` from calling the `next` function."
};
var MiddlewareNotAResponse = {
	name: "MiddlewareNotAResponse",
	title: "The middleware returned something that is not a `Response` object.",
	message: "Any data returned from middleware must be a valid `Response` object."
};
var EndpointDidNotReturnAResponse = {
	name: "EndpointDidNotReturnAResponse",
	title: "The endpoint did not return a `Response`.",
	message: "An endpoint must return either a `Response`, or a `Promise` that resolves with a `Response`."
};
var LocalsNotAnObject = {
	name: "LocalsNotAnObject",
	title: "Value assigned to `locals` is not accepted.",
	message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
	hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."
};
var LocalsReassigned = {
	name: "LocalsReassigned",
	title: "`locals` must not be reassigned.",
	message: "`locals` cannot be assigned directly.",
	hint: "Set a `locals` property instead."
};
var AstroResponseHeadersReassigned = {
	name: "AstroResponseHeadersReassigned",
	title: "`Astro.response.headers` must not be reassigned.",
	message: "Individual headers can be added to and removed from `Astro.response.headers`, but it must not be replaced with another instance of `Headers` altogether.",
	hint: "Consider using `Astro.response.headers.add()`, and `Astro.response.headers.delete()`."
};
var LocalImageUsedWrongly = {
	name: "LocalImageUsedWrongly",
	title: "Local images must be imported.",
	message: (imageFilePath) => `\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or a URL, it cannot be a string filepath. Received \`${imageFilePath}\`.`,
	hint: "If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections). See https://docs.astro.build/en/reference/modules/astro-assets/#src-required for more information on the `src` property."
};
var i18nNoLocaleFoundInPath = {
	name: "i18nNoLocaleFoundInPath",
	title: "The path doesn't contain any locale.",
	message: "You tried to use an i18n utility on a path that doesn't contain any locale. You can use `pathHasLocale` first to determine if the path has a locale."
};
var RewriteWithBodyUsed = {
	name: "RewriteWithBodyUsed",
	title: "Cannot use `Astro.rewrite()` after the request body has been read.",
	message: "`Astro.rewrite()` cannot be used if the request body has already been read. If you need to read the body, first clone the request.",
	hint: "Read the body from `Astro.request.clone()` instead of `Astro.request`, so the original request can still be rewritten."
};
var ForbiddenRewrite = {
	name: "ForbiddenRewrite",
	title: "Forbidden rewrite to a static route.",
	message: (from, to, component) => `You tried to rewrite the on-demand route '${from}' with the static route '${to}', when using the 'server' output. 

The static route '${to}' is rendered by the component
'${component}', which is marked as prerendered. This is a forbidden operation because during the build, the component '${component}' is compiled to an
HTML file, which can't be retrieved at runtime by Astro.`,
	hint: (component) => `Add \`export const prerender = false\` to the component '${component}', or use \`Astro.redirect()\`.`
};
var FontFamilyNotFound = {
	name: "FontFamilyNotFound",
	title: "Font family not found.",
	message: (family) => `No data was found for the \`"${family}"\` family passed to the \`<Font>\` component.`,
	hint: "This is often caused by a typo. Check that the `<Font />` component is using a `cssVariable` specified in your config."
};
var FontFileUrlNotFound = {
	name: "FontFileUrlNotFound",
	title: "Font file URL not found.",
	message: (url) => `The \`"${url}"\` URL passed to the \`experimental_getFontFileURL()\` function is invalid.`,
	hint: "Make sure you pass a valid URL, obtained via the `fontData` object."
};
var MissingGetFontFileRequestUrl = {
	name: "MissingGetFontFileRequestUrl",
	title: "`experimental_getFontFileURL()` requires the request URL with on-demand rendering.",
	hint: "Pass the request URL as the 2nd argument, for example `Astro.url`."
};
var UnavailableAstroGlobal = {
	name: "UnavailableAstroGlobal",
	title: "Unavailable Astro global in `getStaticPaths()`.",
	message: (name) => `The Astro global is not available in this scope. Please remove \`Astro.${name}\` from your \`getStaticPaths()\` function.`
};
var NoManifestAvailable = {
	name: "NoManifestAvailable",
	title: "No manifest available.",
	message: "`new FetchState(request)` was called outside of an Astro server, so no manifest is available.",
	hint: "Make sure this code runs as part of your Astro app, such as its fetch entrypoint. If this error occurred inside an Astro-built server, please open an issue at https://github.com/withastro/astro/issues."
};
var ActionsReturnedInvalidDataError = {
	name: "ActionsReturnedInvalidDataError",
	title: "Action handler returned invalid data.",
	message: (error) => `Action handler returned invalid data. Handlers should return serializable data types like objects, arrays, strings, and numbers. Parse error: ${error}`,
	hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
};
var ActionNotFoundError = {
	name: "ActionNotFoundError",
	title: "Action not found.",
	message: (actionName) => `The server received a request for an action named \`${actionName}\` but could not find a match. If you renamed an action, check that you've updated your \`actions/index\` file and your calling code to match.`,
	hint: "You can run `astro check` to detect type errors caused by mismatched action names."
};
var SessionStorageInitError = {
	name: "SessionStorageInitError",
	title: "Session storage could not be initialized.",
	message: (error, driver) => `Error when initializing session storage${driver ? ` with driver \`${driver}\`` : ""}. \`${error ?? ""}\``,
	hint: "For more information, see https://docs.astro.build/en/guides/sessions/"
};
var SessionStorageSaveError = {
	name: "SessionStorageSaveError",
	title: "Session data could not be saved.",
	message: (error, driver) => `Error when saving session data${driver ? ` with driver \`${driver}\`` : ""}. \`${error ?? ""}\``,
	hint: "For more information, see https://docs.astro.build/en/guides/sessions/"
};
var CacheNotEnabled = {
	name: "CacheNotEnabled",
	title: "Cache is not enabled.",
	message: "`Astro.cache` is not available because the cache feature is not enabled. To use caching, configure a cache provider in your Astro config under `cache`.",
	hint: "Use an adapter that provides a default cache provider, or set one explicitly: `cache: { provider: \"...\" }`. See https://docs.astro.build/en/guides/caching/."
};
//#endregion
//#region node_modules/astro/dist/core/errors/utils.js
function normalizeLF(code) {
	return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
//#endregion
//#region node_modules/astro/dist/core/errors/printer.js
function codeFrame(src, loc) {
	if (!loc || loc.line === void 0 || loc.column === void 0) return "";
	const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
	const visibleLines = [];
	for (let n = -2; n <= 2; n++) if (lines[loc.line + n]) visibleLines.push(loc.line + n);
	let gutterWidth = 0;
	for (const lineNo of visibleLines) {
		let w = `> ${lineNo}`;
		if (w.length > gutterWidth) gutterWidth = w.length;
	}
	let output = "";
	for (const lineNo of visibleLines) {
		const isFocusedLine = lineNo === loc.line - 1;
		output += isFocusedLine ? "> " : "  ";
		output += `${lineNo + 1} | ${lines[lineNo]}
`;
		if (isFocusedLine) output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({ length: loc.column }).join(" ")}^
`;
	}
	return output;
}
//#endregion
//#region node_modules/astro/dist/core/errors/errors.js
function isAstroError(e) {
	return e != null && (e instanceof AstroError || AstroError.is(e));
}
var AstroError = class extends Error {
	loc;
	title;
	hint;
	frame;
	type = "AstroError";
	constructor(props, options) {
		const { name, title, message, stack, location, hint, frame } = props;
		super(message, options);
		this.title = title;
		this.name = name;
		if (message) this.message = message;
		this.stack = stack ? stack : this.stack;
		this.loc = location;
		this.hint = hint;
		this.frame = frame;
	}
	setLocation(location) {
		this.loc = location;
	}
	setName(name) {
		this.name = name;
	}
	setMessage(message) {
		this.message = message;
	}
	setHint(hint) {
		this.hint = hint;
	}
	setFrame(source, location) {
		this.frame = codeFrame(source, location);
	}
	static is(err) {
		return err?.type === "AstroError";
	}
};
//#endregion
//#region node_modules/@astrojs/internal-helpers/dist/path.js
function appendForwardSlash(path) {
	return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
	return path[0] === "/" ? path : "/" + path;
}
var MANY_LEADING_SLASHES = /^\/{2,}/;
function collapseDuplicateLeadingSlashes(path) {
	if (!path) return path;
	return path.replace(MANY_LEADING_SLASHES, "/");
}
var MANY_SLASHES = /\/{2,}/g;
function collapseDuplicateSlashes(path) {
	if (!path) return path;
	return path.replace(MANY_SLASHES, "/");
}
var MANY_TRAILING_SLASHES = /\/{2,}$/g;
function collapseDuplicateTrailingSlashes(path, trailingSlash) {
	if (!path) return path;
	return path.replace(MANY_TRAILING_SLASHES, trailingSlash ? "/" : "") || "/";
}
function removeTrailingForwardSlash(path) {
	return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
	return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
	return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
	return typeof path === "string" || path instanceof String;
}
var INTERNAL_PREFIXES = /* @__PURE__ */ new Set([
	"/_",
	"/@",
	"/.",
	"//"
]);
var JUST_SLASHES = /^\/{2,}$/;
function isInternalPath(path) {
	const prefix = path.slice(0, 2).replace(/\\/g, "/");
	return INTERNAL_PREFIXES.has(prefix) && !JUST_SLASHES.test(path);
}
function joinPaths(...paths) {
	return paths.filter(isString).map((path, i) => {
		if (i === 0) return removeTrailingForwardSlash(path);
		else if (i === paths.length - 1) return removeLeadingForwardSlash(path);
		else return trimSlashes(path);
	}).join("/");
}
function removeQueryString(path) {
	const index = path.lastIndexOf("?");
	return index > 0 ? path.substring(0, index) : path;
}
function isRemotePath(src) {
	if (!src) return false;
	const trimmed = src.trim();
	if (!trimmed) return false;
	let decoded = trimmed;
	let previousDecoded = "";
	let maxIterations = 10;
	while (decoded !== previousDecoded && maxIterations > 0) {
		previousDecoded = decoded;
		try {
			decoded = decodeURIComponent(decoded);
		} catch {
			break;
		}
		maxIterations--;
	}
	if (/^[a-zA-Z]:/.test(decoded)) return false;
	if (decoded[0] === "/" && /^\/[\w.@-]/.test(decoded)) return false;
	if (decoded[0] === "\\") return true;
	if (decoded.startsWith("//")) return true;
	try {
		const url = new URL(decoded, "http://n");
		if (url.username || url.password) return true;
		if (decoded.includes("@") && !url.pathname.includes("@") && !url.search.includes("@")) return true;
		if (url.origin !== "http://n") {
			if (url.protocol.toLowerCase() === "file:") return false;
			return true;
		}
		if (URL.canParse(decoded)) return true;
		return false;
	} catch {
		return true;
	}
}
function slash(path) {
	return path.replace(/\\/g, "/");
}
function fileExtension(path) {
	const ext = path.split(".").pop();
	return ext !== path ? `.${ext}` : "";
}
function removeBase(path, base) {
	if (path.startsWith(base)) return path.slice(removeTrailingForwardSlash(base).length);
	return path;
}
function stripRequestBase(pathname, base) {
	pathname = collapseDuplicateLeadingSlashes(pathname);
	const baseWithoutTrailingSlash = removeTrailingForwardSlash(base);
	if (pathname === baseWithoutTrailingSlash) return "/";
	if (pathname.startsWith(baseWithoutTrailingSlash + "/")) return pathname.slice(baseWithoutTrailingSlash.length);
	return pathname;
}
var WITH_FILE_EXT = /\/[^/]+\.\w+$/;
function hasFileExtension(path) {
	return WITH_FILE_EXT.test(path);
}
//#endregion
//#region node_modules/astro/dist/runtime/server/shorthash.js
/**
* shortdash - https://github.com/bibig/node-shorthash
*
* @license
*
* (The MIT License)
*
* Copyright (c) 2013 Bibig <bibig@me.com>
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary = 61;
function bitwise(str) {
	let hash = 0;
	if (str.length === 0) return hash;
	for (let i = 0; i < str.length; i++) {
		const ch = str.charCodeAt(i);
		hash = (hash << 5) - hash + ch;
		hash = hash & hash;
	}
	return hash;
}
function shorthash(text) {
	let num;
	let result = "";
	let integer = bitwise(text);
	const sign = integer < 0 ? "Z" : "";
	integer = Math.abs(integer);
	while (integer >= binary) {
		num = integer % binary;
		integer = Math.floor(integer / binary);
		result = dictionary[num] + result;
	}
	if (integer > 0) result = dictionary[integer] + result;
	return sign + result;
}
//#endregion
//#region node_modules/@astrojs/internal-helpers/dist/remote.js
function matchPattern(url, remotePattern) {
	return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
function matchPort(url, port) {
	return !port || port === url.port;
}
function matchProtocol(url, protocol) {
	return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname, allowWildcard = false) {
	if (!hostname) return true;
	else if (!allowWildcard || !hostname.startsWith("*")) return hostname === url.hostname;
	else if (hostname.startsWith("**.")) {
		const slicedHostname = hostname.slice(2);
		return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
	} else if (hostname.startsWith("*.")) {
		const slicedHostname = hostname.slice(1);
		if (!url.hostname.endsWith(slicedHostname)) return false;
		const subdomainWithDot = url.hostname.slice(0, -(slicedHostname.length - 1));
		return subdomainWithDot.endsWith(".") && !subdomainWithDot.slice(0, -1).includes(".");
	}
	return false;
}
function matchPathname(url, pathname, allowWildcard = false) {
	if (!pathname) return true;
	else if (!allowWildcard || !pathname.endsWith("*")) return pathname === url.pathname;
	else if (pathname.endsWith("/**")) {
		const slicedPathname = pathname.slice(0, -2);
		return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
	} else if (pathname.endsWith("/*")) {
		const slicedPathname = pathname.slice(0, -1);
		if (!url.pathname.startsWith(slicedPathname)) return false;
		return url.pathname.slice(slicedPathname.length).split("/").filter(Boolean).length === 1;
	}
	return false;
}
function isRemoteAllowed(src, { domains, remotePatterns }) {
	if (!URL.canParse(src)) return false;
	const url = new URL(src);
	if (![
		"http:",
		"https:",
		"data:"
	].includes(url.protocol)) return false;
	return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
var VALID_SUPPORTED_FORMATS = [
	"jpeg",
	"jpg",
	"png",
	"tiff",
	"webp",
	"gif",
	"svg",
	"avif"
];
var DEFAULT_OUTPUT_FORMAT = "webp";
var DEFAULT_HASH_PROPS = [
	"src",
	"width",
	"height",
	"format",
	"quality",
	"fit",
	"position",
	"background"
];
//#endregion
//#region node_modules/astro/dist/assets/layout.js
var DEFAULT_RESOLUTIONS = [
	640,
	750,
	828,
	960,
	1080,
	1280,
	1668,
	1920,
	2048,
	2560,
	3200,
	3840,
	4480,
	5120,
	6016
];
var LIMITED_RESOLUTIONS = [
	640,
	750,
	828,
	1080,
	1280,
	1668,
	2048,
	2560
];
var getWidths = ({ width, layout, breakpoints = DEFAULT_RESOLUTIONS, originalWidth }) => {
	const smallerThanOriginal = (w) => !originalWidth || w <= originalWidth;
	if (layout === "full-width") return breakpoints.filter(smallerThanOriginal);
	if (!width) return [];
	const doubleWidth = width * 2;
	const maxSize = originalWidth ? Math.min(doubleWidth, originalWidth) : doubleWidth;
	if (layout === "fixed") return originalWidth && width > originalWidth ? [originalWidth] : [width, maxSize];
	if (layout === "constrained") return [
		width,
		doubleWidth,
		...breakpoints
	].filter((w) => w <= maxSize).sort((a, b) => a - b);
	return [];
};
var getSizesAttribute = ({ width, layout }) => {
	if (!width || !layout) return;
	switch (layout) {
		case "constrained": return `(min-width: ${width}px) ${width}px, 100vw`;
		case "fixed": return `${width}px`;
		case "full-width": return `100vw`;
		default: return;
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/imageKind.js
function isESMImportedImage(src) {
	return typeof src === "object" || typeof src === "function" && "src" in src;
}
function isRemoteImage(src) {
	return typeof src === "string";
}
async function resolveSrc(src) {
	if (typeof src === "object" && "then" in src) {
		const resource = await src;
		return resource.default ?? resource;
	}
	return src;
}
//#endregion
//#region node_modules/astro/dist/assets/utils/inferSourceFormat.js
var DATA_PREFIX = "data:";
function inferSourceFormat(src) {
	if (src.startsWith(DATA_PREFIX)) {
		const sepIndex = src.indexOf(";");
		const commaIndex = src.indexOf(",");
		const mimeEnd = sepIndex === -1 ? commaIndex : commaIndex === -1 ? sepIndex : Math.min(sepIndex, commaIndex);
		if (mimeEnd === -1) return void 0;
		const mime = src.slice(5, mimeEnd);
		if (mime === "image/svg+xml") return "svg";
		return mime.split("/")[1] || void 0;
	}
	try {
		const cleanSrc = removeQueryString(src).split("#")[0];
		const lastSlash = cleanSrc.lastIndexOf("/");
		const basename = lastSlash === -1 ? cleanSrc : cleanSrc.slice(lastSlash + 1);
		const lastDot = basename.lastIndexOf(".");
		if (lastDot === -1) return void 0;
		return basename.slice(lastDot + 1).toLowerCase();
	} catch {
		return;
	}
}
function resolveDefaultOutputFormat(sourceFormat) {
	return sourceFormat === "svg" ? "svg" : DEFAULT_OUTPUT_FORMAT;
}
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/utils.js
var decoder = new TextDecoder();
var toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
var toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + `0${i.toString(16)}`.slice(-2), "");
var getView = (input, offset) => new DataView(input.buffer, input.byteOffset + offset);
var readInt16LE = (input, offset = 0) => getView(input, offset).getInt16(0, true);
var readUInt16BE = (input, offset = 0) => getView(input, offset).getUint16(0, false);
var readUInt16LE = (input, offset = 0) => getView(input, offset).getUint16(0, true);
var readUInt24LE = (input, offset = 0) => {
	const view = getView(input, offset);
	return view.getUint16(0, true) + (view.getUint8(2) << 16);
};
var readInt32LE = (input, offset = 0) => getView(input, offset).getInt32(0, true);
var readUInt32BE = (input, offset = 0) => getView(input, offset).getUint32(0, false);
var readUInt32LE = (input, offset = 0) => getView(input, offset).getUint32(0, true);
var readUInt64 = (input, offset, isBigEndian) => getView(input, offset).getBigUint64(0, !isBigEndian);
var methods = {
	readUInt16BE,
	readUInt16LE,
	readUInt32BE,
	readUInt32LE
};
function readUInt(input, bits, offset = 0, isBigEndian = false) {
	return methods[`readUInt${bits}${isBigEndian ? "BE" : "LE"}`](input, offset);
}
var MIN_BOX_HEADER = 8;
function readBox(input, offset) {
	if (input.length - offset < MIN_BOX_HEADER) return;
	const boxSize = readUInt32BE(input, offset);
	if (boxSize === 0) return {
		name: toUTF8String(input, offset + 4, offset + 8),
		offset,
		size: input.length - offset
	};
	if (boxSize === 1) return;
	if (boxSize < MIN_BOX_HEADER) return;
	if (input.length - offset < boxSize) return;
	return {
		name: toUTF8String(input, offset + 4, offset + 8),
		offset,
		size: boxSize
	};
}
function findBox(input, boxName, startOffset) {
	let offset = startOffset;
	while (offset < input.length) {
		const box = readBox(input, offset);
		if (!box) break;
		if (box.name === boxName) return box;
		if (box.size < MIN_BOX_HEADER) break;
		const nextOffset = offset + box.size;
		if (nextOffset <= offset) break;
		offset = nextOffset;
	}
}
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/bmp.js
var BMP = {
	validate: (input) => toUTF8String(input, 0, 2) === "BM",
	calculate: (input) => ({
		height: Math.abs(readInt32LE(input, 22)),
		width: readUInt32LE(input, 18)
	})
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/ico.js
var TYPE_ICON = 1;
var SIZE_HEADER$1 = 6;
var SIZE_IMAGE_ENTRY = 16;
function getSizeFromOffset(input, offset) {
	const value = input[offset];
	return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
	const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
	return {
		height: getSizeFromOffset(input, offset + 1),
		width: getSizeFromOffset(input, offset)
	};
}
var ICO = {
	validate(input) {
		const reserved = readUInt16LE(input, 0);
		const imageCount = readUInt16LE(input, 4);
		if (reserved !== 0 || imageCount === 0) return false;
		return readUInt16LE(input, 2) === TYPE_ICON;
	},
	calculate(input) {
		const nbImages = readUInt16LE(input, 4);
		const imageSize = getImageSize$1(input, 0);
		if (nbImages === 1) return imageSize;
		const images = [];
		for (let imageIndex = 0; imageIndex < nbImages; imageIndex += 1) images.push(getImageSize$1(input, imageIndex));
		return {
			width: imageSize.width,
			height: imageSize.height,
			images
		};
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/cur.js
var TYPE_CURSOR = 2;
var CUR = {
	validate(input) {
		const reserved = readUInt16LE(input, 0);
		const imageCount = readUInt16LE(input, 4);
		if (reserved !== 0 || imageCount === 0) return false;
		return readUInt16LE(input, 2) === TYPE_CURSOR;
	},
	calculate: (input) => ICO.calculate(input)
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/dds.js
var DDS = {
	validate: (input) => readUInt32LE(input, 0) === 542327876,
	calculate: (input) => ({
		height: readUInt32LE(input, 12),
		width: readUInt32LE(input, 16)
	})
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/gif.js
var gifRegexp = /^GIF8[79]a/;
var GIF = {
	validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
	calculate: (input) => ({
		height: readUInt16LE(input, 8),
		width: readUInt16LE(input, 6)
	})
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/heif.js
var brandMap = {
	avif: "avif",
	avis: "avif",
	mif1: "heif",
	msf1: "heif",
	heic: "heic",
	heix: "heic",
	hevc: "heic",
	hevx: "heic"
};
function detectType(input, start, end) {
	let hasAvif = false;
	let hasHeic = false;
	let hasHeif = false;
	for (let i = start; i <= end; i += 4) {
		const brand = toUTF8String(input, i, i + 4);
		if (brand === "avif" || brand === "avis") hasAvif = true;
		else if (brand === "heic" || brand === "heix" || brand === "hevc" || brand === "hevx") hasHeic = true;
		else if (brand === "mif1" || brand === "msf1") hasHeif = true;
	}
	if (hasAvif) return "avif";
	if (hasHeic) return "heic";
	if (hasHeif) return "heif";
}
var HEIF = {
	validate(input) {
		if (toUTF8String(input, 4, 8) !== "ftyp") return false;
		const ftypBox = findBox(input, "ftyp", 0);
		if (!ftypBox) return false;
		return toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12) in brandMap;
	},
	calculate(input) {
		const metaBox = findBox(input, "meta", 0);
		const iprpBox = metaBox && findBox(input, "iprp", metaBox.offset + 12);
		const ipcoBox = iprpBox && findBox(input, "ipco", iprpBox.offset + 8);
		if (!ipcoBox) throw new TypeError("Invalid HEIF, no ipco box found");
		const type = detectType(input, 8, metaBox.offset);
		const images = [];
		let currentOffset = ipcoBox.offset + 8;
		const ipcoEnd = ipcoBox.offset + ipcoBox.size;
		while (currentOffset < ipcoEnd) {
			const ispeBox = findBox(input, "ispe", currentOffset);
			if (!ispeBox) break;
			if (ispeBox.size < 8) break;
			if (ispeBox.offset + ispeBox.size > ipcoEnd) break;
			const rawWidth = readUInt32BE(input, ispeBox.offset + 12);
			const rawHeight = readUInt32BE(input, ispeBox.offset + 16);
			const clapBox = findBox(input, "clap", currentOffset);
			let width = rawWidth;
			let height = rawHeight;
			if (clapBox && clapBox.offset < ipcoEnd && clapBox.size >= 8) width = rawWidth - readUInt32BE(input, clapBox.offset + 12);
			images.push({
				height,
				width
			});
			const nextOffset = ispeBox.offset + ispeBox.size;
			if (nextOffset <= currentOffset) break;
			currentOffset = nextOffset;
		}
		if (images.length === 0) throw new TypeError("Invalid HEIF, no sizes found");
		return {
			width: images[0].width,
			height: images[0].height,
			type,
			...images.length > 1 ? { images } : {}
		};
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/icns.js
var SIZE_HEADER = 8;
var FILE_LENGTH_OFFSET = 4;
var MIN_ENTRY_LENGTH = 8;
var ENTRY_LENGTH_OFFSET = 4;
var ICON_TYPE_SIZE = {
	ICON: 32,
	"ICN#": 32,
	"icm#": 16,
	icm4: 16,
	icm8: 16,
	"ics#": 16,
	ics4: 16,
	ics8: 16,
	is32: 16,
	s8mk: 16,
	icp4: 16,
	icl4: 32,
	icl8: 32,
	il32: 32,
	l8mk: 32,
	icp5: 32,
	ic11: 32,
	ich4: 48,
	ich8: 48,
	ih32: 48,
	h8mk: 48,
	icp6: 64,
	ic12: 32,
	it32: 128,
	t8mk: 128,
	ic07: 128,
	ic08: 256,
	ic13: 256,
	ic09: 512,
	ic14: 512,
	ic10: 1024
};
function readImageHeader(input, imageOffset) {
	const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
	return [toUTF8String(input, imageOffset, imageLengthOffset), readUInt32BE(input, imageLengthOffset)];
}
function getImageSize(type) {
	const size = ICON_TYPE_SIZE[type];
	return {
		width: size,
		height: size,
		type
	};
}
var ICNS = {
	validate: (input) => toUTF8String(input, 0, 4) === "icns",
	calculate(input) {
		const inputLength = input.length;
		const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
		let imageOffset = SIZE_HEADER;
		const images = [];
		while (imageOffset < fileLength && imageOffset < inputLength) {
			if (inputLength - imageOffset < MIN_ENTRY_LENGTH) break;
			const imageHeader = readImageHeader(input, imageOffset);
			const entryLength = imageHeader[1];
			if (entryLength < MIN_ENTRY_LENGTH) break;
			const imageSize = getImageSize(imageHeader[0]);
			if (imageSize.width && imageSize.height) images.push(imageSize);
			const nextOffset = imageOffset + entryLength;
			if (nextOffset <= imageOffset) break;
			imageOffset = nextOffset;
		}
		if (images.length === 0) throw new TypeError("Invalid ICNS, no sizes found");
		return {
			width: images[0].width,
			height: images[0].height,
			...images.length > 1 ? { images } : {}
		};
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/j2c.js
var J2C = {
	validate: (input) => readUInt32BE(input, 0) === 4283432785,
	calculate: (input) => ({
		height: readUInt32BE(input, 12),
		width: readUInt32BE(input, 8)
	})
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/jp2.js
var JP2 = {
	validate(input) {
		if (toUTF8String(input, 4, 8) !== "jP  ") return false;
		const ftypBox = findBox(input, "ftyp", 0);
		if (!ftypBox) return false;
		return toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12) === "jp2 ";
	},
	calculate(input) {
		const jp2hBox = findBox(input, "jp2h", 0);
		const ihdrBox = jp2hBox && jp2hBox.size >= 8 && findBox(input, "ihdr", jp2hBox.offset + 8);
		if (ihdrBox && ihdrBox.size >= 8) return {
			height: readUInt32BE(input, ihdrBox.offset + 8),
			width: readUInt32BE(input, ihdrBox.offset + 12)
		};
		throw new TypeError("Unsupported JPEG 2000 format");
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/jpg.js
var EXIF_MARKER = "45786966";
var APP1_DATA_SIZE_BYTES = 2;
var EXIF_HEADER_BYTES = 6;
var BIG_ENDIAN_BYTE_ALIGN = "4d4d";
var LITTLE_ENDIAN_BYTE_ALIGN = "4949";
var IDF_ENTRY_BYTES = 12;
function isEXIF(input) {
	return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
	return {
		height: readUInt16BE(input, index),
		width: readUInt16BE(input, index + 2)
	};
}
function extractOrientation(exifBlock, isBigEndian) {
	const idfDirectoryEntries = readUInt(exifBlock, 16, 14, isBigEndian);
	for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
		const start = 16 + directoryEntryNumber * IDF_ENTRY_BYTES;
		const end = start + IDF_ENTRY_BYTES;
		if (start > exifBlock.length) return;
		const block = exifBlock.slice(start, end);
		if (readUInt(block, 16, 0, isBigEndian) === 274) {
			if (readUInt(block, 16, 2, isBigEndian) !== 3) return;
			if (readUInt(block, 32, 4, isBigEndian) !== 1) return;
			return readUInt(block, 16, 8, isBigEndian);
		}
	}
}
function validateExifBlock(input, index) {
	const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
	const byteAlign = toHexString(exifBlock, EXIF_HEADER_BYTES, 8);
	const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
	if (isBigEndian || byteAlign === LITTLE_ENDIAN_BYTE_ALIGN) return extractOrientation(exifBlock, isBigEndian);
}
function validateInput(input, index) {
	if (index > input.length) throw new TypeError("Corrupt JPG, exceeded buffer limits");
}
var JPG = {
	validate: (input) => toHexString(input, 0, 2) === "ffd8",
	calculate(_input) {
		let input = _input.slice(4);
		let orientation;
		let next;
		while (input.length) {
			const i = readUInt16BE(input, 0);
			validateInput(input, i);
			if (input[i] !== 255) {
				input = input.slice(1);
				continue;
			}
			if (isEXIF(input)) orientation = validateExifBlock(input, i);
			next = input[i + 1];
			if (next === 192 || next === 193 || next === 194) {
				const size = extractSize(input, i + 5);
				if (!orientation) return size;
				return {
					height: size.height,
					orientation,
					width: size.width
				};
			}
			input = input.slice(i + 2);
		}
		throw new TypeError("Invalid JPG, no size found");
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/utils/bit-reader.js
var BitReader = class {
	byteOffset = 2;
	bitOffset = 0;
	input;
	endianness;
	constructor(input, endianness) {
		this.input = input;
		this.endianness = endianness;
	}
	/** Reads a specified number of bits, and move the offset */
	getBits(length = 1) {
		let result = 0;
		let bitsRead = 0;
		while (bitsRead < length) {
			if (this.byteOffset >= this.input.length) throw new Error("Reached end of input");
			const currentByte = this.input[this.byteOffset];
			const bitsLeft = 8 - this.bitOffset;
			const bitsToRead = Math.min(length - bitsRead, bitsLeft);
			if (this.endianness === "little-endian") {
				const mask = (1 << bitsToRead) - 1;
				const bits = currentByte >> this.bitOffset & mask;
				result |= bits << bitsRead;
			} else {
				const bits = (currentByte & (1 << bitsToRead) - 1 << 8 - this.bitOffset - bitsToRead) >> 8 - this.bitOffset - bitsToRead;
				result = result << bitsToRead | bits;
			}
			bitsRead += bitsToRead;
			this.bitOffset += bitsToRead;
			if (this.bitOffset === 8) {
				this.byteOffset++;
				this.bitOffset = 0;
			}
		}
		return result;
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/jxl-stream.js
function calculateImageDimension(reader, isSmallImage) {
	if (isSmallImage) return 8 * (1 + reader.getBits(5));
	const extraBits = [
		9,
		13,
		18,
		30
	][reader.getBits(2)];
	return 1 + reader.getBits(extraBits);
}
function calculateImageWidth(reader, isSmallImage, widthMode, height) {
	if (isSmallImage && widthMode === 0) return 8 * (1 + reader.getBits(5));
	if (widthMode === 0) return calculateImageDimension(reader, false);
	return Math.floor(height * [
		1,
		1.2,
		4 / 3,
		1.5,
		16 / 9,
		5 / 4,
		2
	][widthMode - 1]);
}
var JXLStream = {
	validate: (input) => {
		return toHexString(input, 0, 2) === "ff0a";
	},
	calculate(input) {
		const reader = new BitReader(input, "little-endian");
		const isSmallImage = reader.getBits(1) === 1;
		const height = calculateImageDimension(reader, isSmallImage);
		return {
			width: calculateImageWidth(reader, isSmallImage, reader.getBits(3), height),
			height
		};
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/jxl.js
function extractCodestream(input) {
	const jxlcBox = findBox(input, "jxlc", 0);
	if (jxlcBox && jxlcBox.size >= 8) return input.slice(jxlcBox.offset + 8, jxlcBox.offset + jxlcBox.size);
	const partialStreams = extractPartialStreams(input);
	if (partialStreams.length > 0) return concatenateCodestreams(partialStreams);
}
function extractPartialStreams(input) {
	const partialStreams = [];
	let offset = 0;
	while (offset < input.length) {
		const jxlpBox = findBox(input, "jxlp", offset);
		if (!jxlpBox) break;
		if (jxlpBox.size < 12) break;
		partialStreams.push(input.slice(jxlpBox.offset + 12, jxlpBox.offset + jxlpBox.size));
		const nextOffset = jxlpBox.offset + jxlpBox.size;
		if (nextOffset <= offset) break;
		offset = nextOffset;
	}
	return partialStreams;
}
function concatenateCodestreams(partialCodestreams) {
	const totalLength = partialCodestreams.reduce((acc, curr) => acc + curr.length, 0);
	const codestream = new Uint8Array(totalLength);
	let position = 0;
	for (const partial of partialCodestreams) {
		codestream.set(partial, position);
		position += partial.length;
	}
	return codestream;
}
var JXL = {
	validate: (input) => {
		if (toUTF8String(input, 4, 8) !== "JXL ") return false;
		const ftypBox = findBox(input, "ftyp", 0);
		if (!ftypBox) return false;
		return toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12) === "jxl ";
	},
	calculate(input) {
		const codestream = extractCodestream(input);
		if (codestream) return JXLStream.calculate(codestream);
		throw new Error("No codestream found in JXL container");
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/ktx.js
var KTX = {
	validate: (input) => {
		const signature = toUTF8String(input, 1, 7);
		return ["KTX 11", "KTX 20"].includes(signature);
	},
	calculate: (input) => {
		const type = input[5] === 49 ? "ktx" : "ktx2";
		const offset = type === "ktx" ? 36 : 20;
		return {
			height: readUInt32LE(input, offset + 4),
			width: readUInt32LE(input, offset),
			type
		};
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/png.js
var pngSignature = "PNG\r\n\n";
var pngImageHeaderChunkName = "IHDR";
var pngFriedChunkName = "CgBI";
var PNG = {
	validate(input) {
		if (pngSignature === toUTF8String(input, 1, 8)) {
			let chunkName = toUTF8String(input, 12, 16);
			if (chunkName === pngFriedChunkName) chunkName = toUTF8String(input, 28, 32);
			if (chunkName !== pngImageHeaderChunkName) throw new TypeError("Invalid PNG");
			return true;
		}
		return false;
	},
	calculate(input) {
		if (toUTF8String(input, 12, 16) === pngFriedChunkName) return {
			height: readUInt32BE(input, 36),
			width: readUInt32BE(input, 32)
		};
		return {
			height: readUInt32BE(input, 20),
			width: readUInt32BE(input, 16)
		};
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/pnm.js
var PNMTypes = {
	P1: "pbm/ascii",
	P2: "pgm/ascii",
	P3: "ppm/ascii",
	P4: "pbm",
	P5: "pgm",
	P6: "ppm",
	P7: "pam",
	PF: "pfm"
};
var handlers = {
	default: (lines) => {
		let dimensions = [];
		while (lines.length > 0) {
			const line = lines.shift();
			if (line[0] === "#") continue;
			dimensions = line.split(" ");
			break;
		}
		if (dimensions.length === 2) return {
			height: Number.parseInt(dimensions[1], 10),
			width: Number.parseInt(dimensions[0], 10)
		};
		throw new TypeError("Invalid PNM");
	},
	pam: (lines) => {
		const size = {};
		while (lines.length > 0) {
			const line = lines.shift();
			if (line.length > 16 || line.charCodeAt(0) > 128) continue;
			const [key, value] = line.split(" ");
			if (key && value) size[key.toLowerCase()] = Number.parseInt(value, 10);
			if (size.height && size.width) break;
		}
		if (size.height && size.width) return {
			height: size.height,
			width: size.width
		};
		throw new TypeError("Invalid PAM");
	}
};
var PNM = {
	validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
	calculate(input) {
		const type = PNMTypes[toUTF8String(input, 0, 2)];
		const lines = toUTF8String(input, 3).split(/[\r\n]+/);
		return (handlers[type] || handlers.default)(lines);
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/psd.js
var PSD = {
	validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
	calculate: (input) => ({
		height: readUInt32BE(input, 14),
		width: readUInt32BE(input, 18)
	})
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/svg.js
var svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
var extractorRegExps = {
	height: /\sheight=(['"])([^%]+?)\1/,
	root: svgReg,
	viewbox: /\sviewBox=(['"])(.+?)\1/i,
	width: /\swidth=(['"])([^%]+?)\1/
};
var INCH_CM = 2.54;
var units = {
	in: 96,
	cm: 96 / INCH_CM,
	em: 16,
	ex: 8,
	m: 96 / INCH_CM * 100,
	mm: 96 / INCH_CM / 10,
	pc: 96 / 72 / 12,
	pt: 96 / 72,
	px: 1
};
var unitsReg = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`);
function parseLength(len) {
	const m = unitsReg.exec(len);
	if (!m) return;
	return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
	const bounds = viewbox.split(" ");
	return {
		height: parseLength(bounds[3]),
		width: parseLength(bounds[2])
	};
}
function parseAttributes(root) {
	const width = extractorRegExps.width.exec(root);
	const height = extractorRegExps.height.exec(root);
	const viewbox = extractorRegExps.viewbox.exec(root);
	return {
		height: height && parseLength(height[2]),
		viewbox: viewbox && parseViewbox(viewbox[2]),
		width: width && parseLength(width[2])
	};
}
function calculateByDimensions(attrs) {
	return {
		height: attrs.height,
		width: attrs.width
	};
}
function calculateByViewbox(attrs, viewbox) {
	const ratio = viewbox.width / viewbox.height;
	if (attrs.width) return {
		height: Math.floor(attrs.width / ratio),
		width: attrs.width
	};
	if (attrs.height) return {
		height: attrs.height,
		width: Math.floor(attrs.height * ratio)
	};
	return {
		height: viewbox.height,
		width: viewbox.width
	};
}
var SVG = {
	validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
	calculate(input) {
		const root = extractorRegExps.root.exec(toUTF8String(input));
		if (root) {
			const attrs = parseAttributes(root[0]);
			if (attrs.width != null && attrs.height != null) return calculateByDimensions(attrs);
			if (attrs.viewbox) return calculateByViewbox(attrs, attrs.viewbox);
		}
		throw new TypeError("Invalid SVG");
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/tga.js
var TGA = {
	validate(input) {
		return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
	},
	calculate(input) {
		return {
			height: readUInt16LE(input, 14),
			width: readUInt16LE(input, 12)
		};
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/tiff.js
var CONSTANTS = {
	TAG: {
		WIDTH: 256,
		HEIGHT: 257,
		COMPRESSION: 259
	},
	TYPE: {
		SHORT: 3,
		LONG: 4,
		LONG8: 16
	},
	ENTRY_SIZE: {
		STANDARD: 12,
		BIG: 20
	},
	COUNT_SIZE: {
		STANDARD: 2,
		BIG: 8
	}
};
function readIFD(input, { isBigEndian, isBigTiff }) {
	const ifdOffset = isBigTiff ? Number(readUInt64(input, 8, isBigEndian)) : readUInt(input, 32, 4, isBigEndian);
	const entryCountSize = isBigTiff ? CONSTANTS.COUNT_SIZE.BIG : CONSTANTS.COUNT_SIZE.STANDARD;
	return input.slice(ifdOffset + entryCountSize);
}
function readTagValue(input, type, offset, isBigEndian) {
	switch (type) {
		case CONSTANTS.TYPE.SHORT: return readUInt(input, 16, offset, isBigEndian);
		case CONSTANTS.TYPE.LONG: return readUInt(input, 32, offset, isBigEndian);
		case CONSTANTS.TYPE.LONG8: {
			const value = Number(readUInt64(input, offset, isBigEndian));
			if (value > Number.MAX_SAFE_INTEGER) throw new TypeError("Value too large");
			return value;
		}
		default: return 0;
	}
}
function nextTag(input, isBigTiff) {
	const entrySize = isBigTiff ? CONSTANTS.ENTRY_SIZE.BIG : CONSTANTS.ENTRY_SIZE.STANDARD;
	if (input.length > entrySize) return input.slice(entrySize);
}
function extractTags(input, { isBigEndian, isBigTiff }) {
	const tags = {};
	let temp = input;
	while (temp?.length) {
		const code = readUInt(temp, 16, 0, isBigEndian);
		const type = readUInt(temp, 16, 2, isBigEndian);
		const length = isBigTiff ? Number(readUInt64(temp, 4, isBigEndian)) : readUInt(temp, 32, 4, isBigEndian);
		if (code === 0) break;
		if (length === 1 && (type === CONSTANTS.TYPE.SHORT || type === CONSTANTS.TYPE.LONG || isBigTiff && type === CONSTANTS.TYPE.LONG8)) tags[code] = readTagValue(temp, type, isBigTiff ? 12 : 8, isBigEndian);
		temp = nextTag(temp, isBigTiff);
	}
	return tags;
}
function determineFormat(input) {
	const signature = toUTF8String(input, 0, 2);
	const version = readUInt(input, 16, 2, signature === "MM");
	return {
		isBigEndian: signature === "MM",
		isBigTiff: version === 43
	};
}
function validateBigTIFFHeader(input, isBigEndian) {
	const byteSize = readUInt(input, 16, 4, isBigEndian);
	const reserved = readUInt(input, 16, 6, isBigEndian);
	if (byteSize !== 8 || reserved !== 0) throw new TypeError("Invalid BigTIFF header");
}
var signatures = /* @__PURE__ */ new Set([
	"49492a00",
	"4d4d002a",
	"49492b00",
	"4d4d002b"
]);
var TIFF = {
	validate: (input) => {
		const signature = toHexString(input, 0, 4);
		return signatures.has(signature);
	},
	calculate(input) {
		const format = determineFormat(input);
		if (format.isBigTiff) validateBigTIFFHeader(input, format.isBigEndian);
		const tags = extractTags(readIFD(input, format), format);
		const info = {
			height: tags[CONSTANTS.TAG.HEIGHT],
			width: tags[CONSTANTS.TAG.WIDTH],
			type: format.isBigTiff ? "bigtiff" : "tiff"
		};
		if (tags[CONSTANTS.TAG.COMPRESSION]) info.compression = tags[CONSTANTS.TAG.COMPRESSION];
		if (!info.width || !info.height) throw new TypeError("Invalid Tiff. Missing tags");
		return info;
	}
};
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/webp.js
function calculateExtended(input) {
	return {
		height: 1 + readUInt24LE(input, 7),
		width: 1 + readUInt24LE(input, 4)
	};
}
function calculateLossless(input) {
	return {
		height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
		width: 1 + ((input[2] & 63) << 8 | input[1])
	};
}
function calculateLossy(input) {
	return {
		height: readInt16LE(input, 8) & 16383,
		width: readInt16LE(input, 6) & 16383
	};
}
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/types/index.js
var typeHandlers = /* @__PURE__ */ new Map([
	["bmp", BMP],
	["cur", CUR],
	["dds", DDS],
	["gif", GIF],
	["heif", HEIF],
	["icns", ICNS],
	["ico", ICO],
	["j2c", J2C],
	["jp2", JP2],
	["jpg", JPG],
	["jxl", JXL],
	["jxl-stream", JXLStream],
	["ktx", KTX],
	["png", PNG],
	["pnm", PNM],
	["psd", PSD],
	["svg", SVG],
	["tga", TGA],
	["tiff", TIFF],
	["webp", {
		validate(input) {
			const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
			const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
			const vp8Header = "VP8" === toUTF8String(input, 12, 15);
			return riffHeader && webpHeader && vp8Header;
		},
		calculate(_input) {
			const chunkHeader = toUTF8String(_input, 12, 16);
			const input = _input.slice(20, 30);
			if (chunkHeader === "VP8X") {
				const extendedHeader = input[0];
				const validStart = (extendedHeader & 192) === 0;
				const validEnd = (extendedHeader & 1) === 0;
				if (validStart && validEnd) return calculateExtended(input);
				throw new TypeError("Invalid WebP");
			}
			if (chunkHeader === "VP8 " && input[0] !== 47) return calculateLossy(input);
			const signature = toHexString(input, 3, 6);
			if (chunkHeader === "VP8L" && signature !== "9d012a") return calculateLossless(input);
			throw new TypeError("Invalid WebP");
		}
	}]
]);
var types = Array.from(typeHandlers.keys());
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/detector.js
var firstBytes = /* @__PURE__ */ new Map([
	[0, "heif"],
	[56, "psd"],
	[66, "bmp"],
	[68, "dds"],
	[71, "gif"],
	[73, "tiff"],
	[77, "tiff"],
	[82, "webp"],
	[105, "icns"],
	[137, "png"],
	[255, "jpg"]
]);
function detector(input) {
	const byte = input[0];
	const type = firstBytes.get(byte);
	if (type && typeHandlers.get(type).validate(input)) return type;
	return types.find((imageType) => typeHandlers.get(imageType).validate(input));
}
//#endregion
//#region node_modules/astro/dist/assets/utils/vendor/image-size/lookup.js
function lookup(input) {
	const type = detector(input);
	if (typeof type !== "undefined") {
		const size = typeHandlers.get(type).calculate(input);
		if (size !== void 0) {
			size.type = size.type ?? type;
			return size;
		}
	}
	throw new TypeError("unsupported file type: " + type);
}
//#endregion
//#region node_modules/astro/dist/assets/utils/metadata.js
async function imageMetadata(data, src) {
	let result;
	try {
		result = lookup(data);
	} catch {
		throw new AstroError({
			...NoImageMetadata,
			message: NoImageMetadata.message(src)
		});
	}
	if (result.height == null || result.width == null || !result.type) throw new AstroError({
		...NoImageMetadata,
		message: NoImageMetadata.message(src)
	});
	const { width, height, type, orientation } = result;
	const isPortrait = (orientation || 0) >= 5;
	return {
		width: isPortrait ? height : width,
		height: isPortrait ? width : height,
		format: type,
		orientation
	};
}
//#endregion
//#region node_modules/astro/dist/assets/utils/redirectValidation.js
async function fetchWithRedirects(options) {
	const { url, headers, imageConfig, fetchFn = globalThis.fetch, redirectLimit = 10, onMaxRedirectsExceeded = (_u) => /* @__PURE__ */ new Error("Maximum redirect depth exceeded"), onMissingLocationHeader = (_s, _u) => /* @__PURE__ */ new Error(`Redirect response ${_s} missing Location header`), onDisallowedRedirect = (_current, _target) => /* @__PURE__ */ new Error(`The image at ${_current} redirected to ${_target}, which is not an allowed remote location.`) } = options;
	if (redirectLimit <= 0) throw onMaxRedirectsExceeded(typeof url === "string" ? url : url.toString());
	const urlString = typeof url === "string" ? url : url.toString();
	const res = await fetchFn(new Request(url, { headers }), { redirect: "manual" });
	if ([
		301,
		302,
		303,
		307,
		308
	].includes(res.status)) {
		const location = res.headers.get("Location");
		if (!location) throw onMissingLocationHeader(res.status, urlString);
		const redirectUrl = new URL(location, urlString).toString();
		if (!isRemoteAllowed(redirectUrl, {
			domains: imageConfig.domains ?? [],
			remotePatterns: imageConfig.remotePatterns ?? []
		})) throw onDisallowedRedirect(urlString, redirectUrl);
		return fetchWithRedirects({
			url: redirectUrl,
			headers,
			imageConfig,
			fetchFn,
			redirectLimit: redirectLimit - 1,
			onMaxRedirectsExceeded,
			onMissingLocationHeader,
			onDisallowedRedirect
		});
	}
	return res;
}
//#endregion
//#region node_modules/astro/dist/assets/utils/remoteProbe.js
async function inferRemoteSize(url, imageConfig) {
	if (!URL.canParse(url)) throw new AstroError({
		...FailedToFetchRemoteImageDimensions,
		message: FailedToFetchRemoteImageDimensions.message(url)
	});
	const allowlistConfig = imageConfig ? {
		domains: imageConfig.domains ?? [],
		remotePatterns: imageConfig.remotePatterns ?? []
	} : void 0;
	if (!allowlistConfig) {
		const parsedUrl = new URL(url);
		if (!["http:", "https:"].includes(parsedUrl.protocol)) throw new AstroError({
			...FailedToFetchRemoteImageDimensions,
			message: FailedToFetchRemoteImageDimensions.message(url)
		});
	}
	if (allowlistConfig && !isRemoteAllowed(url, allowlistConfig)) throw new AstroError({
		...RemoteImageNotAllowed,
		message: RemoteImageNotAllowed.message(url)
	});
	let response;
	try {
		response = await fetchWithRedirects({
			url,
			onMaxRedirectsExceeded: (u) => new AstroError({
				...FailedToFetchRemoteImageDimensions,
				message: FailedToFetchRemoteImageDimensions.message(u)
			}),
			onMissingLocationHeader: (_status, u) => new AstroError({
				...FailedToFetchRemoteImageDimensions,
				message: FailedToFetchRemoteImageDimensions.message(u)
			}),
			imageConfig: imageConfig ?? {
				remotePatterns: [],
				domains: []
			}
		});
	} catch (_err) {
		throw new AstroError({
			...FailedToFetchRemoteImageDimensions,
			message: FailedToFetchRemoteImageDimensions.message(url)
		});
	}
	if (allowlistConfig && !isRemoteAllowed(response.url, allowlistConfig)) throw new AstroError({
		...RemoteImageNotAllowed,
		message: RemoteImageNotAllowed.message(url)
	});
	if (!response.body || !response.ok) throw new AstroError({
		...FailedToFetchRemoteImageDimensions,
		message: FailedToFetchRemoteImageDimensions.message(url)
	});
	const reader = response.body.getReader();
	let done, value;
	let accumulatedChunks = /* @__PURE__ */ new Uint8Array();
	while (!done) {
		const readResult = await reader.read();
		done = readResult.done;
		if (done) break;
		if (readResult.value) {
			value = readResult.value;
			let tmp = new Uint8Array(accumulatedChunks.length + value.length);
			tmp.set(accumulatedChunks, 0);
			tmp.set(value, accumulatedChunks.length);
			accumulatedChunks = tmp;
			try {
				const dimensions = await imageMetadata(accumulatedChunks, url);
				if (dimensions) {
					await reader.cancel();
					return dimensions;
				}
			} catch {}
		}
	}
	throw new AstroError({
		...NoImageMetadata,
		message: NoImageMetadata.message(url)
	});
}
//#endregion
//#region node_modules/astro/dist/assets/services/service.js
function isLocalService(service) {
	if (!service) return false;
	return "transform" in service;
}
var sortNumeric = (a, b) => a - b;
function verifyOptions(options) {
	if (!options.src || !isRemoteImage(options.src) && !isESMImportedImage(options.src)) throw new AstroError({
		...ExpectedImage,
		message: ExpectedImage.message(JSON.stringify(options.src), typeof options.src, JSON.stringify(options, (_, v) => v === void 0 ? null : v))
	});
	if (!isESMImportedImage(options.src)) {
		if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) throw new AstroError({
			...LocalImageUsedWrongly,
			message: LocalImageUsedWrongly.message(options.src)
		});
		let missingDimension;
		if (!options.width && !options.height) missingDimension = "both";
		else if (!options.width && options.height) missingDimension = "width";
		else if (options.width && !options.height) missingDimension = "height";
		if (missingDimension) throw new AstroError({
			...MissingImageDimension,
			message: MissingImageDimension.message(missingDimension, options.src)
		});
	} else {
		if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) throw new AstroError({
			...UnsupportedImageFormat,
			message: UnsupportedImageFormat.message(options.src.format, options.src.src, VALID_SUPPORTED_FORMATS)
		});
		if (options.widths && options.densities) throw new AstroError(IncompatibleDescriptorOptions);
		if (options.src.format !== "svg" && options.format === "svg") throw new AstroError(UnsupportedImageConversion);
	}
}
var baseService = {
	propertiesToHash: DEFAULT_HASH_PROPS,
	validateOptions(options) {
		verifyOptions(options);
		if (!options.format) {
			if (isESMImportedImage(options.src)) options.format = resolveDefaultOutputFormat(options.src.format);
			else {
				const inferred = inferSourceFormat(options.src);
				if (inferred) options.format = resolveDefaultOutputFormat(inferred);
			}
		}
		if (options.width) options.width = Math.round(options.width);
		if (options.height) options.height = Math.round(options.height);
		if (options.layout) delete options.layout;
		if (options.fit === "none") delete options.fit;
		return options;
	},
	getHTMLAttributes(options) {
		const { targetWidth, targetHeight } = getTargetDimensions(options);
		const { src, width, height, format, quality, densities, widths, formats, layout, priority, fit, position, background, ...attributes } = options;
		return {
			...attributes,
			width: targetWidth,
			height: targetHeight,
			loading: attributes.loading ?? "lazy",
			decoding: attributes.decoding ?? "async"
		};
	},
	getSrcSet(options) {
		const { targetWidth, targetHeight } = getTargetDimensions(options);
		const aspectRatio = targetWidth / targetHeight;
		const { widths, densities } = options;
		const targetFormat = options.format;
		let transformedWidths = (widths ?? []).sort(sortNumeric);
		let imageWidth = options.width;
		let maxWidth = Number.POSITIVE_INFINITY;
		if (isESMImportedImage(options.src)) {
			imageWidth = options.src.width;
			maxWidth = imageWidth;
			if (transformedWidths.length > 0 && transformedWidths.at(-1) > maxWidth) {
				transformedWidths = transformedWidths.filter((width) => width <= maxWidth);
				transformedWidths.push(maxWidth);
			}
		}
		transformedWidths = Array.from(new Set(transformedWidths));
		const { width: transformWidth, height: transformHeight, ...transformWithoutDimensions } = options;
		let allWidths = [];
		if (densities) {
			const densityValues = densities.map((density) => {
				if (typeof density === "number") return density;
				else return Number.parseFloat(density);
			});
			allWidths = densityValues.sort(sortNumeric).map((density) => Math.round(targetWidth * density)).map((width, index) => ({
				width,
				descriptor: `${densityValues[index]}x`
			}));
		} else if (transformedWidths.length > 0) allWidths = transformedWidths.map((width) => ({
			width,
			descriptor: `${width}w`
		}));
		return allWidths.map(({ width, descriptor }) => {
			const height = Math.round(width / aspectRatio);
			return {
				transform: {
					...transformWithoutDimensions,
					width,
					height
				},
				descriptor,
				attributes: targetFormat ? { type: `image/${targetFormat}` } : {}
			};
		});
	},
	getURL(options, imageConfig) {
		const searchParams = new URLSearchParams();
		if (isESMImportedImage(options.src)) searchParams.append("href", options.src.src);
		else if (isRemoteAllowed(options.src, imageConfig)) searchParams.append("href", options.src);
		else return options.src;
		Object.entries({
			w: "width",
			h: "height",
			q: "quality",
			f: "format",
			fit: "fit",
			position: "position",
			background: "background"
		}).forEach(([param, key]) => {
			options[key] && searchParams.append(param, options[key].toString());
		});
		let url = `${joinPaths("/", imageConfig.endpoint.route)}?${searchParams}`;
		if (imageConfig.assetQueryParams) {
			const assetQueryString = imageConfig.assetQueryParams.toString();
			if (assetQueryString) url += "&" + assetQueryString;
		}
		return url;
	},
	parseURL(url) {
		const params = url.searchParams;
		if (!params.has("href")) return;
		return {
			src: params.get("href"),
			width: params.has("w") ? Number.parseInt(params.get("w")) : void 0,
			height: params.has("h") ? Number.parseInt(params.get("h")) : void 0,
			format: params.has("f") ? params.get("f") : void 0,
			quality: params.get("q"),
			fit: params.get("fit"),
			position: params.get("position") ?? void 0,
			background: params.get("background") ?? void 0
		};
	},
	getRemoteSize(url, imageConfig) {
		return inferRemoteSize(url, imageConfig);
	}
};
function getTargetDimensions(options) {
	let targetWidth = options.width;
	let targetHeight = options.height;
	if (isESMImportedImage(options.src)) {
		const aspectRatio = options.src.width / options.src.height;
		if (targetHeight && !targetWidth) targetWidth = Math.round(targetHeight * aspectRatio);
		else if (targetWidth && !targetHeight) targetHeight = Math.round(targetWidth / aspectRatio);
		else if (!targetWidth && !targetHeight) {
			targetWidth = options.src.width;
			targetHeight = options.src.height;
		}
	}
	return {
		targetWidth,
		targetHeight
	};
}
//#endregion
//#region node_modules/astro/dist/assets/types.js
function isImageMetadata(src) {
	return src.fsPath && !("fsPath" in src);
}
//#endregion
//#region node_modules/astro/dist/assets/utils/url.js
var PLACEHOLDER_BASE = "astro://placeholder";
function createPlaceholderURL(pathOrUrl) {
	return new URL(pathOrUrl, PLACEHOLDER_BASE);
}
function stringifyPlaceholderURL(url) {
	return url.href.replace(PLACEHOLDER_BASE, "");
}
//#endregion
//#region node_modules/astro/dist/assets/internal.js
var cssFitValues = [
	"fill",
	"contain",
	"cover",
	"scale-down"
];
async function getConfiguredImageService() {
	if (!globalThis?.astroAsset?.imageService) {
		const { default: service } = await import("./image-service-workerd_BCq87vaf.mjs").catch((e) => {
			const error = new AstroError(InvalidImageService);
			error.cause = e;
			throw error;
		});
		if (!globalThis.astroAsset) globalThis.astroAsset = {};
		globalThis.astroAsset.imageService = service;
		return service;
	}
	return globalThis.astroAsset.imageService;
}
async function getImage(options, imageConfig, logger) {
	if (!options || typeof options !== "object") throw new AstroError({
		...ExpectedImageOptions,
		message: ExpectedImageOptions.message(JSON.stringify(options))
	});
	if (typeof options.src === "undefined") throw new AstroError({
		...ExpectedImage,
		message: ExpectedImage.message(options.src, "undefined", JSON.stringify(options))
	});
	if (isImageMetadata(options)) throw new AstroError(ExpectedNotESMImage);
	const service = await getConfiguredImageService();
	const resolvedOptions = {
		...options,
		src: await resolveSrc(options.src)
	};
	let originalWidth;
	let originalHeight;
	if (resolvedOptions.inferSize) {
		delete resolvedOptions.inferSize;
		if (isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
			if (!isRemoteAllowed(resolvedOptions.src, imageConfig)) throw new AstroError({
				...RemoteImageNotAllowed,
				message: RemoteImageNotAllowed.message(resolvedOptions.src)
			});
			const getRemoteSize = (url) => service.getRemoteSize?.(url, imageConfig, logger) ?? inferRemoteSize(url, imageConfig);
			const result = await getRemoteSize(resolvedOptions.src);
			resolvedOptions.width ??= result.width;
			resolvedOptions.height ??= result.height;
			if (result.format) resolvedOptions.format ??= resolveDefaultOutputFormat(result.format);
			originalWidth = result.width;
			originalHeight = result.height;
		}
	}
	const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
	const clonedSrc = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.clone ?? resolvedOptions.src : resolvedOptions.src;
	if (isESMImportedImage(clonedSrc)) {
		originalWidth = clonedSrc.width;
		originalHeight = clonedSrc.height;
	}
	if (originalWidth && originalHeight) {
		const aspectRatio = originalWidth / originalHeight;
		if (resolvedOptions.height && !resolvedOptions.width) resolvedOptions.width = Math.round(resolvedOptions.height * aspectRatio);
		else if (resolvedOptions.width && !resolvedOptions.height) resolvedOptions.height = Math.round(resolvedOptions.width / aspectRatio);
		else if (!resolvedOptions.width && !resolvedOptions.height) {
			resolvedOptions.width = originalWidth;
			resolvedOptions.height = originalHeight;
		}
	}
	resolvedOptions.src = clonedSrc;
	const layout = options.layout ?? imageConfig.layout ?? "none";
	if (resolvedOptions.priority) {
		resolvedOptions.loading ??= "eager";
		resolvedOptions.decoding ??= "sync";
		resolvedOptions.fetchpriority ??= "high";
		delete resolvedOptions.priority;
	} else {
		resolvedOptions.loading ??= "lazy";
		resolvedOptions.decoding ??= "async";
		resolvedOptions.fetchpriority ??= void 0;
	}
	if (layout !== "none") {
		resolvedOptions.widths ||= getWidths({
			width: resolvedOptions.width,
			layout,
			originalWidth,
			breakpoints: imageConfig.breakpoints?.length ? imageConfig.breakpoints : isLocalService(service) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS
		});
		resolvedOptions.sizes ||= getSizesAttribute({
			width: resolvedOptions.width,
			layout
		});
		delete resolvedOptions.densities;
		resolvedOptions["data-astro-image"] = layout;
		if (resolvedOptions.fit && cssFitValues.includes(resolvedOptions.fit)) resolvedOptions["data-astro-image-fit"] = resolvedOptions.fit;
		resolvedOptions["data-astro-image-pos"] = (resolvedOptions.position || "center").replace(/\s+/g, "-");
	}
	const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig, logger) : resolvedOptions;
	validatedOptions.format ??= await peekRemoteFormatForStaticEmit(validatedOptions, imageConfig, service, logger);
	const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig, logger) : [];
	const lazyImageURLFactory = (getValue) => {
		let cached = null;
		return () => cached ??= getValue();
	};
	const initialImageURL = await service.getURL(validatedOptions, imageConfig, logger);
	let lazyImageURL = lazyImageURLFactory(() => initialImageURL);
	const matchesValidatedTransform = (transform) => transform.width === validatedOptions.width && transform.height === validatedOptions.height && transform.format === validatedOptions.format;
	let srcSets = await Promise.all(srcSetTransforms.map(async (srcSet) => {
		return {
			transform: srcSet.transform,
			url: matchesValidatedTransform(srcSet.transform) ? initialImageURL : await service.getURL(srcSet.transform, imageConfig, logger),
			descriptor: srcSet.descriptor,
			attributes: srcSet.attributes
		};
	}));
	if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && initialImageURL === validatedOptions.src)) {
		const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
		lazyImageURL = lazyImageURLFactory(() => globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalFilePath));
		srcSets = srcSetTransforms.map((srcSet) => {
			return {
				transform: srcSet.transform,
				url: matchesValidatedTransform(srcSet.transform) ? lazyImageURL() : globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
				descriptor: srcSet.descriptor,
				attributes: srcSet.attributes
			};
		});
	} else if (imageConfig.assetQueryParams) {
		const imageURLObj = createPlaceholderURL(initialImageURL);
		imageConfig.assetQueryParams.forEach((value, key) => {
			imageURLObj.searchParams.set(key, value);
		});
		lazyImageURL = lazyImageURLFactory(() => stringifyPlaceholderURL(imageURLObj));
		srcSets = srcSets.map((srcSet) => {
			const urlObj = createPlaceholderURL(srcSet.url);
			imageConfig.assetQueryParams.forEach((value, key) => {
				urlObj.searchParams.set(key, value);
			});
			return {
				...srcSet,
				url: stringifyPlaceholderURL(urlObj)
			};
		});
	}
	return {
		rawOptions: resolvedOptions,
		options: validatedOptions,
		get src() {
			return lazyImageURL();
		},
		srcSet: {
			values: srcSets,
			attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
		},
		attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig, logger) : {}
	};
}
async function peekRemoteFormatForStaticEmit(options, imageConfig, service, logger) {
	if (!isRemoteImage(options.src) || !isRemoteAllowed(options.src, imageConfig) || !globalThis.astroAsset?.addStaticImage || !isLocalService(service) || !service.getRemoteSize) return;
	try {
		return resolveDefaultOutputFormat((await service.getRemoteSize(options.src, imageConfig, logger)).format);
	} catch {
		return;
	}
}
//#endregion
//#region node_modules/astro/dist/assets/utils/deterministic-string.js
var objConstructorString = Function.prototype.toString.call(Object);
function isPlainObject(value) {
	if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") return false;
	const proto = Object.getPrototypeOf(value);
	if (proto === null) return true;
	if (!Object.prototype.hasOwnProperty.call(proto, "constructor")) return false;
	return typeof proto.constructor === "function" && proto.constructor instanceof proto.constructor && Function.prototype.toString.call(proto.constructor) === objConstructorString;
}
function deterministicString(input) {
	if (typeof input === "string") return JSON.stringify(input);
	else if (typeof input === "symbol" || typeof input === "function") return input.toString();
	else if (typeof input === "bigint") return `${input}n`;
	else if (input === globalThis || input === void 0 || input === null || typeof input === "boolean" || typeof input === "number" || typeof input !== "object") return `${input}`;
	else if (input instanceof Date) return `(${input.constructor.name}:${input.getTime()})`;
	else if (input instanceof RegExp || input instanceof Error || input instanceof WeakMap || input instanceof WeakSet) return `(${input.constructor.name}:${input.toString()})`;
	else if (input instanceof Set) {
		let ret2 = `(${input.constructor.name}:[`;
		for (const val of input.values()) ret2 += `${deterministicString(val)},`;
		ret2 += "])";
		return ret2;
	} else if (Array.isArray(input) || input instanceof Int8Array || input instanceof Uint8Array || input instanceof Uint8ClampedArray || input instanceof Int16Array || input instanceof Uint16Array || input instanceof Int32Array || input instanceof Uint32Array || input instanceof Float32Array || input instanceof Float64Array || input instanceof BigInt64Array || input instanceof BigUint64Array) {
		let ret2 = `(${input.constructor.name}:[`;
		for (const [k, v] of input.entries()) ret2 += `(${k}:${deterministicString(v)}),`;
		ret2 += "])";
		return ret2;
	} else if (input instanceof ArrayBuffer || input instanceof SharedArrayBuffer) {
		if (input.byteLength % 8 === 0) return deterministicString(new BigUint64Array(input));
		else if (input.byteLength % 4 === 0) return deterministicString(new Uint32Array(input));
		else if (input.byteLength % 2 === 0) return deterministicString(new Uint16Array(input));
		else {
			let ret2 = "(";
			for (let i = 0; i < input.byteLength; i++) ret2 += `${deterministicString(new Uint8Array(input.slice(i, i + 1)))},`;
			ret2 += ")";
			return ret2;
		}
	} else if (input instanceof Map || isPlainObject(input)) {
		const sortable = [];
		const entries = input instanceof Map ? input.entries() : Object.entries(input);
		for (const [k, v] of entries) sortable.push([deterministicString(k), deterministicString(v)]);
		if (!(input instanceof Map)) {
			const symbolKeys2 = Object.getOwnPropertySymbols(input);
			for (let i = 0; i < symbolKeys2.length; i++) sortable.push([deterministicString(symbolKeys2[i]), deterministicString(input[symbolKeys2[i]])]);
		}
		sortable.sort(([a], [b]) => a.localeCompare(b));
		let ret2 = `(${input.constructor.name}:[`;
		for (const [k, v] of sortable) ret2 += `(${k}:${v}),`;
		ret2 += "])";
		return ret2;
	}
	const allEntries = [];
	for (const k in input) allEntries.push([deterministicString(k), deterministicString(input[k])]);
	const symbolKeys = Object.getOwnPropertySymbols(input);
	for (let i = 0; i < symbolKeys.length; i++) allEntries.push([deterministicString(symbolKeys[i]), deterministicString(input[symbolKeys[i]])]);
	allEntries.sort(([a], [b]) => a.localeCompare(b));
	let ret = `(${input.constructor.name}:[`;
	for (const [k, v] of allEntries) ret += `(${k}:${v}),`;
	ret += "])";
	return ret;
}
//#endregion
//#region node_modules/astro/dist/assets/utils/hash.js
var INVALID_CHAR_REGEX = /[\u0000-\u001F"#$%&*+,:;<=>?[\]^`{|}\u007F]/g;
function basename(filePath, ext) {
	let end = filePath.length;
	while (end > 0 && filePath[end - 1] === "/") end--;
	const stripped = filePath.slice(0, end);
	const lastSlash = stripped.lastIndexOf("/");
	const base = lastSlash === -1 ? stripped : stripped.slice(lastSlash + 1);
	if (ext && base.endsWith(ext)) return base.slice(0, base.length - ext.length);
	return base;
}
function dirname(filePath) {
	const lastSlash = filePath.lastIndexOf("/");
	if (lastSlash === -1) return ".";
	if (lastSlash === 0) return "/";
	return filePath.slice(0, lastSlash);
}
function extname(filePath) {
	const base = basename(filePath);
	const dotIndex = base.lastIndexOf(".");
	if (dotIndex <= 0) return "";
	return base.slice(dotIndex);
}
function propsToFilename(filePath, transform, hash) {
	let filename = decodeURIComponent(removeQueryString(filePath));
	const ext = extname(filename);
	if (filePath.startsWith("data:")) filename = shorthash(filePath);
	else filename = basename(filename, ext).replace(INVALID_CHAR_REGEX, "_");
	const prefixDirname = isESMImportedImage(transform.src) ? dirname(filePath) : "";
	let outputExt = transform.format ? `.${transform.format}` : ext;
	return `${prefixDirname}/${filename}_${hash}${outputExt}`;
}
function hashTransform(transform, imageService, propertiesToHash) {
	return shorthash(deterministicString(propertiesToHash.reduce((acc, prop) => {
		acc[prop] = transform[prop];
		return acc;
	}, { imageService })));
}
//#endregion
export { MissingMediaQueryDirective as $, AstroError as A, ForbiddenRewrite as B, prependForwardSlash as C, slash as D, removeTrailingForwardSlash as E, CacheNotEnabled as F, InvalidComponentArgs as G, GetStaticPathsInvalidRouteParam as H, ClientAddressNotAvailable as I, LocalsNotAnObject as J, InvalidGetStaticPathsEntry as K, EndpointDidNotReturnAResponse as L, ActionNotFoundError as M, ActionsReturnedInvalidDataError as N, stripRequestBase as O, AstroResponseHeadersReassigned as P, MissingGetFontFileRequestUrl as Q, FontFamilyNotFound as R, joinPaths as S, removeLeadingForwardSlash as T, GetStaticPathsRequired as U, GetStaticPathsExpectedParams as V, ImageMissingAlt as W, MiddlewareNoDataOrNextCalled as X, LocalsReassigned as Y, MiddlewareNotAResponse as Z, collapseDuplicateTrailingSlashes as _, baseService as a, OnlyResponseCanBeReturned as at, isInternalPath as b, isESMImportedImage as c, PrerenderDynamicEndpointPathCollide as ct, isRemoteAllowed as d, RewriteWithBodyUsed as dt, NoClientOnlyHint as et, matchPattern as f, SessionStorageInitError as ft, collapseDuplicateSlashes as g, i18nNoLocaleFoundInPath as gt, collapseDuplicateLeadingSlashes as h, UnavailableAstroGlobal as ht, getImage as i, NoMatchingStaticPathFound as it, isAstroError as j, trimSlashes as k, isRemoteImage as l, ReservedSlotName as lt, appendForwardSlash as m, StaticClientAddressNotAvailable as mt, propsToFilename as n, NoMatchingImport as nt, inferRemoteSize as o, PageNumberParamNotFound as ot, shorthash as p, SessionStorageSaveError as pt, InvalidGetStaticPathsReturn as q, getConfiguredImageService as r, NoMatchingRenderer as rt, fetchWithRedirects as s, PrerenderClientAddressNotAvailable as st, hashTransform as t, NoManifestAvailable as tt, resolveSrc as u, ResponseSentError as ut, fileExtension as v, removeBase as w, isRemotePath as x, hasFileExtension as y, FontFileUrlNotFound as z };
