var Basepage = require('./Base_page.js');
var webdriver = require('selenium-webdriver');
var assert= require('chai').assert;
var By= webdriver.By, until=webdriver.until;


class HomePage extends Basepage{


    click_Tryitout_Link(){
             this.navigateTo(By.linkText("TRY IT OUT"));
             
            
                
        
         }
        
         

         click_MobileNavToggle(){
            this.navigateTo(By.className("mobile-nav-toggle fixed-nav-toggle"));
            
           
               
       
        }


        click_Products_Link(){
            this.navigateTo(By.css("#mobileNavigation > div:nth-child(2) > a"));
            
           
               
       
        }


        click_JoinUs_Link(){
            this.navigateTo(By.css("#mobileNavigation > div.folder > div.folder-toggle"));
            
           
               
       
        }

        

        

        click_WorkAtWomply_Link(){
            this.navigateTo(By.xpath(".//a[@href='/jobs/']"));
            
           
               
       
        }

        watch_Video(){

            var frame= driver.findElement(By.css('.embed-block-wrapper.embed-block-provider-Vimeo>iframe'));

            
            driver.wait(until.ableToSwitchToFrame(frame), 6000);
           
            driver.switchTo().frame(frame);
            
            this.navigateTo(By.className("play rounded-box state-paused"));

            driver.sleep(3000);
            
           
               
       
        }

       

        get_Video_Progress(){
             driver.findElement(By.className("played")).getAttribute('aria-valuenow')
             .then(function(attribute){
                return attribute;
             });

           
        }

        



        
        

        

        
}






module.exports = HomePage;