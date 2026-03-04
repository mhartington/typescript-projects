import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-436.js";
import { main as mainPrev2 } from "./file-435.js";

export type Payload = {
  fileId: number;
  marker: "file_437";
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
  values.push(sample + "-11");
  values.push(sample + "-12");
  return { fileId: 437, marker: "file_437", digest: sample, values };
}

export function main(): string {
  const seed = "file-437";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`437:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`437:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
