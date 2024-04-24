import { test, expect} from '@playwright/test'

test.use({
    viewport: { width: 1280, height: 720 },
  });


test('Mobile Emulator', async ({ page }) => {

   
  await page.goto('https://playwright.dev/');

  await page.waitForTimeout(3000);

});

//npx playwright test ./tests/mobile.spec.js --project "Mobile Safari" --headed