import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PIMPage } from '../pages/PIMPage';
import { testData } from '../utils/testData';

test('TC009 Verify user can edit employee', async ({ page }) => {

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

    await pimPage.searchEmployee('Jane Brown');

    await pimPage.verifyEmployeeSearchResults();

    await pimPage.clickEditEmployee();

    await pimPage.verifyPersonalDetailsPageLoaded();

    await pimPage.updateMiddleName('Automation');

    await pimPage.clickSaveButton();

    await pimPage.verifyEmployeeUpdated();

});