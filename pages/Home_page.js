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

            driver.switchTo().frame(frame);
            
            this.navigateTo(By.className("play rounded-box state-paused"));

            driver.sleep(4000);
            
           
               
       
        }

       

        assert_Video_Playback(){

            
            
            
    driver.findElement(By.xpath(".//*[@class='progress']//div[3]")).getAttribute('aria-valuenow')
    .then(function(attr){
        console.log('String Time of video played is '+attr)
        var attrNumber= +attr;
        console.log('Time of video played is '+attrNumber);
     
      assert.isAbove(attrNumber, 0.01, "Video is not playing");

    });

   
 }

        
}






module.exports = HomePage;
