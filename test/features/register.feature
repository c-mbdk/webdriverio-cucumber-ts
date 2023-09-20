Feature: Form submission

Scenario Outline: Test successful submission of web form
    Given I am on the web form page
    When I enter firstname <firstname> and lastname <lastname>
    And I enter my job title <jobtitle>
    And I select my highest level of education <educationlevel>
    And I select my sex <sex>
    And I select my years of experience <yearsofexp>
    And I enter today's date <datetoday>
    And I click the submit button
    Then I will see the page header "Thanks for submitting your form"

    Examples:
        | firstname | lastname | jobtitle | educationlevel | sex | yearsofexp | datetoday |
        | Jean | Rivers | Marketing Manager | Grad School | Female | 5-9 | 09/18/2023 |