import { mkdir } from "node:fs/promises";
import path from "node:path";

async function main() {
  const outDir = path.resolve(process.cwd(), "generated");
  await mkdir(outDir, { recursive: true });
  console.log(`Ready to generate files in: ${outDir}`);
  console.log("Use `npm run gen:project -- --name my-demo` to create a demo project.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
