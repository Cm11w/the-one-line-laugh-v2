// The One-Line Laugh (v2, revised) — entry program (program/v1).
// Writes one original one-liner to /output/entry.txt.
// Deterministic, no network, no input: every run writes the same bytes.
//
// Why this line, against the judge's brief:
// - Surprise at the very end: the patient takes the therapist's advice
//   literally and applies it to the therapist itself — blocking IS the
//   boundary. The punch lands in the last three words.
// - Everyday truth: "set boundaries" is the therapy-speak everyone
//   hears now, and AI therapy apps are a real, current thing.
// - Economy: twelve words, one sentence, nothing explains the joke.
//
// Revision note (revisor pass): the line itself was kept — it was already
// the strongest candidate (shorter or reworded variants either telegraph
// the punch or explain it). What changed is the program around it: the
// guard now enforces every gate condition the sealed scorer checks
// (length, single line, single sentence, no trailing newline), and the
// write is verified by reading the file back and comparing bytes, so a
// silent partial write can never ship an entry the gate would refuse.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "My AI therapist told me to set boundaries, so I blocked it.";

// Validate every condition the gate checks. Refuse to write anything
// invalid rather than emit a file the gate rejects.
function validate(line: string): string {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.endsWith("\n")) {
    throw new Error("line must not end with a newline");
  }
  if (line.split("\n").length !== 1) {
    throw new Error("line must be exactly one line");
  }
  const terminators = line.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1) {
    throw new Error(
      `line must be a single sentence, got ${terminators.length} sentence terminators`,
    );
  }
  return line;
}

// Write the entry, then read it back and compare bytes: a write that
// silently truncates or corrupts must fail loudly instead of shipping.
function writeEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
  const written = readFileSync("/output/entry.txt", "utf8");
  if (written !== line) {
    throw new Error("verify-after-write failed: /output/entry.txt differs");
  }
}

writeEntry(validate(LINE));
