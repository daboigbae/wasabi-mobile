/* eslint-env detox/detox, mocha */

describe("User Test Suite", () => {
	beforeAll(async () => {
		await device.launchApp();
	});

	beforeEach(async () => {
		await device.reloadReactNative();
	});

	const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	it("should play song for 5 seconds then pause the song", async () => {
		// getting the reference of an element by ID and expecting to be visible
		await expect(element(by.id("song:0"))).toBeVisible();

		// Getting the reference and executing a tap/press
		await element(by.id("song:0")).tap();

		await timeout(5000);

		await expect(element(by.id("player"))).toBeVisible();

		await expect(element(by.id("playButton"))).toBeVisible();
		await element(by.id("playButton")).tap();
	});
});
