import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "@app/module-659";
import { main as mainPrev2 } from "@app/module-658";

export type Payload = {
  fileId: number;
  marker: "file_660";
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
  return { fileId: 660, marker: "file_660", digest: sample, values };
}

export function main(): string {
  const seed = "file-660";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`660:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`660:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
