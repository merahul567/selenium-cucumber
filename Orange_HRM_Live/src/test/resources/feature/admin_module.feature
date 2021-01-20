Feature: OrangeHRM Admin Module Feature File

  @userManagementPage
  Scenario: TC20_Verify Orange HRM - Admin Module - User Management - Add Feature
    Given User is on Admin Page
    When User navigate to User Management section
    And User click on Add User button
    And User enter Employee details
    And User click on Save button
