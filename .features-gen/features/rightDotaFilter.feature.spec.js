// Generated from: features\rightDotaFilter.feature
import { test } from "../../fixtures/fixtures";

test.describe('Check filter for Dota 2 teams in right section', () => {

  test.beforeEach('Background', async ({ Given, mainPage }, testInfo) => { if (testInfo.error) return;
    await Given('the user navigates to the main page', null, { mainPage }); 
  });
  
  test('Team is present', async ({ When, Then, And, esportsPage, mainPage }) => { 
    await When('the user clicks on Bet on Esports button', null, { mainPage }); 
    await And('the user select Dota 2', null, { esportsPage }); 
    await And('enter some team from right section', null, { esportsPage }); 
    await Then('the user should see the team in right section', null, { esportsPage }); 
  });

  test('Team is absent', async ({ When, Then, And, esportsPage, mainPage }) => { 
    await When('the user clicks on Bet on Esports button', null, { mainPage }); 
    await And('the user select Dota 2', null, { esportsPage }); 
    await And('enter some nonvalid team "NonValidTeam"', null, { esportsPage }); 
    await Then('the user should see a message "Nothing happening here at the moment."', null, { esportsPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\rightDotaFilter.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given the user navigates to the main page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user clicks on Bet on Esports button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user select Dota 2","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And enter some team from right section","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the user should see the team in right section","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given the user navigates to the main page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user clicks on Bet on Esports button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And the user select Dota 2","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And enter some nonvalid team \"NonValidTeam\"","stepMatchArguments":[{"group":{"start":25,"value":"\"NonValidTeam\"","children":[{"start":26,"value":"NonValidTeam","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should see a message \"Nothing happening here at the moment.\"","stepMatchArguments":[]}]},
]; // bdd-data-end