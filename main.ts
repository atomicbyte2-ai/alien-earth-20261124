import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Chosen entry: an alien tourist's one-line review of Earth.
// Five stars for the dogs — the alien misreads who runs the planet.
const LINE =
  "★★★★★ Five stars for the dogs. They are clearly in charge and the humans just follow them around with little bags. Would pet again.";

// Bounty caps: one line, at most 200 characters. Fail loudly if violated.
if (LINE.length === 0 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`Entry line invalid: ${LINE.length} chars, must be 1 line <= 200 chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
