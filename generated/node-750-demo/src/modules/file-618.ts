import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-617.js";
import { main as mainPrev2 } from "./file-616.js";

export type Payload = {
  fileId: number;
  marker: "file_618";
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
  return { fileId: 618, marker: "file_618", digest: sample, values };
}

export function main(): string {
  const seed = "file-618";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`618:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`618:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
