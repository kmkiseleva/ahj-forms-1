import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('e2e test', async () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';
  beforeAll(async () => {
    browser = await puppetteer.launch();
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('Open baseUrl', async () => {
    await page.goto(baseUrl);
  });

  test('Toggling class', async () => {
    await page.goto(baseUrl);
    const btn = await page.$('button');
    btn.click();
    await page.waitForSelector('.popover_inactive');
  });
});
