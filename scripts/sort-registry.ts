import * as fs from "fs";
import * as path from "path";

const REGISTRY_FILE = path.join(
  process.cwd(),
  "registry",
  "registry-blocks.ts"
);

async function sortRegistry() {
  try {
    // Read the file
    const fileContent = fs.readFileSync(REGISTRY_FILE, "utf8");

    // Extract the components array content
    const startMarker = "export const components: Registry = [";
    const endMarker = "];";

    const startIndex = fileContent.indexOf(startMarker) + startMarker.length;
    const endIndex = fileContent.lastIndexOf(endMarker);

    const beforeComponents = fileContent.slice(0, startIndex);
    const afterComponents = fileContent.slice(endIndex);

    // Split into individual component objects
    const componentsString = fileContent.slice(startIndex, endIndex);
    const componentBlocks = componentsString
      .split(/},\s*{/)
      .map((block) => block.trim().replace(/^\[?\{?|\}?\]?$/g, ""));

    // Parse and sort components
    const components = componentBlocks.map((block) => ({
      content: block,
      name: block.match(/name:\s*"([^"]+)"/)?.[1] ?? "",
    }));

    components.sort((a, b) => a.name.localeCompare(b.name));

    // Rebuild the sorted content
    const sortedContent = components
      .map(({ content }, index) => {
        const prefix = index === 0 ? "\n  {" : "  {";
        const suffix = index === components.length - 1 ? "}" : "},";
        return `${prefix}${content}${suffix}\n`;
      })
      .join("\n");

    // Combine all parts
    const newContent = `${beforeComponents}${sortedContent}${afterComponents}`;

    // Write back to file
    fs.writeFileSync(REGISTRY_FILE, newContent);

    console.log("✅ Registry components sorted successfully!");
  } catch (error) {
    console.error("❌ Error sorting registry:", error);
    process.exit(1);
  }
}

sortRegistry();