var webdriver = require('selenium-webdriver');
var assert= require('chai').assert;
var chrome= require('selenium-webdriver/chrome');
var arg= new chrome.Options();
arg.addArguments('disable-infobars');
var By= webdriver.By, until=webdriver.until;

var driver= this.driver =  new webdriver.Builder()
.forBrowser('chrome')
.setChromeOptions(arg)
.build();

  




    class BasePage {

        constructor(){
   
        global.driver= driver;
   
        }
    
   
      
   
   
       visit(url){
           
           driver.get(url);
           
       }

      

       verifyUrl(url){

        driver.wait(until.urlIs(url),6000);
        

       }

       returnToHomepage(){
        
        this.navigateTo(By.css('#logoImage>a'));
       }

       scrollDown(){
         
          
           driver.executeScript('window.scrollTo(0, 4650);');
       }


       navigateTo(ele) {
         driver.wait(until.elementLocated(ele),5000);
      

        
        driver.findElement(ele).click();
              
            }

          switchToDefaultContent(){
            driver.switchTo().defaultContent();
        }

          isDisplayed(ele){
              return ele.isDisplayed().then(function(displayed){

                 assert.isTrue(displayed, "Element is not displayed");



              })

          }

          view_Page_Content(ele){

            driver.wait(until.elementIsVisible(ele), 5000);
            

            
            
            return ele;
    
        }
    
        
        
          
        
          quitBrowser(){
            driver.sleep(5000);
              driver.quit();
          }
        

    

 
   

 




}


module.exports = BasePage;

 
