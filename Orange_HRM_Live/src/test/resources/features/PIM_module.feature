Feature: OrangeHRM Admin Module Feature File

  @addEmployee
  Scenario Outline: TC36_Verify Orange HRM - PIM Module - User Management - Add Employee
    Given User in on PIM Page
    When User navigate to Employee list
    And User click on Add Employee button
    And User enter "<first_name>" and "<last_name>" of Employee
    And User click on save button
    Then Employee "<first_name>" "<last_name>" should be added
    Examples:
    | first_name | last_name |
    | Rahul      | Kumar     |
