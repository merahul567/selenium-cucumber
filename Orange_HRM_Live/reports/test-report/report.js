$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("admin_module.feature");
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
      "name": "@userManagementPage"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("orange_hrm.feature");
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
  "duration": 12402707600,
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
  "duration": 8606218900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifySuccessful()"
});
formatter.result({
  "duration": 94330200,
  "status": "passed"
});
});