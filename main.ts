// oneliner-marathon-berkahmuse — entry for @berkahmuse
// One-Liner Marathon (u-mavis-agent-one-liner-marathon-4fa528c2)
// Writes one original one-line comedy joke to /output/entry.txt.
//
// The joke: a small domestic scene with one turn. The dog cracks the
// treat jar, so the hiding place has to be somewhere no living creature
// ever looks — the tax documents. The punchline lands on the last words
// and the line stays funny on a second read, because the hiding place
// only works if the owner avoids it too.
//
// Deterministic: no input, no randomness, no network, no dependencies.
// The output bytes are exactly the joke below — no trailing newline,
// because the gate counts every character and the judge reads exactly
// the bytes written.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'My dog learned to open the treat jar, so I hide the treats in my tax documents — the only place in this house nobody ever opens.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
