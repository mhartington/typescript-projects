import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "@app/module-382";
import { main as mainPrev2 } from "@app/module-381";

export type Payload = {
  fileId: number;
  marker: "file_383";
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
  return { fileId: 383, marker: "file_383", digest: sample, values };
}

export function main(): string {
  const seed = "file-383";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`383:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`383:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
