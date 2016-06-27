
/// <reference path="../../typings/requirejs/require.d.ts" />
var md5 = require('md5');

export class Md5Service {
  encrypt(text: string) {
    return md5(text);
  }
}
