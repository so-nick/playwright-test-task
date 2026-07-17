import { expect, Locator, Page } from '@playwright/test';
import { EsportsPage } from './esportsPage';

export class MainPage {

    readonly page: Page;
    readonly logInButton: Locator;
    readonly betOnEsportButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logInButton = page.getByRole('button', { name: 'Log in' });
        this.betOnEsportButton = page.getByText('Bet on Esports');
        
    }

    /**
     * @description Navigate to main page.
     */
    async navigateToPage(): Promise<void> {
        await this.page.goto(`https://thunderpick.io/`);
        await expect(this.logInButton).toBeVisible();
    }

    /**
     * @description Open Bet on Esports page
     */
    async openBetOnEsport(): Promise<void> {
        await this.betOnEsportButton.click();
        const esportsPage = new EsportsPage(this.page);
        await expect(esportsPage.dotaLabel).toBeVisible();

    }


}