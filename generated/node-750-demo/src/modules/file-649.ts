import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "./file-648.js";
import { main as mainPrev2 } from "./file-647.js";

export type Payload = {
  fileId: number;
  marker: "file_649";
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
  return { fileId: 649, marker: "file_649", digest: sample, values };
}

export function main(): string {
  const seed = "file-649";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`649:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`649:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
