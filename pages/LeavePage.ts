import { Page, Locator, expect } from '@playwright/test';

export class LeavePage {
    readonly page: Page;
    readonly leaveMenu: Locator;
    readonly leaveHeading: Locator;
    readonly applyButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.leaveMenu = page.locator('//span[text()="Leave"]');
        this.leaveHeading = page.locator('h6');
        this.applyButton = page.locator('button:has-text("Apply")');
    }

    async openLeavePage() {
        await this.leaveMenu.click();
    }

    async verifyLeavePageLoaded() {
        await expect(this.leaveHeading).toHaveText('Leave');
    }

    async clickApplyButton() {
        await this.applyButton.click();
    }
}