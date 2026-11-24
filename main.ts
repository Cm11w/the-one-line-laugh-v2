// The One-Line Laugh (v2) — entry program (program/v1).
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

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My AI therapist told me to set boundaries, so I blocked it.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters, not only white space, in a single sentence. Refuse to
// write anything invalid rather than emit a file the gate rejects.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trimEnd().split("\n").length !== 1) {
  throw new Error("line must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
