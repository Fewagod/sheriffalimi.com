// Rewrites root-relative links ("/work") in a PREVIEW build into relative
// file links ("work.html") so the site can be browsed without a server.
// Not used for the live site.
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from "node:fs";
import { join, relative, dirname, posix } from "node:path";

const root = process.argv[2];
if (!root) throw new Error("usage: node relativize.mjs <dir>");

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

for (const file of walk(root).filter((f) => f.endsWith(".html") || f.endsWith(".css"))) {
  const fromDir = dirname(relative(root, file)) || ".";
  let src = readFileSync(file, "utf8");
  src = src.replace(/(href|src)="\/([^"#?]*)"/g, (m, attr, path) => {
    let target = path;
    if (target === "" ) target = "index.html";
    else if (!/\.[a-z0-9]+$/i.test(target)) {
      target = target.replace(/\/$/, "");
      target = existsSync(join(root, target + ".html")) ? target + ".html" : target + "/index.html";
    }
    let rel = posix.relative(fromDir === "." ? "" : fromDir.split("\\").join("/"), target);
    if (!rel) rel = "index.html";
    return `${attr}="${rel}"`;
  });
  writeFileSync(file, src);
}
console.log("relativized", root);
