let homepage = function () {

    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    let ddl = element(by.model('operator'));

    this.getUrl = function (url) {

        browser.get(url);

    };

    this.enterFirstNumber = function (firstNo) {

        firstNumber.sendKeys(firstNo);
    };

    this.dropDownValue = function (operation) {
        ddl.$('[value= ' + operation + ']').click();
    };

    this.enterSecondNumber = function (secondNo) {

        secondNumber.sendKeys(secondNo);
    };

    this.clickGo = function () {

        goButton.click();

    };

    this.verifyResults = function (res) {

        let outPut = element(by.cssContainingText('.ng-binding', ''));

        expect(outPut.getText()).toEqual(res);
    };

};
module.exports = new homepage();    