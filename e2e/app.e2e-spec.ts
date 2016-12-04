import { NewNgAppPage } from './app.po';

describe('new-ng-app App', function() {
  let page: NewNgAppPage;

  beforeEach(() => {
    page = new NewNgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
