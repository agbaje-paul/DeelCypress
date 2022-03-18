Feature: Create Fixed Contract

    As an individual client
    I want to create a fixed contract

    @Smoke
    Scenario: Check Login
        When I login
        Then I should see dashboard

    @E2E @Regression 
    Scenario: Creating a fixed contract
        When I click on create a contract
        And I click on fixed contract
        And I fill the general information on the create a contract page and continue
        And I fill the payment rate page and continue
        And I fill the define dates page and continue
        And I fill the benefits and extras page and continue
        Then I am redirected to the compliance page
        
    @Regression 
    Scenario: Check that all necessary feilds are required on the creating fixed contract page
        When I click on create a contract
        And I click on fixed contract
        And I fill out the required feilds
        Then The buttion should be enabled

    @Regression 
    Scenario: Check that I can continue without the required feilds
        When I click on create a contract
        And I click on fixed contract
        And I fill out the required feilds and continue on the general info page
        Then The payment details page should be visible






#scenario-