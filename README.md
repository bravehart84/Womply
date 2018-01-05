# Womply
Hello,

Just a few details what I did. I built a small suite of 4 test cases for your site at http://www.Womply.com/. I used Webdriver and Mocha JS. I used the Page Object pattern using a Base Page, and other pages like the 'RequestDemo_page', 'Products' page and 'Jobs' pages inheriting from the Basepage. Our test class is called 'testing.js' in the 'tests' folder. It makes use of methods from our page classes to execute the steps. You can just run it using 'mocha testing.js'

                                                  TESTS
1. Test the 'TRY IT OUT' link. Click the 'TRY IT OUT' link and verify that the user is navigated to the correct Demo page URL and that the contents of that page are visible to the user.

2. Verify the 'PRODUCTS' link. Navigate to the 'Products' page (users may want to find out more about Womplys products), by clicking on the Mobile Navigation Toggle, then clicking the 'Products' link. Also, verify that the user is navigated to the correct Products page URL and that the contents of the page are visible to the user.

3. Verify the 'WORK AT WOMPLY' link (for users that may want to search for open job positions). Click on the Mobile Navigation Toggle, clicking the 'JOIN US' link, then click the 'WORK AT WOMPLY' link. Verify that the user is navigated to the correct 'JOBS' page URL and that the contents of the page are displayed to the user.

4. Test the embedded video on the homepage. Click on the watch video link to play the video and verify that the video starts to play on time.

Run testing.js as a mocha test and it will bring up a chrome browser and execute the tests.

I can extend the tests to cover more but I wanted to show what I had so far. If you need anything else or if you need me to document the Test Cases manually please let me know, and I will attend to it. Thank you very much for this opportunity.
