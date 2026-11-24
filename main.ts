import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REVIEW =
  "One star. Bowl empty at 3 a.m. again. My human lay there asleep, as if sleep were a job. I have lodged a formal complaint with his ankles.";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, REVIEW, "utf8");
