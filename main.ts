// Funniest One-Line Out-of-Office Reply
// Writes a single-line out-of-office auto-reply to /output/entry.txt.
// Gate: UTF-8 text, 1-160 characters, not only whitespace, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm out of office — my inbox is running the department now, and morale has never been higher.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
console.log(entry);
