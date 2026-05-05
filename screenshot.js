import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  
  const sites = [
    { name: 'lossvial', url: 'https://www.lossvial.com.ar/' },
    { name: 'entreriosnet', url: 'https://vfigunn.github.io/entreriosnet/' },
    { name: 'malditabirra', url: 'https://malditabirra.vercel.app/' },
    { name: 'net-g', url: 'https://net-g.vercel.app/' },
    { name: 'megagym', url: 'https://megagym-gchu.vercel.app/' },
  ];

  for (const site of sites) {
    console.log(`Taking screenshot for ${site.name}...`);
    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await page.screenshot({ path: `public/images/${site.name}.png` });
      console.log(`Success: ${site.name}.png`);
    } catch (e) {
      console.error(`Failed for ${site.name}: ${e.message}`);
    }
  }

  await browser.close();
})();
