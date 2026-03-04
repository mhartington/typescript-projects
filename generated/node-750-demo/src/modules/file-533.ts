import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-532.js";
import { main as mainPrev2 } from "./file-531.js";

export type Payload = {
  fileId: number;
  marker: "file_533";
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
  return { fileId: 533, marker: "file_533", digest: sample, values };
}

export function main(): string {
  const seed = "file-533";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`533:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:35:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:36:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`533:37:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
