$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/lokes/eclipse-workspace/CucumberTestFrameWork/src/main/java/Features/dealsMap.feature");
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
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "lokeshkp",
        "sairam123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enter deal details",
  "rows": [
    {
      "cells": [
        "Title",
        "Amount",
        "Quantity"
      ],
      "line": 14
    },
    {
      "cells": [
        "Mr.Lokesh",
        "120000",
        "20"
      ],
      "line": 15
    },
    {
      "cells": [
        "Mr.JanakiRamayya",
        "220000",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "Mr.Dileep",
        "320000",
        "21"
      ],
      "line": 17
    },
    {
      "cells": [
        "Mr.Sai Karthik",
        "420000",
        "34"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsMapStepDefinition.user_is_already_Login_Page()"
});
formatter.result({
  "duration": 11800463900,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 61234943,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 319873295,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 7935719397,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 7362506,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 2488991293,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.user_enter_deal_details(DataTable)"
});
formatter.result({
  "duration": 18298618512,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 1322425797,
  "status": "passed"
});
});