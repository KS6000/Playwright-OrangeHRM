import { test, Locator, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test('TC004 - Verify login fails with invalid username and invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

     await loginPage.login(
        testData.invalidUsername, 
        testData.invalidPassword,
    );

    await loginPage.verifyErrorMessage('Invalid credentials');
});