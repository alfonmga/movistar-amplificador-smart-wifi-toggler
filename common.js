require ('dotenv').config();
const puppeteer = require('puppeteer');

const TARGET_URL = `http://${process.env.DEVICE_IP}/wifi5g.cgi`;

const run = async (wifiStatus) => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(TARGET_URL);
  await page.type('#login_password', process.env.DEVICE_LOGIN_PASSWORD);
  await Promise.all([
    page.click('.sendBtu2'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);
  await page.click(`#wifi_status${wifiStatus}`);
  await page.click('#accept_icon');
  await browser.close();
}

exports.run = run;
