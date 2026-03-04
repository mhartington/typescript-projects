import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "@app/module-734";
import { main as mainPrev2 } from "@app/module-733";

export type Payload = {
  fileId: number;
  marker: "file_735";
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
  return { fileId: 735, marker: "file_735", digest: sample, values };
}

export function main(): string {
  const seed = "file-735";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`735:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`735:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
