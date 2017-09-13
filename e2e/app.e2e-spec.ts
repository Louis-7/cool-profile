import { CoolProfilePage } from './app.po';

describe('cool-profile App', () => {
  let page: CoolProfilePage;

  beforeEach(() => {
    page = new CoolProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
