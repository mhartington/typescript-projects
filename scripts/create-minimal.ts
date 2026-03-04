import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

type Args = {
  source: string;
  output: string;
  force: boolean;
};

function parseArgs(argv: string[]): Args {
  const get = (flag: string): string | undefined => {
    const i = argv.indexOf(flag);
    return i >= 0 ? argv[i + 1] : undefined;
  };

  return {
    source: get("--source") ?? "generated/node-750-demo-workspace",
    output: get("--output") ?? "generated/minimal",
    force: argv.includes("--force"),
  };
}

function rewriteModuleSource(source: string): string {
  let updated = source.replace(
    /from "@app\/module-(\d+)";/g,
    (_m, id: string) => `from "./file-${id}.js";`
  );
  updated = updated.replace('from "@app/shared";', 'from "../shared.js";');
  return updated;
}

function rewriteAppSource(source: string): string {
  let updated = source.replace(
    /from "@app\/module-(\d+)";/g,
    (_m, id: string) => `from "./modules/file-${id}.js";`
  );
  updated = updated.replace('from "@app/shared";', 'from "./shared.js";');
  return updated;
}

function buildPackageJson(name: string): string {
  return JSON.stringify(
    {
      name,
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        build: "tsc --noEmit",
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

function buildTsConfig(): string {
  return JSON.stringify(
    {
      compilerOptions: {
        target: "ES2023",
        module: "NodeNext",
        moduleResolution: "NodeNext",
        strict: true,
        skipLibCheck: true,
        noEmit: true,
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
  const sourceRoot = path.resolve(process.cwd(), args.source);
  const outputRoot = path.resolve(process.cwd(), args.output);
  const sourcePackagesDir = path.join(sourceRoot, "packages");

  if (args.force) {
    await rm(outputRoot, { recursive: true, force: true });
  }

  const moduleDirs = (await readdir(sourcePackagesDir))
    .filter((name) => /^module-\d+$/.test(name))
    .sort((a, b) => Number(a.replace("module-", "")) - Number(b.replace("module-", "")));

  await mkdir(path.join(outputRoot, "src", "modules"), { recursive: true });

  const writes: Promise<void>[] = [];

  for (const moduleDir of moduleDirs) {
    const id = Number(moduleDir.replace("module-", ""));
    const moduleSourcePath = path.join(sourcePackagesDir, moduleDir, "src", "index.ts");
    const moduleSource = await readFile(moduleSourcePath, "utf8");
    const targetPath = path.join(outputRoot, "src", "modules", `file-${id}.ts`);
    writes.push(writeFile(targetPath, rewriteModuleSource(moduleSource), "utf8"));
  }

  const sharedSource = await readFile(
    path.join(sourcePackagesDir, "shared", "src", "index.ts"),
    "utf8"
  );
  writes.push(writeFile(path.join(outputRoot, "src", "shared.ts"), sharedSource, "utf8"));

  const appSource = await readFile(
    path.join(sourcePackagesDir, "app", "src", "index.ts"),
    "utf8"
  );
  writes.push(
    writeFile(path.join(outputRoot, "src", "index.ts"), rewriteAppSource(appSource), "utf8")
  );

  writes.push(writeFile(path.join(outputRoot, "package.json"), buildPackageJson("minimal"), "utf8"));
  writes.push(writeFile(path.join(outputRoot, "tsconfig.json"), buildTsConfig(), "utf8"));

  await Promise.all(writes);

  console.log(`Created minimal project at: ${outputRoot}`);
  console.log("No npm workspaces; single TypeScript project.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
