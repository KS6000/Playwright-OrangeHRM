import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PIMPage } from '../pages/PIMPage';
import { testData } from '../utils/testData';

test('TC010 Verify user can delete employee', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const pimPage = new PIMPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        testData.username,
        testData.password
    );

    await loginPage.waitForDashboard();

    await dashboardPage.verifyDashboardLoaded();

    await pimPage.navigateToPIM();

    await pimPage.verifyPIMPageLoaded();

    await pimPage.searchEmployee('Alexa Rao');

    await pimPage.verifyEmployeeSearchResults();

    await pimPage.clickDeleteEmployee();

    await pimPage.confirmDeleteEmployee();

    await pimPage.verifyEmployeeDeleted();
});