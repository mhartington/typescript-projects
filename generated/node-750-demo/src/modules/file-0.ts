import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";

export type Payload = {
  fileId: number;
  marker: "file_0";
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
  return { fileId: 0, marker: "file_0", digest: sample, values };
}

export function main(): string {
  const seed = "file-0";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(`0:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`0:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
