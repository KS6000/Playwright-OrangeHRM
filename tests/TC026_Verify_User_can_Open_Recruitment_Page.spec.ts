import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { RecruitmentPage } from '../pages/RecruitmentPage';
import { testData } from '../utils/testData';

test('TC026 Verify user can open recruitment page', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const recruitmentPage = new RecruitmentPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        testData.username,
        testData.password
    );

    await loginPage.waitForDashboard();

    await dashboardPage.verifyDashboardLoaded();

    await recruitmentPage.navigateToRecruitment();

    await page.waitForTimeout(1000);

    await recruitmentPage.verifyRecruitmentPageLoaded();
});
