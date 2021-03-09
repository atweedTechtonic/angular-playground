import { browser, by, element } from 'protractor';

export class HeroComponent {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getHeroTitleText(): Promise<string> {
    return element(by.css('.hero')).getText();
  }

  async getHeroPageId(): Promise<string> {
    return element(by.css('.hero-id')).getText();
  }

  async getHeroPageName(): Promise<string> {
    // better way to get input value?
    return element(by.id('name')).getAttribute('value');
  }

  async setHeroPageName(newName): Promise<unknown> {
    // possibly to chain?
    const nameValue = element(by.id('name'));
    nameValue.clear();
    return nameValue.sendKeys(newName);
  }
}
