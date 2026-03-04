import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "@app/module-223";
import { main as mainPrev2 } from "@app/module-222";

export type Payload = {
  fileId: number;
  marker: "file_224";
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
  return { fileId: 224, marker: "file_224", digest: sample, values };
}

export function main(): string {
  const seed = "file-224";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`224:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`224:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
