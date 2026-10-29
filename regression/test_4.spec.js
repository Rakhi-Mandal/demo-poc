import { test, expect } from '@playwright/test';
import testData from '../test-data.json';

test("user downloads Watco Benefitplace App after login and filter selection @regression", async ({ page }) => {
  await page.goto(testData.url_2);
  await page.waitForLoadState('domcontentloaded');

  const continueButton = page.locator("xpath=//button[@aria-label='Continue']");
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  const usernameInput = page.locator("xpath=//input[@id='username']");
  await expect(usernameInput).toBeEditable();
  await usernameInput.fill(testData.username);

  const passwordLabel = page.getByText('Password *');
  await expect(passwordLabel).toBeEnabled();
  await passwordLabel.click();

  const passwordInput = page.locator("xpath=//input[@id='password']");
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  const continueButtonAfterPassword = page.getByRole('button', { name: 'Continue', exact: true });
  await expect(continueButtonAfterPassword).toBeEnabled();
  await continueButtonAfterPassword.click();
  
  await page.waitForTimeout(2000);
  const inProgressFilter = page.locator("xpath=//div[@id='filter-In progress']");
  await expect(inProgressFilter).toBeEnabled();
  await inProgressFilter.click();

  await page.waitForTimeout(2000);

  const completeFilter = page.locator("xpath=//div[@id='filter-Complete']");
  await expect(completeFilter).toBeEnabled();
  await completeFilter.click();

  const downloadWatcoButton = page.getByRole('button', { name: 'Download the Watco' });
  await expect(downloadWatcoButton).toBeEnabled();
  await downloadWatcoButton.click();

  const downloadWatcoHeader = page.locator("xpath=//h1[normalize-space(.)='Download the Watco Benefitplace App']");
  await expect(downloadWatcoHeader).toBeVisible();

  const completedStatus = page.locator("xpath=//div[@dir='auto' and normalize-space(.)='Completed'][normalize-space(.)='Completed']");
  await expect(completedStatus).toBeVisible();

  const personalButton = page.getByRole('button', { name: 'Personal' });
  await expect(personalButton).toBeEnabled();
  await personalButton.click();

  const myRewardsButton = page.getByRole('button', { name: 'My rewards' });
  await expect(myRewardsButton).toBeEnabled();
  await myRewardsButton.click();

});
