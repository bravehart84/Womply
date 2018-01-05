var Basepage = require('./Base_page.js');
var webdriver = require('selenium-webdriver');
var assert= require('chai').assert;
var By= webdriver.By;


class JobsPage extends Basepage{

   

    verify_Jobs_Page_is_visible(){

        var content= driver.findElement(By.id('content'));
        this.view_Page_Content(content);
    }



    





}






module.exports = JobsPage;