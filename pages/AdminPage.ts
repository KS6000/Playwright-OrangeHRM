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
    readonly searchButton: Locator;
    readonly userTable: Locator;
    readonly editButton: Locator;
    readonly deleteButton: Locator;
    readonly confirmDeleteButton: Locator;
    readonly employeeNameSearchInput: Locator;
    readonly resetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminMenu = page.getByRole('link', { name: 'Admin' });
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
        this.usernameInput = page.locator('input.oxd-input').nth(1);
        this.searchButton = page.locator('button:has-text("Search")');
        this.userTable = page.locator('.oxd-table-body');
        this.editButton = page.locator('button i.bi-pencil-fill').first();
        this.deleteButton = page.locator('button:has(i.bi-trash)').first();
        this.confirmDeleteButton = page.getByRole('button', { name: 'Yes, Delete' });
        this.employeeNameSearchInput = page.locator('input[placeholder="Type for hints..."]');
        this.resetButton = page.getByRole('button', { name: 'Reset' });
    }

    async openAdminPage() {
        await this.adminMenu.click();
    }

    async navigateToAdmin() {
    await this.adminMenu.click();
    await this.page.waitForURL(/admin/);
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

    async searchSystemUser(username: string) {
    await this.usernameInput.fill(username);
    await this.searchButton.click();
    }

    async verifySystemUserSearchResults() {
    await expect(this.userTable).toBeVisible();
    }

    async clickEditButton() {
    await this.editButton.click();
    }

    async updateUsername(username: string) {
    await this.usernameInput.fill(username);
    }

    async clickSaveButton() {
    await this.saveButton.click();
    }

    async verifyUserUpdated() {
    await expect(this.successToast).toBeVisible();
    }

    async editUsername(newUsername: string) {
    await this.usernameInput.clear();
    await this.usernameInput.fill(newUsername);
    }

    async verifySuccessToast() {
    await expect(this.successToast).toBeVisible();
    }

    async clickDeleteButton() {
    await this.deleteButton.waitFor({
        state: 'visible'
    });

    await this.deleteButton.click({
        force: true
    });
    }

    async confirmDelete() {
    await this.confirmDeleteButton.click();
    }

    async searchEmployeeName(employeeName: string) {
    await this.employeeNameInput.fill(employeeName);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.searchButton.click();
    }

    async clickResetButton() {
    await this.resetButton.click();
    }

    async verifySearchFieldsCleared() {
    await expect(this.employeeNameInput).toHaveValue('');
    }

}