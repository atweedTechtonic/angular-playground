import { browser, logging } from 'protractor';
import { HeroComponent } from './hero.po';

describe('Heroes Component Functionality', () => {
  let test: HeroComponent;

  beforeEach(() => {
    test = new HeroComponent();
  });

  it('should display a list of hero characters', async () => {
    await test.navigateTo();

    const heroList = [
      '11 Dr Nice',
      '12 Narco',
      '13 Bombasto',
      '14 Celeritas',
      '15 Magneta',
      '16 RubberMan',
      '17 Dynama',
      '18 Dr IQ',
      '19 Magma',
      '20 Tornado',
    ];

    await test
      .getAllHeros()
      .getText()
      .then((heroes) => {
        expect(heroes.length).toEqual(10);
        expect(heroes[0]).toEqual('11 Dr Nice');
        expect(heroes).toEqual(heroList);
      });
  });

  it('should correctly display the title, id and name of a clicked hero', async () => {
    await test.navigateTo(); //
    await test.selectHero(4); // click on a hero in position 4
    expect(await test.getHeroTitle().getText()).toEqual('MAGNETA Details');
    expect(await test.getHeroId().getText()).toEqual('id: 15');
    expect(await test.getHeroName().getAttribute('value')).toEqual('Magneta');
  });

  it('should display the updated name for an edited hero character', async () => {
    await test.navigateTo();
    await test.selectHero(2);
    const heroName = await test.getHeroName();
    expect(heroName.isPresent()).toBe(true); // test if selector exists
    await heroName.clear();
    await heroName.sendKeys('Thor');
    expect(await test.getHeroName().getAttribute('value')).toEqual('Thor');
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
