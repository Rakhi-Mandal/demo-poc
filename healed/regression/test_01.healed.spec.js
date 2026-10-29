const { test, expect } = require('../../fixtures/walker_fixture.js');
import testData from '../../test-data.json';

test("user completes Watco Benefit Debit Card action from My Rewards @regression", async ({ page }) => {
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

  const continueButtonAfterLogin = page.getByRole('button', { name: 'Continue', exact: true });
  await expect(continueButtonAfterLogin).toBeEnabled();
  await continueButtonAfterLogin.click();

  const myRewardsButton = page.getByRole('button', { name: 'My rewards' });
  await expect(myRewardsButton).toBeEnabled();
  await myRewardsButton.click();

  const myRewardsHeader = page.locator("xpath=//h1[@data-sentry-element='BFText'][normalize-space(.)='My Rewards']");
  await expect(myRewardsHeader).toBeVisible();

  const discoverWatcoBenefitButton = page.getByRole('button', { name: 'Discover the Watco Benefit' });
  await expect(discoverWatcoBenefitButton).toBeEnabled();
  await discoverWatcoBenefitButton.click();

  const discoverWatcoBenefitHeader = page.locator("xpath=//h1[normalize-space(.)='Discover the Watco Benefit Debit Card']");
  await expect(discoverWatcoBenefitHeader).toBeVisible();

  const getStartedButton = page.getByRole('button', { name: 'Get started' });
  await expect(getStartedButton).toBeEnabled();
  await getStartedButton.click();

  const inProgressStatus = page.locator("xpath=//div[@dir='auto' and normalize-space(.)='In progress'][normalize-space(.)='In progress']");
  await expect(inProgressStatus).toBeVisible();

  const completeActionButton = page.getByRole('button', { name: 'Complete action' });
  await expect(completeActionButton).toBeEnabled();
  await completeActionButton.click();

  const checkboxDiv = page.locator("xpath=//div[@role='checkbox']/div[1]/div[1]");
  await expect(checkboxDiv).toBeEnabled();
  await checkboxDiv.click();

  const addCompletionDateButton = page.getByRole('button', { name: 'Add completion date' });
  await expect(addCompletionDateButton).toBeEnabled();
  await addCompletionDateButton.click();

  const selectDateButton = page.getByRole('button', { name: 'Select date' });
  await expect(selectDateButton).toBeEnabled();
  await selectDateButton.click();

  const confirmDateButton = page.locator("xpath=//button[@role='button' and normalize-space(.)='Cancel']/preceding-sibling::button[@role='button']");
  await expect(confirmDateButton).toBeEnabled();
  await confirmDateButton.click();

  const goBackToRewardsButton = page.getByRole('button', { name: 'Go back to Rewards' });
  await expect(goBackToRewardsButton).toBeEnabled();
  await goBackToRewardsButton.click();


});
