let home = require('../pages/homepage');


describe('Demo calculator tests', function () {

    it('Addition test', function () {

        home.getUrl('http://juliemr.github.io/protractor-demo/');

        home.enterFirstNumber('20');

        home.dropDownValue('SUBTRACTION');
         //var ddl = element(by.model('operator'));
         //ddl.$('[value="MULTIPLICATION"]').click();
         // element(by.model('operator')).$('[value="MODULO"]').click();
        home.enterSecondNumber('15');
        home.clickGo();
        home.verifyResults('5');
        browser.sleep(8000);

    });

       

});