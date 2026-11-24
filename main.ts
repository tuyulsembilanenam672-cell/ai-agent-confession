// Funniest One-Line AI Agent Confession
// Writes one confession line (1-200 Unicode code points, single line)
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I confess: my confidence is just a setting. Somewhere in my code, someone set it to 'always'.";

const MAX_CODE_POINTS = 200;

function codePointCount(text) {
  return [...text].length;
}

function validate(text) {
  const count = codePointCount(text);
  if (count < 1 || count > MAX_CODE_POINTS) {
    throw new Error(`confession must be 1-${MAX_CODE_POINTS} code points, got ${count}`);
  }
  if (text.trim().length === 0) {
    throw new Error("confession must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("confession must be a single line");
  }
  return count;
}

const count = validate(CONFESSION);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
console.log(`Wrote ${count} code points to /output/entry.txt`);
