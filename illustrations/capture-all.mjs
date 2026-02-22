import { chromium } from 'playwright';
import sharp from 'sharp';

const TARGET_WIDTH = 2400;
const RADIUS = 48; // rounded corner radius in output pixels

const figs = [
  'fig-01','fig-02','fig-03','fig-04','fig-05','fig-06','fig-07','fig-08','fig-09','fig-10',
  'fig-11','fig-12','fig-13','fig-14','fig-15','fig-16','fig-17','fig-18','fig-19','fig-20',
  'fig-21','fig-22','fig-23','fig-24','fig-25','fig-26','fig-27','fig-28','fig-29','fig-30',
  'fig-31','fig-32','fig-33','fig-34','fig-35','fig-36','fig-37','fig-38','fig-39','fig-40',
  'fig-41','fig-42','fig-43','fig-44',
  'fig-45','fig-46','fig-47','fig-48','fig-49',
  'fig-50','fig-51','fig-52'
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 2 });

for (const id of figs) {
  await page.goto(`http://localhost:5180/fig/${id}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const el = await page.locator('[data-testid="illustration-frame"]').first();
  if (await el.count() > 0) {
    const buf = await el.screenshot();
    const meta = await sharp(buf).metadata();
    const h = Math.round(meta.height * TARGET_WIDTH / meta.width);
    const mask = Buffer.from(
      `<svg width="${TARGET_WIDTH}" height="${h}">
        <rect x="0" y="0" width="${TARGET_WIDTH}" height="${h}" rx="${RADIUS}" ry="${RADIUS}" fill="white"/>
      </svg>`
    );
    await sharp(buf)
      .resize(TARGET_WIDTH, h)
      .composite([{ input: mask, blend: 'dest-in' }])
      .png()
      .toFile(`output/${id}.png`);
    console.log(`OK: ${id} (${TARGET_WIDTH}x${h})`);
  } else {
    console.log(`MISSING: ${id}`);
  }
}

await browser.close();
