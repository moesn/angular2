import { JokerPage } from './app.po';

describe('joker App', function() {
  let page: JokerPage;

  beforeEach(() => {
    page = new JokerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
