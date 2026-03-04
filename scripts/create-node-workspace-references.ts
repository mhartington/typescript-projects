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
    output: get("--output") ?? "generated/node-750-demo-workspace-references",
    force: argv.includes("--force"),
  };
}

function toPackageName(index: number): string {
  return `@app/module-${index}`;
}

function buildRootPackageJson(name: string): string {
  return JSON.stringify(
    {
      name,
      private: true,
      version: "0.0.0",
      type: "module",
      workspaces: ["packages/*"],
      scripts: {
        build: "npm run build --workspaces --if-present",
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

function buildRootBaseTsConfig(): string {
  return JSON.stringify(
    {
      compilerOptions: {
        target: "ES2023",
        module: "NodeNext",
        moduleResolution: "NodeNext",
        strict: true,
        skipLibCheck: true,
        types: ["node"],
      },
    },
    null,
    2
  );
}

function buildRootTsConfig(moduleCount: number): string {
  const references = [];
  for (let i = 0; i < moduleCount; i++) {
    references.push({ path: `./packages/module-${i}` });
  }
  references.push({ path: "./packages/app" });

  return JSON.stringify(
    {
      files: [],
      references,
    },
    null,
    2
  );
}

function buildModuleTsConfig(index: number): string {
  const references: Array<{ path: string }> = [];
  if (index > 0) references.push({ path: `../module-${index - 1}` });
  if (index > 1) references.push({ path: `../module-${index - 2}` });

  return JSON.stringify(
    {
      extends: "../../tsconfig.base.json",
      compilerOptions: {
        composite: true,
      },
      include: ["src/**/*.ts"],
      references,
    },
    null,
    2
  );
}

function buildCheckTsConfig(): string {
  return JSON.stringify(
    {
      extends: "./tsconfig.json",
      references: [],
    },
    null,
    2
  );
}

function buildAppTsConfig(moduleCount: number): string {
  const references: Array<{ path: string }> = [];
  for (let i = 0; i < moduleCount; i++) {
    references.push({ path: `../module-${i}` });
  }

  return JSON.stringify(
    {
      extends: "../../tsconfig.base.json",
      compilerOptions: {
        composite: true,
      },
      include: ["src/**/*.ts"],
      references,
    },
    null,
    2
  );
}

function buildModulePackageJson(index: number): string {
  const dependencies: Record<string, string> = {};
  if (index > 0) dependencies[toPackageName(index - 1)] = "0.0.0";
  if (index > 1) dependencies[toPackageName(index - 2)] = "0.0.0";

  return JSON.stringify(
    {
      name: toPackageName(index),
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        build: "tsc --noEmit -p tsconfig.check.json",
      },
      exports: "./src/index.ts",
      types: "./src/index.ts",
      dependencies,
    },
    null,
    2
  );
}

function buildAppPackageJson(moduleCount: number): string {
  const dependencies: Record<string, string> = {};
  for (let i = 0; i < moduleCount; i++) {
    dependencies[toPackageName(i)] = "0.0.0";
  }

  return JSON.stringify(
    {
      name: "@app/main",
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        build: "tsc --noEmit -p tsconfig.check.json",
        start: "node dist/index.js",
      },
      dependencies,
      exports: "./src/index.ts",
      types: "./src/index.ts",
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
  const sourceAppIndexPath = path.join(sourcePackagesDir, "app", "src", "index.ts");

  if (args.force) {
    await rm(outputRoot, { recursive: true, force: true });
  }

  const packageDirs = await readdir(sourcePackagesDir);
  const moduleIndexes = packageDirs
    .filter((name) => /^module-\d+$/.test(name))
    .map((name) => Number(name.replace("module-", "")))
    .sort((a, b) => a - b);

  if (moduleIndexes.length === 0) {
    throw new Error(`No module packages found in ${sourcePackagesDir}`);
  }

  await mkdir(path.join(outputRoot, "packages"), { recursive: true });

  const writes: Promise<void>[] = [];
  for (const index of moduleIndexes) {
    const srcPath = path.join(sourcePackagesDir, `module-${index}`, "src", "index.ts");
    const sourceCode = await readFile(srcPath, "utf8");

    const moduleDir = path.join(outputRoot, "packages", `module-${index}`);
    const moduleSrcDir = path.join(moduleDir, "src");
    await mkdir(moduleSrcDir, { recursive: true });

    writes.push(writeFile(path.join(moduleSrcDir, "index.ts"), sourceCode, "utf8"));
    writes.push(writeFile(path.join(moduleDir, "package.json"), buildModulePackageJson(index), "utf8"));
    writes.push(writeFile(path.join(moduleDir, "tsconfig.json"), buildModuleTsConfig(index), "utf8"));
    writes.push(writeFile(path.join(moduleDir, "tsconfig.check.json"), buildCheckTsConfig(), "utf8"));
  }

  const appCode = await readFile(sourceAppIndexPath, "utf8");
  const appDir = path.join(outputRoot, "packages", "app");
  const appSrcDir = path.join(appDir, "src");
  await mkdir(appSrcDir, { recursive: true });
  writes.push(writeFile(path.join(appSrcDir, "index.ts"), appCode, "utf8"));
  writes.push(writeFile(path.join(appDir, "package.json"), buildAppPackageJson(moduleIndexes.length), "utf8"));
  writes.push(writeFile(path.join(appDir, "tsconfig.json"), buildAppTsConfig(moduleIndexes.length), "utf8"));
  writes.push(writeFile(path.join(appDir, "tsconfig.check.json"), buildCheckTsConfig(), "utf8"));

  writes.push(writeFile(path.join(outputRoot, "package.json"), buildRootPackageJson("node-750-demo-workspace-references"), "utf8"));
  writes.push(writeFile(path.join(outputRoot, "tsconfig.base.json"), buildRootBaseTsConfig(), "utf8"));
  writes.push(writeFile(path.join(outputRoot, "tsconfig.json"), buildRootTsConfig(moduleIndexes.length), "utf8"));

  await Promise.all(writes);

  console.log(`Created project-reference workspace at: ${outputRoot}`);
  console.log(`Packages: ${moduleIndexes.length} module packages + 1 app package`);
  console.log("Next steps:");
  console.log(`cd ${outputRoot}`);
  console.log("npm install");
  console.log("npm run build");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
