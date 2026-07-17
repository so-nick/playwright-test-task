import { expect, Locator, Page } from '@playwright/test';

export class EsportsPage {

    readonly page: Page;
    readonly dotaLabel: Locator;
    readonly searchIcon: Locator;
    readonly searchInput: Locator;
    readonly nothingFindResult: Locator;
    //  readonly team: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dotaLabel = page.locator('xpath=//*[@id="matches-page-size-container"]//*[@role="region"]//*[contains(text(), "Dota")]').first();
        this.searchIcon = page.locator('.thp-search__search-icon-container--primary-theme');
        this.searchInput = page.getByPlaceholder('Search matches, teams or events');
        //    this.team = page.locator('[data-testid^="match-list-row-"] a.relative.isolate >> div.text-gray-light').first();
        this.nothingFindResult = page.getByText('Nothing happening here at the moment.');
    }

    /**
     * @description Select Dota 2 tab
     */
    async selectDotaTwo(): Promise<void> {
        await this.dotaLabel.click();
        this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * @description Get teams names from right section
     * @returns {string[]} 
     */
    async getTeam(): Promise<string> {
        const team = await this.page
            .locator('[data-testid^="match-list-row-"] a div.font-bold')
            .first()
            .innerText();
        
        console.log(team)


        const value = team.trim();
        return value ?? '';
    }

    /**
     * @description Enter team to search
     */
    async enterTeam(team: string): Promise<void> {
        if (!(await this.searchInput.isVisible())) {
            await this.searchIcon.click();
        }
        await this.searchInput.fill(team);
    }

    /**
     * @description Enter a random teams name to search 
     */
    async enterTeamToSearch(): Promise<string> {
        const team = await this.getTeam();
        if (!(await this.searchInput.isVisible())) {
            await this.searchIcon.click();
        }
        if (team.length === 0) {
            throw new Error('No team names were found');
        }

        await this.enterTeam(team);

        return team;

    }

    /**
     * @description Check that teams is present in right section
     * @param teamName Team name
     * @returns {boolean}
     */
    async checkTeamsNames(teamName: string): Promise<void> {
        await expect(
            this.page.locator('[data-testid^="match-list-row"]').first()
        ).toContainText(teamName);
    }

    /**
     * @description Check that nothing found is present.
     * @returns {boolean}
     */
    async isPresentNothingFound(): Promise<boolean> {
        await this.nothingFindResult.waitFor({ state: 'visible' });
        return await this.nothingFindResult.isVisible();
    }
}