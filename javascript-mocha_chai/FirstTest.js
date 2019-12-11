require('chromedriver');
const webdriver = require('selenium-webdriver');
const {By, until} = webdriver;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
const driver = new webdriver.Builder().forBrowser('firefox').build();
const expect = chai.expect;

describe
('Instagram Test', function() {
    driver.get('https://www.instagram.com/');
    driver.sleep(20000);

    it('login', function()
    {
      var login_button = driver.findElement(By.xpath("//a[@href = '/accounts/login/?source=auth_switcher']"));

    });
    // why isnt this working? EIther I typed it wrong or maybe some kind of asychronity
    //login_button.click();





});
