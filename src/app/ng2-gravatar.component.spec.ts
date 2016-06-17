import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GravatarComponent } from '../app/gravatar.component';

beforeEachProviders(() => [GravatarComponent]);

describe('App: Ng2Gravatar', () => {
  it('should create the app',
      inject([GravatarComponent], (app: GravatarComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-gravatar works!\'',
      inject([GravatarComponent], (app: GravatarComponent) => {

  }));
});
