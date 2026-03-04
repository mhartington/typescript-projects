import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "@app/module-85";
import { main as mainPrev2 } from "@app/module-84";

export type Payload = {
  fileId: number;
  marker: "file_86";
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
  return { fileId: 86, marker: "file_86", digest: sample, values };
}

export function main(): string {
  const seed = "file-86";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`86:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:35:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:36:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:37:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:38:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:39:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`86:40:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
