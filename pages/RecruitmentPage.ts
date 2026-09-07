import { expect, Locator, Page } from '@playwright/test';

export class RecruitmentPage {

    readonly page: Page;
    readonly recruitmentMenu: Locator;
    readonly recruitmentHeading: Locator;
    readonly vacanciesButton: Locator;
    readonly vacanciesHeading: Locator;
    readonly candidatesTab: Locator;
    readonly candidatesHeading: Locator;
    readonly addCandidateButton: Locator;
    readonly addCandidateHeading: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly vacancyDropdown: Locator;
    readonly emailInput: Locator;
    readonly contactNumberInput: Locator;
    readonly keywordsInput: Locator;
    readonly notesInput: Locator;
    readonly saveButton: Locator;
    readonly successToast: Locator;

    constructor(page: Page) {
        this.page = page;
        this.recruitmentMenu = page.getByRole('link', { name: 'Recruitment' });
        this.recruitmentHeading = page.getByRole('heading', { name: 'Recruitment' });
        this.vacanciesButton = page.getByText('Vacancies', { exact: true });
        this.vacanciesHeading = page.getByRole('heading', { name: 'Vacancies' });
        this.candidatesTab = page.getByRole('link', { name: 'Candidates' });
        this.candidatesHeading = page.locator('h5.oxd-text--h5');
        this.addCandidateButton = page.getByRole('button', { name: 'Add' });
        this.addCandidateHeading = page.getByRole('heading', {name: 'Add Candidate'});
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.middleNameInput = page.getByPlaceholder('Middle Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.vacancyDropdown = page.locator('.oxd-select-text');
        this.emailInput = page.getByPlaceholder('Type here').nth(0);
        this.contactNumberInput = page.getByPlaceholder('Type here').nth(1);
        this.keywordsInput = page.locator('input[placeholder*="keywords"], input[placeholder*="comma"]');
        this.notesInput = page.locator('textarea');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.successToast = page.locator('.oxd-toast');
    }

    async navigateToRecruitment() {
    await this.recruitmentMenu.click();
    }

    async verifyRecruitmentPageLoaded() {
    await expect(this.recruitmentHeading).toBeVisible();
    }

    async openVacancies() {
    await this.vacanciesButton.click();
    }

    async verifyVacanciesPageLoaded() {
    await expect(this.vacanciesHeading).toBeVisible();
    }

    async openCandidates() {
    await this.candidatesTab.click();
    }

    async verifyCandidatesPageLoaded() {
    await expect(this.candidatesHeading).toHaveText('Candidates');
    }

    async openAddCandidate() {
    await Promise.all([
        this.page.waitForURL(/addCandidate/),
        this.addCandidateButton.click()
    ]);
    }

    async verifyAddCandidatePageLoaded() {
    await expect(this.addCandidateHeading).toHaveText('Add Candidate');
    }

    async fillCandidateDetails(
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    contact: string,
    keywords: string,
    notes: string
) {

    await this.firstNameInput.fill(firstName);
    await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);

    await this.emailInput.fill(email);
    await this.contactNumberInput.fill(contact);

    await this.keywordsInput.fill(keywords);

    await this.notesInput.fill(notes);
    }

    async saveCandidate() {
    await this.saveButton.click();
    }

    async verifyCandidateAdded() {
    await expect(this.successToast).toBeVisible();
    }
}