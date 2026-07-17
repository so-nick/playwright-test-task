import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures'
import { expect } from 'playwright/test';


const { Given, When, Then } = createBdd(test);
let team = '';


Given('the user navigates to the main page', async ({ mainPage }) => {

    await mainPage.navigateToPage();
})

When('the user clicks on Bet on Esports button', async ({ mainPage }) => {

    await mainPage.openBetOnEsport();

})

When('the user select Dota 2', async ({ esportsPage: esportsPage }) => {


    await esportsPage.selectDotaTwo();

})

When('enter some team from right section', async ({ esportsPage: esportsPage }) => {

    team = await esportsPage.enterTeamToSearch();

})


Then('the user should see the team in right section', async ({ esportsPage: esportsPage }) => {

    await esportsPage.checkTeamsNames(team);

})


When('enter some nonvalid team {string}', async ({ esportsPage: esportsPage }, nonvalidTeam) => {

    await esportsPage.enterTeam(nonvalidTeam);

}) 

Then('the user should see a message "Nothing happening here at the moment."', async ({ esportsPage: esportsPage }) => {

    expect(await esportsPage.isPresentNothingFound()).toBeTruthy();

}) 