import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

type Args = {
  output: string;
  routes: number;
  procedures: number;
  force: boolean;
};

function parseArgs(argv: string[]): Args {
  const get = (flag: string): string | undefined => {
    const i = argv.indexOf(flag);
    return i >= 0 ? argv[i + 1] : undefined;
  };

  const output = get("--output") ?? "generated/trpc-completion-demo";
  const routes = Number(get("--routes") ?? "90");
  const procedures = Number(get("--procedures") ?? "14");
  const force = argv.includes("--force");

  if (!Number.isFinite(routes) || routes < 1) {
    throw new Error("`--routes` must be a positive number.");
  }
  if (!Number.isFinite(procedures) || procedures < 1) {
    throw new Error("`--procedures` must be a positive number.");
  }

  return { output, routes, procedures, force };
}

function buildRootPackageJson(): string {
  return JSON.stringify(
    {
      name: "org-demo",
      private: true,
      version: "0.0.1",
      type: "module",
      workspaces: ["apps/*", "packages/*"],
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

function buildRootTsConfig(): string {
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
        paths: {
          "@org/api": ["./packages/api/src/index.ts"],
          "@org/api/*": ["./packages/api/src/*"],
          "@org/utils/*": ["./packages/utils/src/*"],
        },
      },
    },
    null,
    2
  );
}

function buildApiPackageJson(): string {
  return JSON.stringify(
    {
      name: "@org/api",
      private: true,
      version: "0.0.1",
      type: "module",
      scripts: {
        build: "tsc --noEmit",
      },
      dependencies: {
        "@trpc/server": "^11.0.0",
        superjson: "^2.2.2",
        zod: "^4.1.0",
      },
    },
    null,
    2
  );
}

function buildUtilsPackageJson(): string {
  return JSON.stringify(
    {
      name: "@org/utils",
      private: true,
      version: "0.0.1",
      type: "module",
      scripts: {
        build: "tsc --noEmit",
      },
    },
    null,
    2
  );
}

function buildWebPackageJson(): string {
  return JSON.stringify(
    {
      name: "@org/web",
      private: true,
      version: "0.0.1",
      type: "module",
      scripts: {
        build: "tsc --noEmit",
      },
      dependencies: {
        "@org/api": "0.0.1",
        "@org/utils": "0.0.1",
        "@trpc/server": "^11.0.0",
      },
    },
    null,
    2
  );
}

function buildPackageTsconfig(): string {
  return JSON.stringify(
    {
      extends: "../../tsconfig.json",
      include: ["src/**/*.ts"],
    },
    null,
    2
  );
}

function buildTrpcFile(): string {
  return [
    'import { initTRPC } from "@trpc/server";',
    'import superjson from "superjson";',
    "",
    "const t = initTRPC.create({",
    "  transformer: superjson,",
    "});",
    "",
    "export const router = t.router;",
    "export const publicProcedure = t.procedure;",
    "",
  ].join("\n");
}

function buildRouterFile(route: number, procedures: number): string {
  const lines: string[] = [
    'import { z } from "zod";',
    'import { publicProcedure, router } from "../trpc.js";',
    "",
    `const input_${route} = z.object({`,
    `  route: z.literal(${route}),`,
    "  search: z.string().min(1).max(64),",
    "  filters: z.object({",
    "    active: z.boolean(),",
    "    level: z.enum(['low', 'mid', 'high']),",
    "    tags: z.array(z.string().min(1).max(16)).max(12),",
    "  }),",
    "  cursor: z.object({",
    "    page: z.number().int().min(1).max(9999),",
    "    size: z.number().int().min(1).max(250),",
    "  }),",
    "});",
    "",
    `export const router${route} = router({`,
  ];

  for (let p = 0; p < procedures; p++) {
    lines.push(
      `  proc${p}: publicProcedure`,
      `    .input(input_${route}.extend({ variant: z.literal("v_${route}_${p}") }))`,
      "    .output(",
      `      input_${route}.extend({`,
      "        data: z.object({",
      "          count: z.number().int().min(0),",
      "          preview: z.array(z.object({ id: z.string(), score: z.number() })).max(8),",
      "        }),",
      "      })",
      "    )",
      "    .query(({ input }) => ({",
      "      ...input,",
      "      data: { count: input.cursor.page * input.cursor.size, preview: [] },",
      "    })),"
    );
  }

  lines.push("});", "");
  return lines.join("\n");
}

function buildAppRouterFile(routes: number): string {
  const imports: string[] = ['import { router } from "../trpc.js";'];
  const entries: string[] = [];

  for (let i = 0; i < routes; i++) {
    imports.push(`import { router${i} } from "./router${i}.js";`);
    entries.push(`  router${i},`);
  }

  return [
    ...imports,
    "",
    "export const appRouter = router({",
    ...entries,
    "});",
    "",
    "export type AppRouter = typeof appRouter;",
    "",
  ].join("\n");
}

function buildWebCompletionFile(routes: number, procedures: number): string {
  const lines: string[] = [
    'import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";',
    'import type { AppRouter } from "@org/api";',
    "",
    "type Inputs = inferRouterInputs<AppRouter>;",
    "type Outputs = inferRouterOutputs<AppRouter>;",
    "type Expand<T> = T extends object ? { [K in keyof T]: Expand<T[K]> } : T;",
    "",
    "export type EntireInputGraph = Expand<Inputs>;",
    "export type EntireOutputGraph = Expand<Outputs>;",
    "",
  ];

  let c = 0;
  for (let r = 0; r < routes && c < 240; r++) {
    for (let p = 0; p < procedures && c < 240; p++) {
      lines.push(`export type CompletionProbe${c} = Inputs["router${r}"]["proc${p}"];`);
      c++;
    }
  }

  lines.push(
    "",
    "// Trigger completion on this in editor: completionTarget.",
    "export declare const completionTarget: EntireInputGraph;",
    ""
  );

  return lines.join("\n");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const root = path.resolve(process.cwd(), args.output);

  if (args.force) {
    await rm(root, { recursive: true, force: true });
  }

  const apiDir = path.join(root, "packages", "api", "src");
  const routersDir = path.join(apiDir, "routers");
  const utilsDir = path.join(root, "packages", "utils", "src");
  const webDir = path.join(root, "apps", "web", "src", "lib");

  await mkdir(routersDir, { recursive: true });
  await mkdir(utilsDir, { recursive: true });
  await mkdir(webDir, { recursive: true });

  const writes: Promise<void>[] = [];

  writes.push(writeFile(path.join(root, "package.json"), buildRootPackageJson(), "utf8"));
  writes.push(writeFile(path.join(root, "tsconfig.json"), buildRootTsConfig(), "utf8"));

  writes.push(writeFile(path.join(root, "packages", "api", "package.json"), buildApiPackageJson(), "utf8"));
  writes.push(writeFile(path.join(root, "packages", "api", "tsconfig.json"), buildPackageTsconfig(), "utf8"));
  writes.push(writeFile(path.join(apiDir, "trpc.ts"), buildTrpcFile(), "utf8"));
  writes.push(
    writeFile(
      path.join(apiDir, "index.ts"),
      "export { appRouter } from './routers/_app.js';\nexport type { AppRouter } from './routers/_app.js';\n",
      "utf8"
    )
  );
  writes.push(writeFile(path.join(routersDir, "_app.ts"), buildAppRouterFile(args.routes), "utf8"));

  for (let i = 0; i < args.routes; i++) {
    writes.push(writeFile(path.join(routersDir, `router${i}.ts`), buildRouterFile(i, args.procedures), "utf8"));
  }

  writes.push(writeFile(path.join(root, "packages", "utils", "package.json"), buildUtilsPackageJson(), "utf8"));
  writes.push(writeFile(path.join(root, "packages", "utils", "tsconfig.json"), buildPackageTsconfig(), "utf8"));
  writes.push(writeFile(path.join(utilsDir, "base-url.ts"), "export const getBaseUrl = () => 'http://localhost:3000';\n", "utf8"));

  writes.push(writeFile(path.join(root, "apps", "web", "package.json"), buildWebPackageJson(), "utf8"));
  writes.push(writeFile(path.join(root, "apps", "web", "tsconfig.json"), buildPackageTsconfig(), "utf8"));
  writes.push(
    writeFile(
      path.join(webDir, "completion.ts"),
      buildWebCompletionFile(args.routes, args.procedures),
      "utf8"
    )
  );

  await Promise.all(writes);

  console.log(`Updated demo at: ${root}`);
  console.log(`Base style: apps/web + packages/api + packages/utils`);
  console.log(`Routes: ${args.routes}, procedures: ${args.procedures}`);
  console.log("Open apps/web/src/lib/completion.ts to test completion speed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
