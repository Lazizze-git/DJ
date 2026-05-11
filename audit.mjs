import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseUrl = process.argv[2] || 'http://localhost:3000';
const suffix = process.argv[3] || 'before';

const dir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const pages = ['', 'about', 'sounds', 'presskit'];
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
  for (const p of pages) {
    const url = p ? `${baseUrl}/#/${p}` : baseUrl;
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 800));
    const name = p || 'home';
    const file = path.join(dir, `${suffix}-${vp.name}-${name}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`Saved ${file}`);
  }
  // Also: presskit with all photos open on mobile
  if (vp.name === 'mobile') {
    await page.goto(`${baseUrl}/#/presskit`, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 500));
    await page.evaluate(() => typeof togglePhotos === 'function' && togglePhotos());
    await new Promise(r => setTimeout(r, 400));
    const file = path.join(dir, `${suffix}-${vp.name}-presskit-allphotos.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`Saved ${file}`);
  }
  await page.close();
}
await browser.close();
