import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-74.js";
import { main as mainPrev2 } from "./file-73.js";

export type Payload = {
  fileId: number;
  marker: "file_75";
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
  values.push(sample + "-13");
  values.push(sample + "-14");
  return { fileId: 75, marker: "file_75", digest: sample, values };
}

export function main(): string {
  const seed = "file-75";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`75:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`75:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
