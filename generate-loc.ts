import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import * as path from "path";

// Allowed extensions to track
const allowedExtensions = [".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".mjs", ".mdx"];

type LOCData = {
  [ext: string]: {
    files: number;
    lines: number;
  };
};

const locData: LOCData = {};

function countLines(content: string): number {
  return content.split("\n").length;
}

function main() {
  const fileList = execSync("git ls-files").toString().split("\n").filter(Boolean);

  for (const filePath of fileList) {
    const ext = path.extname(filePath);

    if (!allowedExtensions.includes(ext)) continue;

    try {
      const content = readFileSync(filePath, "utf8");
      const lines = countLines(content);

      if (!locData[ext]) {
        locData[ext] = { files: 0, lines: 0 };
      }

      locData[ext].files += 1;
      locData[ext].lines += lines;
    } catch (err) {
      console.error(`Failed to read ${filePath}`, err);
    }
  }

  writeFileSync("custom-loc.json", JSON.stringify(locData, null, 2));
  console.log("✅ custom-loc.json generated successfully!");
}

main();
