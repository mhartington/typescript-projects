import { createHash, randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { cpus, tmpdir } from "node:os";
import { parse as parseUrl } from "node:url";
import { inspect } from "node:util";
import { main as mainPrev } from "@app/module-137";
import { main as mainPrev2 } from "@app/module-136";

export type Payload = {
  fileId: number;
  marker: "file_138";
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
  values.push(sample + "-20");
  values.push(sample + "-21");
  return { fileId: 138, marker: "file_138", digest: sample, values };
}

export function main(): string {
  const seed = "file-138";
  const root = join(tmpdir(), "node-demo", seed);
  const url = parseUrl("https://example.com/" + basename(root));
  const cpuCount = cpus().length;
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 12);
  const id = randomUUID().slice(0, 8);
  const values: string[] = [];
  values.push(mainPrev());
  values.push(mainPrev2());
  values.push(`138:0:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:1:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:2:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:3:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:4:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:5:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:6:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:7:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:8:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:9:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:10:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:11:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:12:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:13:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:14:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:15:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:16:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:17:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:18:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  values.push(`138:19:${cpuCount}:${url.pathname ?? "none"}:${digest}:${id}`);
  const payload = synthesizePayload(values[0] ?? seed);
  values.push((payload.fileId as number).toString());
  values.push(payload.marker as string);
  const preview = inspect(values.slice(0, 3), { compact: true, breakLength: 120 });
  return values.length + "|" + preview;
}
