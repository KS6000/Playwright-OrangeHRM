import { Page, Locator, expect } from '@playwright/test';

export class PIMPage {
    readonly page: Page;
    readonly PIMmenu: Locator;
    readonly pimHeading: Locator;
    readonly employeeInformationHeading: Locator;
    readonly addEmployeeButton: Locator;
    readonly addEmployeeHeading: Locator;
    readonly employeeNameInput: Locator;
    readonly searchButton: Locator;
    readonly employeeResult: Locator;
    readonly editButton: Locator;
    readonly middleNameInput: Locator;
    readonly saveButton: Locator;
    readonly personalDetailsHeading: Locator;
    readonly successToast: Locator;
    readonly deleteButton: Locator;
    readonly confirmDeleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.PIMmenu = page.getByText('PIM');
        this.pimHeading = page.getByRole('heading', { name: 'PIM' });
        this.employeeInformationHeading = page.getByRole('heading', {name: 'PIM'});
        this.addEmployeeButton = page.locator('button:has-text("Add")');
        this.addEmployeeHeading = page.getByRole('heading', { name: 'Add Employee' });
        this.employeeNameInput = page.locator('input').nth(1);
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.employeeResult = page.locator('.oxd-table-body');
        this.editButton = page.locator('.oxd-icon.bi-pencil-fill').first();
        this.personalDetailsHeading = page.getByRole('heading', {name: 'Personal Details'});
        this.middleNameInput = page.locator('input').nth(2);
        this.saveButton = page.getByRole('button', { name: 'Save' }).first();
        this.successToast = page.locator('.oxd-toast');
        this.deleteButton = page.locator('.oxd-icon.bi-trash').first();
        this.confirmDeleteButton = page.getByRole('button', { name: 'Yes, Delete' });
        this.successToast = page.locator('.oxd-toast');

    }

    async navigateToPIM() {
    await this.PIMmenu.click();
    }

    async verifyPIMPageLoaded() {
    await expect(this.employeeInformationHeading).toBeVisible({
        timeout: 10000
    });

    await expect(this.employeeInformationHeading).toHaveText('PIM');
    }

    async clickAddEmployeeButton() {
        await this.addEmployeeButton.click();
    }

    async verifyAddEmployeePageLoaded() {
    await expect(this.addEmployeeHeading).toHaveText('Add Employee');
    }

    async searchEmployee(employeeName: string) {
    await this.employeeNameInput.fill(employeeName);
    await this.searchButton.click();
}

    async verifyEmployeeSearchResults() {
    await expect(this.employeeResult).toBeVisible({ timeout: 10000 });
    }

    async clickEditEmployee() {
    await this.editButton.click();
    }

    async verifyPersonalDetailsPageLoaded() {
    await expect(this.personalDetailsHeading).toBeVisible();
    }

    async updateMiddleName(name: string) {
    await this.middleNameInput.fill(name);
    }

    async clickSaveButton() {
    await this.saveButton.click();
    }

    async verifyEmployeeUpdated() {
    await expect(this.successToast).toBeVisible();
    }

    async clickDeleteEmployee() {
    await this.deleteButton.click();
    }

    async confirmDeleteEmployee() {
    await this.confirmDeleteButton.click();
    }

    async verifyEmployeeDeleted() {
    await expect(this.successToast).toBeVisible();
    }

}