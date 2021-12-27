import {remote} from 'webdriverio';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
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

// it('is logo existed', async () => {
//   const element = await client.$('~Logo');
//   expect(await element.isDisplayed()).toBe(true);
// });

// it('can it be scrolled', async () => {
//   await client.execute('mobile: scroll', {
//     strategy: 'accessibility id',
//     selector: 'ExploreMore',
//   });
//   const element = await client.$('~MoreProducts5');
//   await element.waitForDisplayed({timeout: 3000});
//   expect(await element.isDisplayed()).toBe(true);
// });

it('can it be swiped', async () => {
  for (let i = 1; i <= 2; i++) {
    await client.touchAction([
      {action: 'press', x: 600, y: 350},
      {action: 'wait', ms: 400},
      {action: 'moveTo', x: 250, y: 350},
      'release',
    ]);
    await client.pause(1000);
  }

  // await client.execute('mobile: swipeGesture', {
  //   direction: 'right',
  //   top: 300,
  //   left: 300,
  //   width: 150,
  //   height: 150,
  //   percent: 0.75,
  // });
  const element = await client.$('~Slide3');
  await element.waitForDisplayed({timeout: 3000});
  expect(await element.isDisplayed()).toBe(true);
});
