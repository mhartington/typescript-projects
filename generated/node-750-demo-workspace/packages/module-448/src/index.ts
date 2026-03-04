import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "@app/module-447";
import { main as mainPrev2 } from "@app/module-446";

export type Payload = {
  fileId: number;
  marker: "file_448";
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
  return { fileId: 448, marker: "file_448", digest: sample, values };
}

export function main(): string {
  const seed = "file-448";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`448:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:35:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:36:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:37:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:38:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:39:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`448:40:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
