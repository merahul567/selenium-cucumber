$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Orange_hrm.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM Feature File",
  "description": "",
  "id": "orangehrm-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "TC01_Successful Employee login to OrangeHRM portal",
  "description": "",
  "id": "orangehrm-feature-file;tc01-successful-employee-login-to-orangehrm-portal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@loginPage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigate to Orange HRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user logged in using username as \"Admin\" and password as \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.navigate()"
});
formatter.result({
  "duration": 10830519600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 34
    },
    {
      "val": "admin123",
      "offset": 58
    }
  ],
  "location": "LoginStepDefinition.login(String,String)"
});
formatter.result({
  "duration": 9924227600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifySuccessful()"
});
formatter.result({
  "duration": 43573300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "TC05_Personal details- modification with valid values- \"First Name\"",
  "description": "",
  "id": "orangehrm-feature-file;tc05-personal-details--modification-with-valid-values--\"first-name\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@changeDetails"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is in to My Info Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicked on Edit button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User changes the first name to \"\u003cfirst_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicked on save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "updated first name \"\u003cfirst_name\u003e\" should be diplayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "orangehrm-feature-file;tc05-personal-details--modification-with-valid-values--\"first-name\";",
  "rows": [
    {
      "cells": [
        "first_name"
      ],
      "line": 18,
      "id": "orangehrm-feature-file;tc05-personal-details--modification-with-valid-values--\"first-name\";;1"
    },
    {
      "cells": [
        "Rahul"
      ],
      "line": 19,
      "id": "orangehrm-feature-file;tc05-personal-details--modification-with-valid-values--\"first-name\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "TC05_Personal details- modification with valid values- \"First Name\"",
  "description": "",
  "id": "orangehrm-feature-file;tc05-personal-details--modification-with-valid-values--\"first-name\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@changeDetails"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is in to My Info Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicked on Edit button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User changes the first name to \"Rahul\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicked on save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "updated first name \"Rahul\" should be diplayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyInfoStepDefinition.User_is_in_to_My_Info_Page()"
});
formatter.result({
  "duration": 4346254600,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.User_clicked_on_Edit_button()"
});
formatter.result({
  "duration": 1089862200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul",
      "offset": 32
    }
  ],
  "location": "MyInfoStepDefinition.User_changes_the_first_name(String)"
});
formatter.result({
  "duration": 1145299200,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.User_clicked_on_save_button()"
});
formatter.result({
  "duration": 3247745600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul",
      "offset": 20
    }
  ],
  "location": "MyInfoStepDefinition.updated_first_name_should_be_diplayed(String)"
});
formatter.result({
  "duration": 1102316300,
  "status": "passed"
});
formatter.uri("admin_module.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM Admin Module Feature File",
  "description": "",
  "id": "orangehrm-admin-module-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "TC20_Verify Orange HRM - Admin Module - User Management - Add Feature",
  "description": "",
  "id": "orangehrm-admin-module-feature-file;tc20-verify-orange-hrm---admin-module---user-management---add-feature",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@userManagement"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Admin Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigate to User Management section",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Add User button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter Employee details",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "AdminStepDefinition.User_is_on_Admin_Page()"
});
formatter.result({
  "duration": 1172218000,
  "status": "passed"
});
formatter.match({
  "location": "AdminStepDefinition.User_navigate_to_User_Management_section()"
});
formatter.result({
  "duration": 4395465700,
  "status": "passed"
});
formatter.match({
  "location": "AdminStepDefinition.User_click_on_Add_User_button()"
});
formatter.result({
  "duration": 2288330700,
  "status": "passed"
});
formatter.match({
  "location": "AdminStepDefinition.User_enter_Employee_details()"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.match({
  "location": "AdminStepDefinition.User_click_on_Save_button()"
});
formatter.result({
  "duration": 147200,
  "status": "passed"
});
});