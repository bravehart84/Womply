var webdriver = require('selenium-webdriver');
var chai= require('chai');
var assert= chai.assert;

var HomePage = require('../pages/Home_page.js');
var RequestDemoPage = require('../pages/RequestDemo_page.js');
 var ProductsPage = require('../pages/Products_page.js');
 var JobsPage = require('../pages/Jobs_page.js');



var test = require('selenium-webdriver/testing');




   var homepage = new HomePage();

   var demopage = new RequestDemoPage();

  var products_page = new ProductsPage();

  var jobsPage = new JobsPage();

 



  

const mochaTimeOut = 10000; 
 
 test.describe('Regression Suite', function() {

  test.before(function(){

    this.timeout(mochaTimeOut);
    
     homepage.visit("http://womply.com/"); 
      
       
    });
  
  test.it('Verify Try it out link', function () {

    this.timeout(mochaTimeOut);

    //Navigates to Request Demo Page
   homepage.click_Tryitout_Link();

   //Verifies that page contents are visible to the user
   demopage.verify_RequestDemo_Page_is_visible();

   //Verifies the current URL
   demopage.verifyUrl('http://www.womply.com/demo');

   });

   test.it('Verify the Products link', function () {

    this.timeout(mochaTimeOut);

   homepage.click_MobileNavToggle();

   homepage.click_Products_Link();
   products_page.verify_Products_Page_is_visible();

   products_page.verifyUrl('http://www.womply.com/products/');

  
});

   test.it('Verify the Work At Womply link', function () {

    this.timeout(mochaTimeOut);

   homepage.click_MobileNavToggle();

   homepage.click_JoinUs_Link();

   homepage.click_WorkAtWomply_Link();

   jobsPage.verify_Jobs_Page_is_visible();

   jobsPage.verifyUrl('http://www.womply.com/jobs/');

   jobsPage.returnToHomepage();
   
});

test.it('Verify video playback', function () {

  this.timeout(mochaTimeOut);

  homepage.scrollDown();

  

  homepage.watch_Video();

  assert.isAbove(homepage.get_Video_Progress(), 0.01, "Video is playing");

  homepage.switchToDefaultContent();
 
 
});


  test.after(function(){
    this.timeout(mochaTimeOut);

     homepage.quitBrowser();
       
    });




    

  });

  
