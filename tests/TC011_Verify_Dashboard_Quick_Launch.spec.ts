import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { testData } from '../utils/testData'

test('TC011 Verify Dashboard Quick Launch is displayed', async ({ page }) => {

    const loginpage = new LoginPage(page);
    const dashboardpage = new DashboardPage(page);

    await loginpage.navigateToLoginPage();

    await loginpage.login(
        testData.username,
        testData.password
    );

    await loginpage.waitForDashboard();

    await dashboardpage.verifyDashboardLoaded();

    await dashboardpage.verifyQuickLaunchDisplayed();
});