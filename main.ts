// Office Artifacts: The One-Line Placard Contest
// Writes a single-line museum placard for an office printer, recast as an
// ancient oracle, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Deterministic: no randomness, no network, no clock, stdlib only.
// The placard is exactly 160 characters, inside the 1–180 gate, one line,
// no trailing newline — verified byte-identical across runs.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLACARD =
  "Oracle, c. 2016. Beige plastic, toner-stained. Consulted daily by all; its answers arrive in a tongue no living employee reads, and are obeyed without question.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLACARD, "utf8");
