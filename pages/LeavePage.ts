import { Page, Locator, expect } from '@playwright/test';

export class LeavePage {
    readonly page: Page;
    readonly leaveMenu: Locator;
    readonly leaveHeading: Locator;
    readonly applyButton: Locator;
    readonly leaveTypeDropdown: Locator;
    readonly fromDateInput: Locator;
    readonly toDateInput: Locator;
    readonly commentInput: Locator;
    readonly submitButton: Locator;
    readonly applyMenu: Locator;
    readonly loader: Locator;
    readonly applyLeaveHeading: Locator;


    constructor(page: Page) {
        this.page = page;
        this.leaveMenu = page.locator('//span[text()="Leave"]');
        this.leaveHeading = page.locator('h6').filter({ hasText: 'Leave' });
        this.applyButton = page.locator('button:has-text("Apply")');
        this.leaveMenu = page.locator('a[href*="leave"]');
        this.leaveTypeDropdown = page.locator('.oxd-select-text');
        this.leaveTypeDropdown = page.locator('.oxd-select-text');
        this.fromDateInput = page.locator('(//input[@placeholder="yyyy-dd-mm"])[1]');
        this.toDateInput = page.locator('(//input[@placeholder="yyyy-dd-mm"])[2]');
        this.commentInput = page.locator('textarea');
        this.submitButton = page.getByRole('button', { name: 'Apply' });
        this.applyMenu = page.locator('a:has-text("Apply")');
        this.loader = page.locator('.oxd-form-loader');
        this.applyLeaveHeading = page.getByRole('heading', {name: 'Apply Leave'});
    }

    async openLeavePage() {
        await this.leaveMenu.click();
    }

    async verifyLeavePageLoaded() {
        await expect(this.leaveHeading).toHaveText('Leave');
    }

    async verifyApplyLeaveLoaded() {
    await expect(this.applyLeaveHeading).toContainText('Apply Leave');
    }

    async clickApplyButton() {
        await this.applyButton.click();
    }

    async navigateToLeave() {
    await this.leaveMenu.click();
    }

    async selectLeaveType() {
    await this.leaveTypeDropdown.click();
    await this.page.getByText('CAN - Personal').click();
    }

    async enterLeaveDates(fromDate: string, toDate: string) {
    await this.fromDateInput.fill(fromDate);
    await this.toDateInput.fill(toDate);
    }

    async enterComment(comment: string) {
    await this.commentInput.fill(comment);
    }

    async submitLeaveApplication() {
    await this.submitButton.click();
    }

    async navigateToApply() {
    await this.applyMenu.click();
    }

    async waitForLoaderToDisappear() {
    await this.loader.waitFor({ state: 'hidden' });
    }

    async verifyApplyLeavePageLoaded() {
    await expect(this.applyLeaveHeading).toHaveText('Apply Leave');
    }
}