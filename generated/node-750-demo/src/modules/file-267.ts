import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-266.js";
import { main as mainPrev2 } from "./file-265.js";

export type Payload = {
  fileId: number;
  marker: "file_267";
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
  return { fileId: 267, marker: "file_267", digest: sample, values };
}

export function main(): string {
  const seed = "file-267";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`267:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:35:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:36:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:37:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:38:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:39:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`267:40:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
