import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

type Args = {
  name: string;
  files: number;
  minLines: number;
  maxLines: number;
  force: boolean;
};

function parseArgs(argv: string[]): Args {
  const get = (flag: string): string | undefined => {
    const index = argv.indexOf(flag);
    return index >= 0 ? argv[index + 1] : undefined;
  };

  const name = get("--name") ?? "node-big-demo";
  const files = Number(get("--files") ?? "750");
  const minLines = Number(get("--min-lines") ?? "40");
  const maxLines = Number(get("--max-lines") ?? "220");
  const force = argv.includes("--force");

  if (!Number.isFinite(files) || files <= 0) {
    throw new Error("`--files` must be a positive number.");
  }

  if (!Number.isFinite(minLines) || minLines < 20) {
    throw new Error("`--min-lines` must be a number >= 20.");
  }

  if (!Number.isFinite(maxLines) || maxLines < minLines) {
    throw new Error("`--max-lines` must be >= `--min-lines`.");
  }

  return { name, files, minLines, maxLines, force };
}

function getComplexity(index: number, minLines: number, maxLines: number): number {
  const spread = maxLines - minLines + 1;
  return minLines + ((index * 17 + 11) % spread);
}

function buildModuleFile(index: number, complexity: number): string {
  const valuesCount = Math.max(12, complexity - 24);
  const localTypeFields = 10 + (index % 14);
  const imports: string[] = [
    'import { createHash, randomUUID } from "node:crypto";',
    'import { basename, join } from "node:path";',
    'import { cpus, tmpdir } from "node:os";',
    'import { parse as parseUrl } from "node:url";',
    'import { inspect } from "node:util";',
  ];

  if (index > 0) {
    imports.push(`import { main as mainPrev } from "./file-${index - 1}.js";`);
  }

  if (index > 1) {
    imports.push(`import { main as mainPrev2 } from "./file-${index - 2}.js";`);
  }

  const body: string[] = [
    ...imports,
    "",
    `export type Payload = {`,
    `  fileId: number;`,
    `  marker: "file_${index}";`,
    `  digest: string;`,
    `  values: string[];`,
    `};`,
    "",
  ];

  body.push(
    "function synthesizePayload(sample: string): Payload {",
    "  const values: string[] = [sample];"
  );
  for (let i = 0; i < localTypeFields; i++) {
    body.push(`  values.push(sample + "-${i}");`);
  }
  body.push(
    `  return { fileId: ${index}, marker: "file_${index}", digest: sample, values };`,
    "}",
    ""
  );

  body.push(
    `export function main(): string {`,
    `  const seed = "file-${index}";`,
    `  const root = join(tmpdir(), "node-demo", seed);`,
    `  const url = parseUrl("https://example.com/" + basename(root));`,
    `  const cpuCount = cpus().length;`,
    `  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);`,
    `  const id = randomUUID().slice(0, 8);`,
    `  const values: string[] = [];`
  );

  if (index > 0) {
    body.push("  values.push(mainPrev());");
  }
  if (index > 1) {
    body.push("  values.push(mainPrev2());");
  }

  for (let i = 0; i < valuesCount; i++) {
    body.push(`  values.push(\`${index}:${i}:\${cpuCount}:\${url.pathname ?? "none"}:\${digest}:\${id}\`);`);
  }

  body.push(
    "  const payload = synthesizePayload(values[0] ?? seed);",
    "  values.push((payload.fileId as number).toString());",
    "  values.push(payload.marker as string);",
    `  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });`,
    `  return values.length + "|" + preview;`,
    `}`,
    ""
  );

  return body.join("\n");
}

function buildIndexFile(files: number): string {
  const imports: string[] = [];
  const calls: string[] = [];

  for (let i = 0; i < files; i++) {
    imports.push(`import { main as main${i} } from "./modules/file-${i}.js";`);
    calls.push(`  results.push(main${i}());`);
  }

  const lines: string[] = [];
  lines.push(...imports, "", "export function runAll(): number {");
  lines.push("  const results: string[] = [];");
  lines.push(...calls);
  lines.push("  return results.reduce((sum, item) => sum + item.length, 0);");
  lines.push("}", "", "const total = runAll();", 'console.log("Total output size:", total);', "");

  return lines.join("\n");
}

function buildProjectPackageJson(name: string): string {
  return JSON.stringify(
    {
      name,
      version: "0.0.0",
      private: true,
      type: "module",
      scripts: {
        build: "tsc",
        start: "node dist/index.js",
      },
      devDependencies: {
        "@types/node": "^24.0.0",
        typescript: "^5.9.0",
      },
    },
    null,
    2
  );
}

function buildProjectTsConfig(): string {
  return JSON.stringify(
    {
      compilerOptions: {
        target: "ES2023",
        module: "NodeNext",
        moduleResolution: "NodeNext",
        strict: true,
        skipLibCheck: true,
        rootDir: "src",
        outDir: "dist",
        types: ["node"],
      },
      include: ["src/**/*.ts"],
    },
    null,
    2
  );
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const baseDir = path.resolve(process.cwd(), "generated", args.name);
  const srcDir = path.join(baseDir, "src");
  const modulesDir = path.join(srcDir, "modules");

  if (args.force) {
    await rm(baseDir, { recursive: true, force: true });
  }

  await mkdir(modulesDir, { recursive: true });

  const writes: Promise<void>[] = [];
  writes.push(writeFile(path.join(baseDir, "package.json"), buildProjectPackageJson(args.name), "utf8"));
  writes.push(writeFile(path.join(baseDir, "tsconfig.json"), buildProjectTsConfig(), "utf8"));

  for (let i = 0; i < args.files; i++) {
    const complexity = getComplexity(i, args.minLines, args.maxLines);
    const modulePath = path.join(modulesDir, `file-${i}.ts`);
    writes.push(writeFile(modulePath, buildModuleFile(i, complexity), "utf8"));
  }

  writes.push(writeFile(path.join(srcDir, "index.ts"), buildIndexFile(args.files), "utf8"));
  await Promise.all(writes);

  console.log(`Generated Node TypeScript project: ${baseDir}`);
  console.log(`Files: ${args.files} modules + 1 index.ts`);
  console.log("Next steps:");
  console.log(`cd ${baseDir}`);
  console.log("npm install");
  console.log("npm run build");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
