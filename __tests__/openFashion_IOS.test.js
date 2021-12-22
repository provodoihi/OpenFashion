import {remote} from 'webdriverio';

const ios = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'iOS',
    deviceName: '',
    // app: '',
    automationName: 'XCUITest',
  },
};

let client;

beforeEach(async () => {
  client = await remote(ios);
  console.error(client);
});

afterEach(async () => {
  if (client) {
    await client.deleteSession();
  }
});
