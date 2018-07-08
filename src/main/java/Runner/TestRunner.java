package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="/Users/lokes/eclipse-workspace/CucumberTestFrameWork/src/main/java/Features/dealsMap.feature", 
				glue={"stepDefinitions"},
				monochrome = true,
				format = {"pretty","junit:junit_xml/cucumber.xml"},
				plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json" },
				dryRun = false,
				strict = true)
public class TestRunner {

}