import { test, Locator, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test('TC002 - Verify login fails with Invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

     await loginPage.login(
        testData.username, 
        testData.invalidPassword
    );

    await loginPage.verifyErrorMessage('Invalid credentials');
});