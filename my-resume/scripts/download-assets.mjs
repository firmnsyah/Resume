import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname } from "node:path";

const ASSETS = [
  { url: "https://resume-klent.web.app/assets/resume2x2-DzSfnLN4.jpg", out: "public/images/profile.jpg" },
  { url: "https://resume-klent.web.app/assets/virielle-dedZIs2T.png", out: "public/images/virielle.png" },
  { url: "https://resume-klent.web.app/assets/ha-BlY69gJX.jpg", out: "public/images/gallery-1.jpg" },
  { url: "https://resume-klent.web.app/assets/ha1-C6y97j3v.JPG", out: "public/images/gallery-2.jpg" },
  { url: "https://resume-klent.web.app/assets/1-Gq_v3UOp.jpg", out: "public/images/gallery-3.jpg" },
  { url: "https://resume-klent.web.app/assets/ha2-mgxZNwe3.jpg", out: "public/images/gallery-4.jpg" },
  { url: "https://resume-klent.web.app/assets/be-HYm_yrqQ.jpg", out: "public/images/gallery-5.jpg" },
  { url: "https://resume-klent.web.app/assets/ha4-DzBqireL.jpg", out: "public/images/gallery-6.jpg" },
  { url: "https://resume-klent.web.app/assets/ha5-CPZmQWYZ.jpg", out: "public/images/gallery-7.jpg" },
  { url: "https://resume-klent.web.app/assets/ako-tAtKfM3i.jpg", out: "public/images/gallery-8.jpg" },
];

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function download({ url, out }) {
  if (await exists(out)) {
    console.log(`SKIP ${out} (exists)`);
    return;
  }
  await mkdir(dirname(out), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAIL ${url} → ${res.status}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(out, buf);
  console.log(`OK   ${out} (${buf.length} bytes)`);
}

async function batch(items, n) {
  for (let i = 0; i < items.length; i += n) {
    await Promise.all(items.slice(i, i + n).map(download));
  }
}

await batch(ASSETS, 4);
console.log("Done.");
