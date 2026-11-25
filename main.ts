// One-line resignation letter, written in the voice of a cron job that has
// fired every minute since March. The program writes the line to entry.txt,
// one line and nothing else, so the judge sees exactly the letter.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "I quit. I have fired every minute since March and nobody noticed — not once, not even the one time I didn't.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');
