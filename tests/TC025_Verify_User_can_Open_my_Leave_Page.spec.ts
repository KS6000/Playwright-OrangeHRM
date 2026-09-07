import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LeavePage } from '../pages/LeavePage';
import { testData } from '../utils/testData';

test('TC025 Verify user can open my leave page', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const leavePage = new LeavePage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        testData.username,
        testData.password
    );

    await loginPage.waitForDashboard();

    await dashboardPage.verifyDashboardLoaded();

    await leavePage.navigateToLeave();

    await leavePage.verifyLeaveListLoaded();

    await leavePage.openAssignLeave();

    await page.waitForTimeout(1000);

    await leavePage.verifyAssignLeavePageLoaded();
});