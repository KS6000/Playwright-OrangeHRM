import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AdminPage } from '../pages/AdminPage';
import { testData } from '../utils/testData';

test('TC020 Verify user can reset system user search', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const adminPage = new AdminPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        testData.username,
        testData.password
    );

    await loginPage.waitForDashboard();

    await dashboardPage.verifyDashboardLoaded();

    await adminPage.navigateToAdmin();

    await adminPage.verifyAdminPageLoaded();

    await adminPage.searchEmployeeName('KVCRDP123');

    await adminPage.clickResetButton();

    await adminPage.verifySearchFieldsCleared();
});