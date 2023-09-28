Feature: Main page functionalities

Scenario: Now on TV slider
  Given I login as a guest user
  When I see the now on TV slider
  Then I should see title, hour, play button, access button and a progress bar
  And I should see at least 5 assets
  And I should be able to see more slides using the control arrows


Scenario: Event detail
    Given I login as a guest user
    When I access to an event detail page
    Then I should see title, channel, description, score and age range
    And I should see available controls