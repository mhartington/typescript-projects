import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "@app/module-308";
import { main as mainPrev2 } from "@app/module-307";

export type Payload = {
  fileId: number;
  marker: "file_309";
  digest: string;
  values: string[];
};

function synthesizePayload(sample: string): Payload {
  const values: string[] = [sample];
  values.push(sample + "-0");
  values.push(sample + "-1");
  values.push(sample + "-2");
  values.push(sample + "-3");
  values.push(sample + "-4");
  values.push(sample + "-5");
  values.push(sample + "-6");
  values.push(sample + "-7");
  values.push(sample + "-8");
  values.push(sample + "-9");
  values.push(sample + "-10");
  return { fileId: 309, marker: "file_309", digest: sample, values };
}

export function main(): string {
  const seed = "file-309";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`309:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`309:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
