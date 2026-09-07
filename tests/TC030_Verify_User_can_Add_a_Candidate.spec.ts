import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { RecruitmentPage } from '../pages/RecruitmentPage';
import { testData } from '../utils/testData';

test('TC030 Verify user can add a candidate', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashbaordPage = new DashboardPage(page);
    const recruitmentPage = new RecruitmentPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(

        testData.username,
        testData.password
    );

    await loginPage.waitForDashboard();

    await dashbaordPage.verifyDashboardLoaded();

    await recruitmentPage.navigateToRecruitment();

    await page.waitForTimeout(1000);

    await recruitmentPage.verifyRecruitmentPageLoaded();

    await recruitmentPage.openCandidates();

    await page.waitForTimeout(1000);

    await recruitmentPage.verifyCandidatesPageLoaded();

    await recruitmentPage.openAddCandidate();

    await page.waitForTimeout(1000);

    await recruitmentPage.verifyAddCandidatePageLoaded();

    await recruitmentPage.fillCandidateDetails(
    'John',
    'A',
    'Smith',
    'john.smith@test.com',
    '07123456789',
    'Playwright',
    'Automation Candidate'
    );

    await page.waitForTimeout(1000);

    await recruitmentPage.saveCandidate();

    await page.waitForTimeout(2000);

    await recruitmentPage.verifyCandidateAdded();

});