import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-745.js";
import { main as mainPrev2 } from "./file-744.js";

export type Payload = {
  fileId: number;
  marker: "file_746";
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
  return { fileId: 746, marker: "file_746", digest: sample, values };
}

export function main(): string {
  const seed = "file-746";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`746:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:35:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:36:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:37:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`746:38:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
