// Strips script tags, inline event handlers, and javascript: URLs from
// admin-authored rich-text content before it's rendered with v-html.
export function sanitizeHtml(content) {
  if (!content) return "";
  if (typeof content !== "string") return String(content);

  return content
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/javascript:/gi, "");
}
