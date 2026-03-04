import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
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
    source: get("--source") ?? "generated/trpc-completion-demo",
    output: get("--output") ?? "generated/trpc-completion-demo-references",
    force: argv.includes("--force"),
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const sourceRoot = path.resolve(process.cwd(), args.source);
  const outputRoot = path.resolve(process.cwd(), args.output);

  if (args.force) {
    await rm(outputRoot, { recursive: true, force: true });
  }

  await mkdir(outputRoot, { recursive: true });
  await cp(path.join(sourceRoot, "apps"), path.join(outputRoot, "apps"), { recursive: true });
  await cp(path.join(sourceRoot, "packages"), path.join(outputRoot, "packages"), {
    recursive: true,
  });

  const rootPkg = {
    name: "org-demo-references",
    private: true,
    version: "0.0.1",
    type: "module",
    workspaces: ["apps/*", "packages/*"],
    scripts: {
      prebuild: "tsc -b packages/utils packages/api",
      build: "npm run prebuild && npm run build --workspaces --if-present",
    },
    devDependencies: {
      "@types/node": "^24.0.0",
      typescript: "^5.9.0",
    },
  };

  const rootTsconfig = {
    files: [],
    references: [
      { path: "./packages/utils" },
      { path: "./packages/api" },
      { path: "./apps/web" },
    ],
  };

  const baseTsconfig = {
    compilerOptions: {
      target: "ES2023",
      module: "NodeNext",
      moduleResolution: "NodeNext",
      strict: true,
      skipLibCheck: true,
      baseUrl: ".",
      paths: {
        "@org/api": ["./packages/api/dist-types/src/index.d.ts"],
        "@org/api/*": ["./packages/api/dist-types/src/*"],
        "@org/utils/*": ["./packages/utils/dist-types/src/*"],
      },
    },
  };

  await writeFile(path.join(outputRoot, "package.json"), JSON.stringify(rootPkg, null, 2), "utf8");
  await writeFile(
    path.join(outputRoot, "tsconfig.base.json"),
    JSON.stringify(baseTsconfig, null, 2),
    "utf8"
  );
  await writeFile(path.join(outputRoot, "tsconfig.json"), JSON.stringify(rootTsconfig, null, 2), "utf8");

  const apiTsconfig = {
    extends: "../../tsconfig.base.json",
    compilerOptions: {
      composite: true,
      declaration: true,
      emitDeclarationOnly: true,
      declarationMap: true,
      outDir: "dist-types",
      tsBuildInfoFile: "dist-types/tsconfig.tsbuildinfo",
    },
    include: ["src/**/*.ts"],
    references: [{ path: "../utils" }],
  };

  const utilsTsconfig = {
    extends: "../../tsconfig.base.json",
    compilerOptions: {
      composite: true,
      declaration: true,
      emitDeclarationOnly: true,
      declarationMap: true,
      outDir: "dist-types",
      tsBuildInfoFile: "dist-types/tsconfig.tsbuildinfo",
    },
    include: ["src/**/*.ts"],
    references: [],
  };

  const webTsconfig = {
    extends: "../../tsconfig.base.json",
    compilerOptions: {
      composite: true,
      noEmit: true,
      disableSourceOfProjectReferenceRedirect: true,
      tsBuildInfoFile: "node_modules/.cache/tsconfig.tsbuildinfo",
    },
    include: ["src/**/*.ts"],
    references: [{ path: "../../packages/api" }, { path: "../../packages/utils" }],
  };

  const apiPkgPath = path.join(outputRoot, "packages", "api", "package.json");
  const utilsPkgPath = path.join(outputRoot, "packages", "utils", "package.json");
  const webPkgPath = path.join(outputRoot, "apps", "web", "package.json");

  const apiPkg = JSON.parse(await readFile(apiPkgPath, "utf8"));
  apiPkg.scripts = { build: "tsc -b" };
  apiPkg.types = "./dist-types/src/index.d.ts";

  const utilsPkg = JSON.parse(await readFile(utilsPkgPath, "utf8"));
  utilsPkg.scripts = { build: "tsc -b" };
  utilsPkg.types = "./dist-types/src/base-url.d.ts";

  const webPkg = JSON.parse(await readFile(webPkgPath, "utf8"));
  webPkg.scripts = { build: "tsc --noEmit -p tsconfig.json" };

  await writeFile(apiPkgPath, JSON.stringify(apiPkg, null, 2), "utf8");
  await writeFile(utilsPkgPath, JSON.stringify(utilsPkg, null, 2), "utf8");
  await writeFile(webPkgPath, JSON.stringify(webPkg, null, 2), "utf8");

  await writeFile(
    path.join(outputRoot, "packages", "api", "tsconfig.json"),
    JSON.stringify(apiTsconfig, null, 2),
    "utf8"
  );
  await writeFile(
    path.join(outputRoot, "packages", "utils", "tsconfig.json"),
    JSON.stringify(utilsTsconfig, null, 2),
    "utf8"
  );
  await writeFile(
    path.join(outputRoot, "apps", "web", "tsconfig.json"),
    JSON.stringify(webTsconfig, null, 2),
    "utf8"
  );

  console.log(`Created references demo at: ${outputRoot}`);
  console.log("Prebuild generates declarations for api and utils.");
  console.log("Open apps/web/src/lib/completion.ts to test completion speed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
