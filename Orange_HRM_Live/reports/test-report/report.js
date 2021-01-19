$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("orange_hrm.feature");
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
  "line": 6,
  "name": "navigate to Orange HRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user logged in using username as \"Admin\" and password as \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.navigate()"
});
formatter.result({
  "duration": 33552737700,
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
  "duration": 21930832400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifySuccessful()"
});
formatter.result({
  "duration": 89290900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "TC05_Personal details- modification with valid values- \"First Name\"",
  "description": "",
  "id": "orangehrm-feature-file;tc05-personal-details--modification-with-valid-values--\"first-name\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@changeDetails"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is in to My Info Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User clicked on Edit button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User changes the first name to \"\u003cfirst_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicked on save button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "updated first name \"\u003cfirst_name\u003e\" should be diplayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "orangehrm-feature-file;tc05-personal-details--modification-with-valid-values--\"first-name\";",
  "rows": [
    {
      "cells": [
        "first_name"
      ],
      "line": 19,
      "id": "orangehrm-feature-file;tc05-personal-details--modification-with-valid-values--\"first-name\";;1"
    },
    {
      "cells": [
        "Rahul"
      ],
      "line": 20,
      "id": "orangehrm-feature-file;tc05-personal-details--modification-with-valid-values--\"first-name\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "TC05_Personal details- modification with valid values- \"First Name\"",
  "description": "",
  "id": "orangehrm-feature-file;tc05-personal-details--modification-with-valid-values--\"first-name\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@changeDetails"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is in to My Info Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User clicked on Edit button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User changes the first name to \"Rahul\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicked on save button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "updated first name \"Rahul\" should be diplayed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ChangeDetailsStepDefinition.User_is_in_to_My_Info_Page()"
});
formatter.result({
  "duration": 15466089400,
  "status": "passed"
});
formatter.match({
  "location": "ChangeDetailsStepDefinition.User_clicked_on_Edit_button()"
});
formatter.result({
  "duration": 1173511300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul",
      "offset": 32
    }
  ],
  "location": "ChangeDetailsStepDefinition.User_changes_the_first_name(String)"
});
formatter.result({
  "duration": 1267196500,
  "status": "passed"
});
formatter.match({
  "location": "ChangeDetailsStepDefinition.User_clicked_on_save_button()"
});
formatter.result({
  "duration": 6846146200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul",
      "offset": 20
    }
  ],
  "location": "ChangeDetailsStepDefinition.updated_first_name_should_be_diplayed(String)"
});
formatter.result({
  "duration": 1168954000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "TC08_Check the upload of a PNG format image",
  "description": "",
  "id": "orangehrm-feature-file;tc08-check-the-upload-of-a-png-format-image",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@changeDetails"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User click on change photo",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User select a png photo to upload",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on upload button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Photo should be uploaded",
  "keyword": "Then "
});
formatter.match({
  "location": "ChangeDetailsStepDefinition.User_clicked_on_change_photo()"
});
formatter.result({
  "duration": 6119874200,
  "status": "passed"
});
formatter.match({
  "location": "ChangeDetailsStepDefinition.User_clicked_on_Choose_File()"
});
formatter.result({
  "duration": 1121352300,
  "status": "passed"
});
formatter.match({
  "location": "ChangeDetailsStepDefinition.User_clicked_on_upload_button()"
});
formatter.result({
  "duration": 30102199500,
  "status": "passed"
});
formatter.match({
  "location": "ChangeDetailsStepDefinition.photo_should_be_uploaded()"
});
formatter.result({
  "duration": 75749100,
  "status": "passed"
});
});