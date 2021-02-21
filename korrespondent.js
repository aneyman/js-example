

var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    // until = webdriver.until,
    // test = require('selenium-webdriver/testing');
    expect =  require('chai').expect;


describe('Korr first test', function () {
    var driver;
    this.timeout(10000);


    before(function () {
        var options = new chrome.Options();
        options.addArguments(["start-fullscreen"]);
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        driver.getCapabilities().then(function (caps) {
            console.log(caps);
        });
    });


    it('compares title of the second tab',  async function () {
        await driver.get('https://korrespondent.net/');
        await driver.findElement(By.xpath('//*[@id="frm"]/div[3]/div/div[2]/div[3]/div/ul/li[3]/a')).click();
        // await driver.findElement(By.xpath('//*[@id="frm"]/div[3]/div[1]/div[7]/div/h1'))
        var mytext = await driver.findElement(By.xpath('//*[@id="frm"]/div[3]/div[1]/div[7]/div/h1')).getText();
        console.log(mytext);
        expect(mytext).to.equal('НОВОСТИ УКРАИНЫ');
    });


    after(function () {
        driver.quit();
    });


});
