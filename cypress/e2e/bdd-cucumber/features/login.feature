Feature: Login

Scenario: Login as a guest user
  Given I login as a guest user
  When I see the ad video and get redirected
  Then I should see the main page