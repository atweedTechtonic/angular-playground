import { browser, logging } from 'protractor';
import { HeroComponent } from './hero.po';

describe('Heroes Component Functionality', () => {
  let test: HeroComponent;

  beforeEach(() => {
    test = new HeroComponent();
  });

  it('should correctly display the title, id and name of a hero character)', async () => {
    await test.navigateTo();
    expect(await test.getHeroTitleText()).toEqual('WINDSTORM Details');
    expect(await test.getHeroPageId()).toEqual('id: 1');
    expect(await test.getHeroPageName()).toEqual('Windstorm');
  });

  it('should display updated name for a hero character)', async () => {
    await test.navigateTo();
    await test.setHeroPageName('Thor');
    expect(await test.getHeroPageName()).toEqual('Thor');
  });
});

afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(
    jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry)
  );
});
