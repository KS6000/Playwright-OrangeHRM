import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AdminPage } from '../pages/AdminPage';
import { testData } from '../utils/testData';

test('TC019 Verify user can edit system user', async ({ page }) => {

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

    await adminPage.searchSystemUser('Admin');

    await adminPage.verifySystemUserSearchResults();

    await adminPage.clickEditButton();

    await adminPage.editUsername('Admin12345');

    await adminPage.clickSaveButton();

    await adminPage.verifySuccessToast();
});