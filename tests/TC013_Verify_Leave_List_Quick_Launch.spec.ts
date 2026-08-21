import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { testData } from '../utils/testData';

test('TC013 Verify Leave List Quick Launch is displayed', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        testData.username,
        testData.password
    );

    await loginPage.waitForDashboard();

    await dashboardPage.verifyDashboardLoaded();

    await dashboardPage.verifyLeaveListQuickLaunchDisplayed();

});