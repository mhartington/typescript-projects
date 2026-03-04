import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-191.js";
import { main as mainPrev2 } from "./file-190.js";

export type Payload = {
  fileId: number;
  marker: "file_192";
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
  values.push(sample + "-17");
  values.push(sample + "-18");
  values.push(sample + "-19");
  return { fileId: 192, marker: "file_192", digest: sample, values };
}

export function main(): string {
  const seed = "file-192";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`192:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`192:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
