import { Page, Locator, expect } from '@playwright/test'

export class DashboardPage  {
    readonly page: Page;
    readonly dashboardHeading: Locator;
    readonly userDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        this.userDropdown = page.locator('.oxd-userdropdown-tab');

    }

    async verifyDashboardLoaded() {
        await expect(this.dashboardHeading).toHaveText('Dashboard');
    }

    async openUserMenu() {
        await this.userDropdown.click();
    }
}