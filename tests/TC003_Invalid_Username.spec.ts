import { test, Locator, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test('TC003 - Verify login fails with invalid username', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

     await loginPage.login(
        testData.invalidUsername, 
        testData.password
    );

    await loginPage.verifyErrorMessage('Invalid credentials');
});