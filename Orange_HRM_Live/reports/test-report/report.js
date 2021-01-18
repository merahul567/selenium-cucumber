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
  "location": "StepDefinition.navigate()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 24326377100,
=======
  "duration": 11460822999,
>>>>>>> branch 'master' of https://github.com/merahul567/selenium-cucumber.git
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
  "location": "StepDefinition.login(String,String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 11219480900,
=======
  "duration": 10261114100,
>>>>>>> branch 'master' of https://github.com/merahul567/selenium-cucumber.git
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verifySuccessful()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 73902800,
=======
  "duration": 82994001,
>>>>>>> branch 'master' of https://github.com/merahul567/selenium-cucumber.git
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
  "location": "StepDefinition.User_is_in_to_My_Info_Page()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 3713165300,
=======
  "duration": 3466732200,
>>>>>>> branch 'master' of https://github.com/merahul567/selenium-cucumber.git
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicked_on_Edit_button()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1107820300,
=======
  "duration": 1159512501,
>>>>>>> branch 'master' of https://github.com/merahul567/selenium-cucumber.git
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul",
      "offset": 32
    }
  ],
  "location": "StepDefinition.User_changes_the_first_name(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1272424400,
=======
  "duration": 1278707400,
>>>>>>> branch 'master' of https://github.com/merahul567/selenium-cucumber.git
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicked_on_save_button()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 3283382200,
=======
  "duration": 3113265299,
>>>>>>> branch 'master' of https://github.com/merahul567/selenium-cucumber.git
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul",
      "offset": 20
    }
  ],
  "location": "StepDefinition.updated_first_name_should_be_diplayed(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1258334900,
=======
  "duration": 1178678900,
>>>>>>> branch 'master' of https://github.com/merahul567/selenium-cucumber.git
  "status": "passed"
});
});