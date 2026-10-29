const { test, expect } = require('../../fixtures/walker_fixture.js');
import testData from '../../test-data.json';

test("user logs in and reads the Monthly Lucet EAP newsletter @regression", async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  const continueButton = page.getByRole('button', { name: 'Continue' });
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  const usernameInput = page.locator("xpath=//input[@id='username']");
  await expect(usernameInput).toBeEditable();
  await usernameInput.fill(testData.username);

  const passwordInput = page.locator("xpath=//input[@id='password']");
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  const continueButtonAfterCredentials = page.getByRole('button', { name: 'Continue', exact: true });
  await expect(continueButtonAfterCredentials).toBeEnabled();
  await continueButtonAfterCredentials.click();

  const myRewardsButton = page.getByRole('button', { name: 'My rewards' });
  await expect(myRewardsButton).toBeEnabled();
  await myRewardsButton.click();

  const readMonthlyLucetEAPButton = page.getByRole('button', { name: 'Read the Monthly Lucet EAP' });
  await expect(readMonthlyLucetEAPButton).toBeEnabled();
  await readMonthlyLucetEAPButton.click();

  const newsletterHeader = page.locator("xpath=//h1[normalize-space(.)='Read the Monthly Lucet EAP Newsletter']");
  await expect(newsletterHeader).toBeVisible();

  const newsletterDescription = page.locator("xpath=//div[@aria-label=\"Each month Lucet serves up a newsletter to provide new tips and helpful resources to keep you informed and well.  Don't miss out on this valuable resource to support you and your loved ones.  \"]//div[@dir='auto']");
  await expect(newsletterDescription).toBeVisible();

  const readNowButton = page.getByRole('button', { name: 'Read Now' });
  await expect(readNowButton).toBeEnabled();
  await readNowButton.click();

  const goBackToRewardsButton = page.getByRole('button', { name: 'Go back to Rewards' });
  await expect(goBackToRewardsButton).toBeEnabled();
  await goBackToRewardsButton.click();

  const myRewardsHeader = page.locator("xpath=//h1[@data-sentry-element='BFText'][normalize-space(.)='My Rewards']");
  await expect(myRewardsHeader).toBeVisible();

});
