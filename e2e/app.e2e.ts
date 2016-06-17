import { Ng2GravatarPage } from './app.po';

describe('ng2-gravatar App', function() {
  let page: Ng2GravatarPage;

  beforeEach(() => {
    page = new Ng2GravatarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-gravatar works!');
  });
});
