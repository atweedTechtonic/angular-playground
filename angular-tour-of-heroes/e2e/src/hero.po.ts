import { browser, by, element } from 'protractor';

export class HeroPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  getHeroTitle() {
    return element(by.css('.hero'));
  }

  getHeroId() {
    return element(by.css('.hero-id'));
  }

  getHeroName() {
    return element(by.id('hero-name'));
  }

  selectHero(position: number) {
    // TODO: what if I use '.heroes li'
    return element.all(by.css('.badge')).get(position).click();
  }

  getAllHeros() {
    return element.all(by.css('.heroes li'));
  }
}
