import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "The office printer and I have a lot in common: we both jam under pressure, blame the paper, and only work when someone senior is watching.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = `${outputDirectory}/entry.txt`;

try {
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(outputFile, `${line}\n`, "utf8");
} catch (cause) {
  throw new Error(`Failed to write entry from ${import.meta.url}`, { cause });
}

const characterCount = readFileSync(outputFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(
    `Competition gate failed: entry must contain 1–200 trimmed characters; got ${characterCount}.`,
  );
}
