import { chromium } from "playwright";
import { figures } from "../src/routes";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, "../output");

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
    await page.waitForTimeout(500);

    const frame = page.locator('[data-testid="illustration-frame"]');
    await frame.waitFor({ state: "visible" });

    await frame.screenshot({
      path: path.join(OUTPUT_DIR, `${fig.id}.png`),
    });

    await page.close();
    console.log(`  → ${fig.id}.png`);
  }

  await browser.close();
  console.log(`\nDone. ${toCapture.length} images saved to output/`);
}

const args = process.argv.slice(2);
capture(args.length > 0 ? args : undefined);
