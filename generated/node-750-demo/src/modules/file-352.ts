import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-351.js";
import { main as mainPrev2 } from "./file-350.js";

export type Payload = {
  fileId: number;
  marker: "file_352";
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
  return { fileId: 352, marker: "file_352", digest: sample, values };
}

export function main(): string {
  const seed = "file-352";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`352:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:35:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:36:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`352:37:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
