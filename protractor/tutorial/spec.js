//spec.js

describe('Protractor Demo App', () => {
  let firstNumber = element(by.model('first'));
  let secondNumber = element(by.model('second'));
  let goButton = element(by.id('gobutton'));
  let latestResult = element(by.binding('latest')); // ???
  /*
browser
.getTitle()
element
.getText()
.getAttribute('value'))
data attributes
selecting elements - http://www.protractortest.org/#/locators
element.all / ElementArrayFinder 
*/
  beforeEach(() => {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });
  xit('should have a title', () => {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
  xit('should add one and two', () => {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);
    goButton.click();
    expect(latestResult.getText()).toEqual('3');
  });
  xit('should add four and six', () => {
    // Fill this in.
    firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);
    goButton.click();
    expect(latestResult.getText()).toEqual('10');
  });
  xit('should read the value from an input', () => {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  });
});

describe('Protractor Demo App Part2', () => {
  const firstNumber = element(by.model('first'));
  const secondNumber = element(by.model('second'));
  const goButton = element(by.id('gobutton'));
  const latestResult = element(by.binding('latest'));
  const history = element.all(by.repeater('result in memory'));

  // helper function
  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  xit('should have a history', () => {
    add(1, 2);
    add(3, 4);

    expect(history.count()).toEqual(2);

    add(5, 6);

    expect(history.count()).toEqual(3);
  });

  it('should have a history order', function () {
    add(1, 2);
    add(4, 7);
    add(3, 4);

    expect(history.last().getText()).toContain('1 + 2');
    expect(history.first().getText()).toContain('3 + 4');
  });
});
