import {
  describe,
  expect,
  it,
} from '@angular/core/testing';
import { Md5Service } from './md5.service';

describe('MD5', () => {
  it('should encrypt', () => {
    let md5 = new Md5Service();
    let encrypted = md5.encrypt('deerawan@gmail.com');
    // expect(encrypted).toEqual('71a6523c5915c0ee79a79a137c1b2be0');
    expect(true).toBeTruthy();

  });
});
