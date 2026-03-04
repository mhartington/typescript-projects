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
    source: get("--source") ?? "generated/node-750-demo",
    output: get("--output") ?? "generated/node-750-demo-workspace",
    force: argv.includes("--force"),
  };
}

function toPackageName(index: number): string {
  return `@app/module-${index}`;
}

function toPackageDir(root: string, index: number): string {
  return path.join(root, "packages", `module-${index}`);
}

function rewriteModuleImports(source: string, index: number): string {
  let updated = source;
  if (index > 0) {
    updated = updated.replace(
      `from "./file-${index - 1}.js";`,
      `from "${toPackageName(index - 1)}";`
    );
  }
  if (index > 1) {
    updated = updated.replace(
      `from "./file-${index - 2}.js";`,
      `from "${toPackageName(index - 2)}";`
    );
  }
  return updated;
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

function buildRootTsConfig(paths: Record<string, string[]>): string {
  return JSON.stringify(
    {
      compilerOptions: {
        target: "ES2023",
        module: "NodeNext",
        moduleResolution: "NodeNext",
        strict: true,
        skipLibCheck: true,
        noEmit: true,
        baseUrl: ".",
        types: ["node"],
        paths,
      },
    },
    null,
    2
  );
}

function buildPackageTsConfig(): string {
  return JSON.stringify(
    {
      extends: "../../tsconfig.json",
      compilerOptions: {
        outDir: "dist",
      },
      include: ["src/**/*.ts"],
    },
    null,
    2
  );
}

function buildModulePackageJson(index: number, totalModules: number): string {
  const deps: Record<string, string> = {};
  if (index > 0) deps[toPackageName(index - 1)] = "0.0.0";
  if (index > 1) deps[toPackageName(index - 2)] = "0.0.0";

  return JSON.stringify(
    {
      name: toPackageName(index),
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        build: "tsc --noEmit",
      },
      exports: "./src/index.ts",
      types: "./src/index.ts",
      dependencies: deps,
      devDependencies: index === totalModules - 1 ? {} : undefined,
    },
    null,
    2
  );
}

function rewriteAppIndex(source: string): string {
  return source.replace(
    /from "\.\/modules\/file-(\d+)\.js";/g,
    (_match, id: string) => `from "${toPackageName(Number(id))}";`
  );
}

function buildAppPackageJson(moduleCount: number): string {
  const deps: Record<string, string> = {};
  for (let i = 0; i < moduleCount; i++) {
    deps[toPackageName(i)] = "0.0.0";
  }

  return JSON.stringify(
    {
      name: "@app/main",
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        build: "tsc --noEmit",
        start: "node dist/index.js",
      },
      dependencies: deps,
      exports: "./src/index.ts",
      types: "./src/index.ts",
    },
    null,
    2
  );
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const workspaceRoot = path.resolve(process.cwd(), args.output);
  const sourceRoot = path.resolve(process.cwd(), args.source);
  const sourceModulesDir = path.join(sourceRoot, "src", "modules");
  const sourceIndexPath = path.join(sourceRoot, "src", "index.ts");

  if (args.force) {
    await rm(workspaceRoot, { recursive: true, force: true });
  }

  const moduleFiles = (await readdir(sourceModulesDir))
    .filter((name) => /^file-\d+\.ts$/.test(name))
    .sort((a, b) => Number(a.match(/\d+/)?.[0] ?? 0) - Number(b.match(/\d+/)?.[0] ?? 0));

  const moduleCount = moduleFiles.length;
  if (moduleCount === 0) {
    throw new Error(`No module files found in ${sourceModulesDir}`);
  }

  await mkdir(path.join(workspaceRoot, "packages"), { recursive: true });

  const writes: Promise<void>[] = [];
  const pathsMap: Record<string, string[]> = {};

  for (const fileName of moduleFiles) {
    const index = Number(fileName.match(/\d+/)?.[0] ?? -1);
    if (index < 0) continue;

    const srcContent = await readFile(path.join(sourceModulesDir, fileName), "utf8");
    const moduleDir = toPackageDir(workspaceRoot, index);
    const moduleSrcDir = path.join(moduleDir, "src");

    pathsMap[toPackageName(index)] = [`packages/module-${index}/src/index.ts`];

    await mkdir(moduleSrcDir, { recursive: true });
    writes.push(writeFile(path.join(moduleSrcDir, "index.ts"), rewriteModuleImports(srcContent, index), "utf8"));
    writes.push(writeFile(path.join(moduleDir, "package.json"), buildModulePackageJson(index, moduleCount), "utf8"));
    writes.push(writeFile(path.join(moduleDir, "tsconfig.json"), buildPackageTsConfig(), "utf8"));
  }

  const appDir = path.join(workspaceRoot, "packages", "app");
  const appSrcDir = path.join(appDir, "src");
  await mkdir(appSrcDir, { recursive: true });
  const appIndex = await readFile(sourceIndexPath, "utf8");
  writes.push(writeFile(path.join(appSrcDir, "index.ts"), rewriteAppIndex(appIndex), "utf8"));
  writes.push(writeFile(path.join(appDir, "package.json"), buildAppPackageJson(moduleCount), "utf8"));
  writes.push(writeFile(path.join(appDir, "tsconfig.json"), buildPackageTsConfig(), "utf8"));

  pathsMap["@app/main"] = ["packages/app/src/index.ts"];

  writes.push(writeFile(path.join(workspaceRoot, "package.json"), buildRootPackageJson("node-750-demo-workspace"), "utf8"));
  writes.push(writeFile(path.join(workspaceRoot, "tsconfig.json"), buildRootTsConfig(pathsMap), "utf8"));

  await Promise.all(writes);

  console.log(`Created workspace demo at: ${workspaceRoot}`);
  console.log(`Packages: ${moduleCount} module packages + 1 app package`);
  console.log("Next steps:");
  console.log(`cd ${workspaceRoot}`);
  console.log("npm install");
  console.log("npm run build");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
