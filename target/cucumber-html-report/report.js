$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/lokes/eclipse-workspace/CucumberTestFrameWork/src/main/java/Features/taggingTest.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM test feature",
  "description": "",
  "id": "free-crm-test-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 73,
  "name": "Creating a new Forms in Free CRM",
  "description": "",
  "id": "free-crm-test-feature;creating-a-new-forms-in-free-crm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "Create New Forms",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingTestStepDefinition.create_New_Forms()"
});
formatter.result({
  "duration": 189266927,
  "status": "passed"
});
});