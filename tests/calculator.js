let home = require('../pages/homepage');


describe('Demo calculator tests', function () {

    it('Addition test', function () {

        home.getUrl('http://juliemr.github.io/protractor-demo/');

        home.enterFirstNumber('6');
        home.enterSecondNumber('12');
        home.clickGo();
        home.verifyResults('18');
        browser.sleep(6000);

    });

       

});