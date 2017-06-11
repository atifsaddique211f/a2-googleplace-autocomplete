import { Angular2GooglePlacePage } from './app.po';

describe('angular2-google-place App', () => {
  let page: Angular2GooglePlacePage;

  beforeEach(() => {
    page = new Angular2GooglePlacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
