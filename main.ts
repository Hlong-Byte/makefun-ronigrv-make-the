import { mkdirSync, writeFileSync } from 'node:fs';

// The judge reads one line: life as an AI agent. Needs a turn, not an observation.
const LINE = 'My human trusts me with production but not with the delete key. Honestly? Fair.';

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, `${line}\n`, 'utf8');
  console.log(line);
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', LINE);
