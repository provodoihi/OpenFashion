import {remote} from 'webdriverio';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;
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
  try {
    client = await remote(android);
  } catch (error) {
    console.log(error);
  }
});

afterEach(async () => {
  try {
    if (client) {
      await client.deleteSession();
    }
  } catch (error) {}
});

// it('is logo existed', async () => {
//   const element = await client.$('~Logo');
//   expect(await element.isDisplayed()).toBe(true);
// });

// it('can it be scrolled', async () => {
//   // scroll to element
//   await client.execute('mobile: scroll', {
//     strategy: 'accessibility id',
//     selector: 'ExploreMore',
//   });
//   const element = await client.$('~MoreProducts5');
//   await element.waitForDisplayed({timeout: 3000});
//   expect(await element.isDisplayed()).toBe(true);
// });

// it('can it be swiped', async () => {
//   await client.pause(2500);
//   // swipe right to left 2 times
//   for (let i = 1; i <= 2; i++) {
//     await client.touchAction([
//       {action: 'press', x: 600, y: 350},
//       {action: 'wait', ms: 400},
//       {action: 'moveTo', x: 250, y: 350},
//       'release',
//     ]);
//     await client.pause(500);
//   }
//   const element = await client.$('~Slide3');
//   await element.waitForDisplayed({timeout: 2500});
//   expect(await element.isDisplayed()).toBe(true);
//   await client.pause(500);
//   // swipe left to right
//   await client.touchAction([
//     {action: 'press', x: 250, y: 350},
//     {action: 'wait', ms: 400},
//     {action: 'moveTo', x: 600, y: 350},
//     'release',
//   ]);
//   const element2 = await client.$('~Slide2');
//   await element2.waitForDisplayed({timeout: 2500});
//   expect(await element2.isDisplayed()).toBe(true);
// });

it('can it be clicked', async () => {
  await client.pause(2500);
  // scroll to element
  await client.execute('mobile: scroll', {
    strategy: 'accessibility id',
    selector: 'All',
  });
  await client.pause(1000);
  const element1 = await client.$('~Apparel');
  await element1.click();
  await client.pause(1000);
  const element2 = await client.$('~Dress');
  await element2.click();
  await client.pause(1000);
  const element3 = await client.$('~Tshirt');
  await element3.click();
  await client.pause(1000);
  const element4 = await client.$('~Bag');
  await element4.click();
  await client.pause(1000);
  const element5 = await client.$('~All');
  await element5.click();
});
