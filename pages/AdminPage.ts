import { Page, Locator, expect } from '@playwright/test'

export class AdminPage {
    readonly page: Page;
    readonly adminMenu: Locator;
    readonly systemUserHeading: Locator;
    readonly addButton: Locator;
    readonly userRoleDropdown: Locator;
    readonly employeeNameInput: Locator;
    readonly statusDropdown: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly saveButton: Locator;
    readonly successToast: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminMenu = page.locator('//span[text()="Admin"]');
        this.systemUserHeading = page.getByRole('heading', {name: 'Admin'});
        this.addButton = page.locator('button:has-text("Add")');
        this.userRoleDropdown = page.locator('.oxd-select-text').first();
        this.employeeNameInput = page.locator('input[placeholder="Type for hints..."]');
        this.statusDropdown = page.locator('.oxd-select-text').nth(1);
        this.usernameInput = page.locator('.oxd-input').nth(1);
        this.passwordInput = page.locator('input[type="password"]').first();
        this.confirmPasswordInput = page.locator('input[type="password"]').nth(1);
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.successToast = page.locator('.oxd-toast');
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

    async verifyAddUserPageLoaded() {
    await expect(this.saveButton).toBeVisible();
    }
}