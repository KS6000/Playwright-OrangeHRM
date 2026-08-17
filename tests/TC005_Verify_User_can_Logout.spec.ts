import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { testData } from '../utils/testData';

test('TC005 - Verify user can logout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        testData.username,
        testData.password
    );

    await dashboardPage.verifyDashboardLoaded();

    await dashboardPage.logout();

    await expect(page).toHaveURL(/auth\/login/);
});