import { Page, Locator, expect } from '@playwright/test';

export class PIMPage {
    readonly page: Page;
    readonly PIMmenu: Locator;
    readonly employeeInformationHeading: Locator;
    readonly addEmployeeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.PIMmenu = page.locator('//span[text()="PIM"]');
        this.employeeInformationHeading = page.locator('h6');
        this.addEmployeeButton = page.locator('button:has-text("Add")');

    }

    async openPIMPage() {
        await this.PIMmenu.click();
    }

    async verifyPIMPageLoaded() {
        await expect(this.employeeInformationHeading).toHaveText('PIM');
    }

    async clickAddEmployeeButton() {
        await this.addEmployeeButton.click();
    }
}