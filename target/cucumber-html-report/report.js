$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/lokes/eclipse-workspace/CucumberTestFrameWork/src/main/java/Features/createDeals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal Creation",
  "description": "",
  "id": "deal-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM create a new deal scenario",
  "description": "",
  "id": "deal-creation;free-crm-create-a-new-deal-scenario",
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
  "rows": [
    {
      "cells": [
        "lokeshkp",
        "sairam123"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enter deal details",
  "rows": [
    {
      "cells": [
        "Mr",
        "120000",
        "20"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinition.user_is_already_Login_Page()"
});
formatter.result({
  "duration": 12743478941,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 61608965,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 336051438,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 9008658005,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 9011361,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 1993249787,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enter_deal_details(DataTable)"
});
formatter.result({
  "duration": 2268199600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 871720425,
  "status": "passed"
});
});