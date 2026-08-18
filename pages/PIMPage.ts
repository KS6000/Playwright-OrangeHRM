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
    await expect(this.employeeResult).toBeVisible();
    }

}