import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-31.js";
import { main as mainPrev2 } from "./file-30.js";

export type Payload = {
  fileId: number;
  marker: "file_32";
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
  return { fileId: 32, marker: "file_32", digest: sample, values };
}

export function main(): string {
  const seed = "file-32";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`32:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`32:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
