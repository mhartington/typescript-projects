import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

type Args = {
  name: string;
  files: number;
  lines: number;
};

function parseArgs(argv: string[]): Args {
  const get = (flag: string): string | undefined => {
    const index = argv.indexOf(flag);
    return index >= 0 ? argv[index + 1] : undefined;
  };

  const name = get("--name") ?? "demo-project";
  const files = Number(get("--files") ?? "100");
  const lines = Number(get("--lines") ?? "100");

  if (!Number.isFinite(files) || files <= 0) {
    throw new Error("`--files` must be a positive number.");
  }

  if (!Number.isFinite(lines) || lines <= 0) {
    throw new Error("`--lines` must be a positive number.");
  }

  return { name, files, lines };
}

function buildFileContent(fileIndex: number, lines: number): string {
  const body: string[] = [];
  body.push(`export const file${fileIndex} = {`);
  for (let i = 0; i < lines; i++) {
    body.push(`  key_${i}: "value_${fileIndex}_${i}",`);
  }
  body.push("};");
  body.push("");
  return body.join("\n");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const baseDir = path.resolve(process.cwd(), "generated", args.name);
  const srcDir = path.join(baseDir, "src");

  await mkdir(srcDir, { recursive: true });

  const writes: Promise<void>[] = [];
  for (let i = 0; i < args.files; i++) {
    const filePath = path.join(srcDir, `file-${i}.ts`);
    writes.push(writeFile(filePath, buildFileContent(i, args.lines), "utf8"));
  }

  await Promise.all(writes);

  console.log(`Generated ${args.files} files in ${srcDir}`);
  console.log("Example:");
  console.log(
    "npm run gen:project -- --name perf-test --files 1000 --lines 200"
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
