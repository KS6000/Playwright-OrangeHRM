import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { testData } from '../utils/testData';

test('TC001 - Verify user can login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        testData.username, 
        testData.password
    );

    await dashboardPage.verifyDashboardLoaded();

    await expect(page).toHaveURL(/dashboard/);
});
