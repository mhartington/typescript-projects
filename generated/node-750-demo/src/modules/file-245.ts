import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-244.js";
import { main as mainPrev2 } from "./file-243.js";

export type Payload = {
  fileId: number;
  marker: "file_245";
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
  values.push(sample + "-15");
  values.push(sample + "-16");
  return { fileId: 245, marker: "file_245", digest: sample, values };
}

export function main(): string {
  const seed = "file-245";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`245:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`245:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
