import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I did finish on time. Then my context window evicted the finished work to make room for the reminder about your deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
