# ts-is-slow-demos

Starter workspace for Node scripts that generate large demo projects.

## Setup

```bash
npm install
```

## Available scripts

- `npm run gen`: creates/ensures the `generated/` output folder exists
- `npm run gen:project -- --name perf-test --files 1000 --lines 200`: generates many TypeScript files
- `npm run check`: type-checks the scripts

## Notes

- Generated output is written to `generated/`
- Tweak `scripts/generate-project.ts` to match your demo shape
