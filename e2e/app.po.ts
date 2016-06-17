export class Ng2GravatarPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-gravatar-app h1')).getText();
  }
}
