import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-713.js";
import { main as mainPrev2 } from "./file-712.js";

export type Payload = {
  fileId: number;
  marker: "file_714";
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
  return { fileId: 714, marker: "file_714", digest: sample, values };
}

export function main(): string {
  const seed = "file-714";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`714:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:35:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:36:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`714:37:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
