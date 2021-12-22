import {remote} from 'webdriverio';

const android = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    deviceName: '52000bbe4a443511',
    // app: 'D:/Study/app-debug.apk',
    automationName: 'UiAutomator2',
    appPackage: 'com.openfashion',
    appActivity: '.MainActivity',
  },
};

let client;

beforeEach(async () => {
  client = await remote(android);
  console.error(client);
});

afterEach(async () => {
  if (client) {
    await client.deleteSession();
  }
});
