import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2GravatarAppComponent } from '../app/ng2-gravatar.component';

beforeEachProviders(() => [Ng2GravatarAppComponent]);

describe('App: Ng2Gravatar', () => {
  it('should create the app',
      inject([Ng2GravatarAppComponent], (app: Ng2GravatarAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-gravatar works!\'',
      inject([Ng2GravatarAppComponent], (app: Ng2GravatarAppComponent) => {
    expect(app.title).toEqual('ng2-gravatar works!');
  }));
});
