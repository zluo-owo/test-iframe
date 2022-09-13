import { test, expect } from '@playwright/test';

test('able to click Allow button on request storage access prompt', async ({ page }) => {
  // First, set some cookies for a domain (zluo-owo.github.io in this case)
  await page.goto('https://zluo-owo.github.io/test-iframe/');

  await page.locator('text=set cookie').click();


  // Second, visit another url which embed the above domain in iframe
  // (Please run `python3 -m http.server` under project root dir to start the local web server.)
  await page.goto('localhost:8000');

  await page.frameLocator('#simpleiFrame').locator('#requestAccess').click();


});
