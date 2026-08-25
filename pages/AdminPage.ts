import { Page, Locator, expect } from '@playwright/test'

export class AdminPage {
    readonly page: Page;
    readonly adminMenu: Locator;
    readonly systemUserHeading: Locator;
    readonly addButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminMenu = page.locator('//span[text()="Admin"]');
        this.systemUserHeading = page.getByRole('heading', {name: 'Admin'});
        this.addButton = page.locator('button:has-text("Add")');

    }

    async openAdminPage() {
        await this.adminMenu.click();
    }

    async navigateToAdmin() {
    await this.adminMenu.click();
    }

    async verifyAdminPageLoaded() {
        await expect(this.systemUserHeading).toBeVisible();
    }

    async clickAddButton() {
        await this.addButton.click();
    }
}