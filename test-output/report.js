$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User cliks login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_Login_Page()"
});
formatter.result({
  "duration": 25114679464,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 71544639,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 1305880117,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_cliks_login_button()"
});
formatter.result({
  "duration": 11410055783,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 16308219,
  "status": "passed"
});
});