Feature: Check filter for Dota 2 teams in right section 
  Background:
    Given the user navigates to the main page
  Scenario: Team is present
    When the user clicks on Bet on Esports button
    And the user select Dota 2  
    And enter some team from right section
    Then the user should see the team in right section
  Scenario: Team is absent
    When the user clicks on Bet on Esports button
    And the user select Dota 2  
    And enter some nonvalid team "NonValidTeam"
    Then the user should see a message "Nothing happening here at the moment."