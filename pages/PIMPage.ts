import { Page, Locator, expect } from '@playwright/test';

export class PIMPage {
    readonly page: Page;
    readonly PIMmenu: Locator;
    readonly pimHeading: Locator;
    readonly employeeInformationHeading: Locator;
    readonly addEmployeeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.PIMmenu = page.getByText('PIM');
        this.pimHeading = page.getByRole('heading', { name: 'PIM' });
        this.employeeInformationHeading = page.locator('h6');
        this.addEmployeeButton = page.locator('button:has-text("Add")');

    }

    async navigateToPIM() {
    await this.PIMmenu.click();
    }

    async verifyPIMPageLoaded() {
        await expect(this.employeeInformationHeading).toHaveText('PIM');
    }

    async clickAddEmployeeButton() {
        await this.addEmployeeButton.click();
    }

}