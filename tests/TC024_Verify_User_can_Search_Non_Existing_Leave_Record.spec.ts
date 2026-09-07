import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LeavePage } from '../pages/LeavePage';
import { testData } from '../utils/testData';

test('TC024 Verify user can search non existing leave record', async ({ page }) => {

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

    await leavePage.searchLeaveRecord('ZZZ_Test_User_999');

    await leavePage.verifyNoLeaveRecordsFound();
});