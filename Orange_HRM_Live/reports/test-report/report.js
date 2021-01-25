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
  "duration": 15062734600,
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
  "duration": 10262242100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifySuccessful()"
});
formatter.result({
  "duration": 118277500,
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
  "duration": 4252152200,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.User_clicked_on_Edit_button()"
});
formatter.result({
  "duration": 1139508600,
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
  "duration": 1295367700,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.User_clicked_on_save_button()"
});
formatter.result({
  "duration": 3702638300,
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
  "duration": 1255473200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "TC08_Check the upload of a PNG format image",
  "description": "",
  "id": "orangehrm-feature-file;tc08-check-the-upload-of-a-png-format-image",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@changeDetails"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User click on change photo",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User select a png photo to upload",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on upload button",
  "keyword": "And "
});
formatter.match({
  "location": "MyInfoStepDefinition.User_clicked_on_change_photo()"
});
formatter.result({
  "duration": 2413778400,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.User_clicked_on_Choose_File()"
});
formatter.result({
  "duration": 1154673400,
  "status": "passed"
});
formatter.match({
  "location": "MyInfoStepDefinition.User_clicked_on_upload_button()"
});
formatter.result({
  "duration": 7713357300,
  "status": "passed"
});
formatter.uri("PIM_module.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM Admin Module Feature File",
  "description": "",
  "id": "orangehrm-admin-module-feature-file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "TC36_Verify Orange HRM - PIM Module - User Management - Add Employee",
  "description": "",
  "id": "orangehrm-admin-module-feature-file;tc36-verify-orange-hrm---pim-module---user-management---add-employee",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@addEmployee"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User in on PIM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigate to Employee list",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Add Employee button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter \"\u003cfirst_name\u003e\" and \"\u003clast_name\u003e\" of Employee",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Employee \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" should be added",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "orangehrm-admin-module-feature-file;tc36-verify-orange-hrm---pim-module---user-management---add-employee;",
  "rows": [
    {
      "cells": [
        "first_name",
        "last_name"
      ],
      "line": 12,
      "id": "orangehrm-admin-module-feature-file;tc36-verify-orange-hrm---pim-module---user-management---add-employee;;1"
    },
    {
      "cells": [
        "Rahul",
        "Kumar"
      ],
      "line": 13,
      "id": "orangehrm-admin-module-feature-file;tc36-verify-orange-hrm---pim-module---user-management---add-employee;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "TC36_Verify Orange HRM - PIM Module - User Management - Add Employee",
  "description": "",
  "id": "orangehrm-admin-module-feature-file;tc36-verify-orange-hrm---pim-module---user-management---add-employee;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@addEmployee"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User in on PIM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigate to Employee list",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Add Employee button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter \"Rahul\" and \"Kumar\" of Employee",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Employee \"Rahul\" \"Kumar\" should be added",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PIMStepDefinition.User_in_on_PIM_Page()"
});
formatter.result({
  "duration": 1232005700,
  "status": "passed"
});
formatter.match({
  "location": "PIMStepDefinition.User_navigate_to_Employee_list()"
});
formatter.result({
  "duration": 4312789800,
  "status": "passed"
});
formatter.match({
  "location": "PIMStepDefinition.User_click_on_Add_Employee_button()"
});
formatter.result({
  "duration": 3074780500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul",
      "offset": 12
    },
    {
      "val": "Kumar",
      "offset": 24
    }
  ],
  "location": "PIMStepDefinition.User_enter_employee_details(String,String)"
});
formatter.result({
  "duration": 2392828200,
  "status": "passed"
});
formatter.match({
  "location": "PIMStepDefinition.User_click_on_save_button()"
});
formatter.result({
  "duration": 4233310800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul",
      "offset": 10
    },
    {
      "val": "Kumar",
      "offset": 18
    }
  ],
  "location": "PIMStepDefinition.Employee_should_be_added(String,String)"
});
formatter.result({
  "duration": 132668900,
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
  "duration": 1202254200,
  "status": "passed"
});
formatter.match({
  "location": "AdminStepDefinition.User_navigate_to_User_Management_section()"
});
formatter.result({
  "duration": 3657058300,
  "status": "passed"
});
formatter.match({
  "location": "AdminStepDefinition.User_click_on_Add_User_button()"
});
formatter.result({
  "duration": 2233289600,
  "status": "passed"
});
formatter.match({
  "location": "AdminStepDefinition.User_enter_Employee_details()"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "location": "AdminStepDefinition.User_click_on_Save_button()"
});
formatter.result({
  "duration": 161500,
  "status": "passed"
});
});