import { browser, by, element }                              from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('RPC-root h1 .navbar-brand')).getText();
  }

  setMainLimitValue(value){
    element(by.css('.mainLimit')).clear();
    element(by.css('.mainLimit')).sendKeys(value);
    browser.sleep(500);
  }

  setMainRetentionValue(value){
    element(by.css('rpc-calculation .mainRetention')).clear();
    element(by.css('rpc-calculation .mainRetention')).sendKeys(value);
    browser.sleep(500);
  }

  setExecutionTypeValue(value){
    element(by.css('rpc-calculation select')).sendKeys(value);
    browser.sleep(500);
  }

  clickFetchCalculation(){
    element(by.css('rpc-calculation button')).click();
  }

  getCalculatedResultText(){
    const result =  element(by.css('rpc-calculation .table-header')).getText();
    browser.sleep(1000);
    return result;
  }
}
