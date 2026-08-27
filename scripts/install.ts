import { execSync } from "node:child_process";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

async function main() {
  const generatedDir = path.resolve(process.cwd(), "generated");

  let entries;
  try {
    entries = await readdir(generatedDir, { withFileTypes: true });
  } catch (err: any) {
    if (err.code === "ENOENT") {
      console.log(`No 'generated' directory found at: ${generatedDir}`);
      return;
    }
    throw err;
  }

  const projects: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const projectDir = path.join(generatedDir, entry.name);
      const pkgJsonPath = path.join(projectDir, "package.json");
      try {
        const fileStat = await stat(pkgJsonPath);
        if (fileStat.isFile()) {
          projects.push(projectDir);
        }
      } catch {
        // package.json doesn't exist, skip
      }
    }
  }

  if (projects.length === 0) {
    console.log("No projects with package.json found in generated/");
    return;
  }

  console.log(`Found ${projects.length} project(s) in generated/:`);
  for (const project of projects) {
    console.log(`\n--- Installing dependencies in ${path.relative(process.cwd(), project)} ---`);
    execSync("npm install", {
      cwd: project,
      stdio: "inherit",
    });
  }

  console.log("\nAll generated projects installed successfully.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
