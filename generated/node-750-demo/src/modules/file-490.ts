import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-489.js";
import { main as mainPrev2 } from "./file-488.js";

export type Payload = {
  fileId: number;
  marker: "file_490";
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
  return { fileId: 490, marker: "file_490", digest: sample, values };
}

export function main(): string {
  const seed = "file-490";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`490:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`490:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
