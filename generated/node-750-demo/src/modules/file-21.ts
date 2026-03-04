import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-20.js";
import { main as mainPrev2 } from "./file-19.js";

export type Payload = {
  fileId: number;
  marker: "file_21";
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
  return { fileId: 21, marker: "file_21", digest: sample, values };
}

export function main(): string {
  const seed = "file-21";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`21:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`21:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
