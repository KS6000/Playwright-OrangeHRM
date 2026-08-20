import { Page, Locator, expect } from '@playwright/test'

export class DashboardPage  {
    readonly page: Page;
    readonly dashboardHeading: Locator;
    readonly userDropdown: Locator;
    readonly quickLaunchHeading: Locator;
    readonly assignLeaveQuickLaunch: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        this.userDropdown = page.locator('.oxd-userdropdown-tab');
        this.quickLaunchHeading = page.getByText('Quick Launch');
        this.assignLeaveQuickLaunch = page.getByText('Assign Leave');

    }

    async verifyDashboardLoaded() {
        await expect(this.dashboardHeading).toHaveText('Dashboard');
    }

    async openUserMenu() {
        await this.userDropdown.click();
    }

    async logout() {
    await this.userDropdown.click();
    await this.page.getByRole('menuitem', { name: 'Logout' }).click();
    }

    async verifyQuickLaunchDisplayed() {
    await expect(this.quickLaunchHeading).toBeVisible();
    }

    async verifyAssignLeaveQuickLaunchDisplayed() {
    await expect(this.assignLeaveQuickLaunch).toBeVisible();
    }
}