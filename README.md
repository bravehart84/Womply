# Womply

I built a small suite of just 4 test cases for  http://www.Womply.com/ using Webdriver and Mocha JS. Test class is called 'testing.js' in the 'tests' folder. 
It makes use of methods from our page classes to execute the steps. You can just run it using 'mocha testing.js'
I added long timeouts to my test code because my current computer has been freezing lately, resulting in timeout errors.

I also added a mochawesome report 'WomplyTestReport.html' showing test results. You can view in any browser.

My tests are as follows:
 

                                                 TESTS

1. Test the 'TRY IT OUT' link. Click the 'TRY IT OUT' link and verify that the user is navigated to the correct Demo page URL and that the contents of that page are visible to the user.

2. Verify the 'PRODUCTS' link. Navigate to the 'Products' page (users may want to find out more about Womplys products), by clicking on the Mobile Navigation Toggle, then clicking the 'Products' link. Also, verify that the user is navigated to the correct Products page URL and that the contents of the page are visible to the user.

3. Verify the 'WORK AT WOMPLY' link (for users that may want to search for open job positions). Click on the Mobile Navigation Toggle, clicking the 'JOIN US' link, then click the 'WORK AT WOMPLY' link. Verify that the user is navigated to the correct 'JOBS' page URL and that the contents of the page are displayed to the user.

4. Test the embedded video on the homepage. Click on the watch video link to play the video and verify that the video starts to play on time.

Run testing.js as a mocha test and it will bring up a chrome browser and execute the tests.


