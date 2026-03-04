import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "@app/module-468";
import { main as mainPrev2 } from "@app/module-467";

export type Payload = {
  fileId: number;
  marker: "file_469";
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
  return { fileId: 469, marker: "file_469", digest: sample, values };
}

export function main(): string {
  const seed = "file-469";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`469:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:20:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:21:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:22:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:23:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:24:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:25:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:26:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:27:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:28:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:29:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:30:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:31:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:32:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:33:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:34:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`469:35:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
