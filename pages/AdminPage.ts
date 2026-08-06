import { Page, Locator, expect } from '@playwright/test'

export class AdminPage {
    readonly page: Page;
    readonly adminMenu: Locator;
    readonly systemUserHeading: Locator;
    readonly addButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminMenu = page.locator('//span[text()="Admin"]');
        this.systemUserHeading = page.locator('h6');
        this.addButton = page.locator('button:has-text("Add")');

    }

    async openAdminPage() {
        await this.adminMenu.click();
    }

    async verifyAdminPageLoaded() {
        await expect(this.systemUserHeading).toHaveText('Admin');
    }

    async clickAddButton() {
        await this.addButton.click();
    }
}