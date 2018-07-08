package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="/Users/lokes/eclipse-workspace/CucumberTestFrameWork/src/main/java/Features/taggingTest.feature",  // The path of feature file location
				glue={"stepDefinitions"},  	// The path of step definition file location
				monochrome = true,			// To display console out put in readable format
				format = {"pretty","junit:junit_xml/cucumber.xml" ,"html:test-output"}, // To  generate different type of reports
				plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json" },  //
				dryRun = false,  // To check mapping is proper b/w feature and step definition file 
				strict = true,   // To check if any step is not defined in step definition file 
				tags = {"@SmokeTest", "~@Regression"})  
public class TestRunner {

}



/* 
 
 		tags = {"@SmokeTest" ~@Regression"}     ----> to execute all tests tagged as smokeTest OR RegressionTest 
 		tags = {"@SmokeTest", "@Regression"}	----> to execute all tests tagged as smokeTest AND RegressionTest
		tags = {"@SmokeTest", "~@Regression"}	----> to ignore any test we can apply tilt symbol 


*/