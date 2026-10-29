import { test, expect } from '@playwright/test';
import testData from '../test-data.json';

test("user logs in and navigates rewards and transactions @regression", async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  const continueButton = page.getByRole('button', { name: 'Continue' });
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

  const inProgressFilter = page.locator("xpath=//div[@id='filter-In progress']");
  await expect(inProgressFilter).toBeEnabled();
  await inProgressFilter.click();

  const completeFilter = page.locator("xpath=//div[@id='filter-Complete']");
  await expect(completeFilter).toBeEnabled();
  await completeFilter.click();

  const discoverBenefitCardButton = page.getByRole('button', { name: 'Discover the Watco Benefit Debit Card to get 2 Entries, Completed on 10/19/' });
  await expect(discoverBenefitCardButton).toBeEnabled();
  await discoverBenefitCardButton.click();

  const discoverBenefitCardHeader = page.locator("xpath=//h1[normalize-space(.)='Discover the Watco Benefit Debit Card']");
  await expect(discoverBenefitCardHeader).toBeVisible();

  const completedStatus = page.locator("xpath=//div[@dir='auto' and normalize-space(.)='Completed'][normalize-space(.)='Completed']");
  await expect(completedStatus).toBeVisible();

  const goBackToRewardsButton = page.getByRole('button', { name: 'Go back to Rewards' });
  await expect(goBackToRewardsButton).toBeEnabled();
  await goBackToRewardsButton.click();

  const viewAllButton = page.getByRole('button', { name: 'View all' });
  await expect(viewAllButton).toBeEnabled();
  await viewAllButton.click();

  const previousTransactionsHeader = page.locator("xpath=//div[normalize-space(.)='Previous transactions']");
  await expect(previousTransactionsHeader).toBeVisible();

  const goBackToRewardsButtonAfterViewAll = page.getByRole('button', { name: 'Go back to Rewards' });
  await expect(goBackToRewardsButtonAfterViewAll).toBeEnabled();
  await goBackToRewardsButtonAfterViewAll.click();

  const redeemButton = page.getByRole('button', { name: 'Redeem' });
  await expect(redeemButton).toBeEnabled();
  await redeemButton.click();

});
