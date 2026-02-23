import { chromium } from "playwright";
import { figures } from "../src/routes";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, "../output");

const TARGET_WIDTH = 2400;
const RADIUS = 48;

async function capture(targetIds?: string[]) {
  const toCapture = targetIds
    ? figures.filter((f) => targetIds.includes(f.id))
    : figures;

  if (toCapture.length === 0) {
    console.log("No figures to capture.");
    return;
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2,
    viewport: { width: 1200, height: 900 },
  });

  for (const fig of toCapture) {
    const page = await context.newPage();
    const url = `http://localhost:5180/fig/${fig.id}`;
    console.log(`Capturing ${fig.id}...`);

    await page.goto(url, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(800);

    const frame = page.locator('[data-testid="illustration-frame"]');
    await frame.waitFor({ state: "visible" });

    const buf = await frame.screenshot();

    const meta = await sharp(buf).metadata();
    const h = Math.round((meta.height! * TARGET_WIDTH) / meta.width!);
    const mask = Buffer.from(
      `<svg width="${TARGET_WIDTH}" height="${h}">
        <rect x="0" y="0" width="${TARGET_WIDTH}" height="${h}" rx="${RADIUS}" ry="${RADIUS}" fill="white"/>
      </svg>`
    );

    await sharp(buf)
      .resize(TARGET_WIDTH, h)
      .composite([{ input: mask, blend: "dest-in" }])
      .png()
      .toFile(path.join(OUTPUT_DIR, `${fig.id}.png`));

    await page.close();
    console.log(`  → ${fig.id}.png (${TARGET_WIDTH}x${h})`);
  }

  await browser.close();
  console.log(`\nDone. ${toCapture.length} images saved to output/`);
}

const args = process.argv.slice(2);
capture(args.length > 0 ? args : undefined);
