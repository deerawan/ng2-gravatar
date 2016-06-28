import { Component, Input, OnInit } from '@angular/core';
import { Md5Service } from './md5.service';

@Component({
  selector: 'gravatar',
  template: `<img src="{{ url }}" />`
})
export class GravatarComponent implements OnInit {
  @Input() email: string;
  // @Input() size:number;
  // @Input() default:string;
  // @Input() forceDefault:string;
  // @Input() rating:string;
  // @Input() ssl:boolean;

  url: string;

  ngOnInit() {
    // this.url = 'http://www.gravatar.com/avatar/71a6523c5915c0ee79a79a137c1b2be0';
    this.url = 'http://gravatar.com';
    let parameters = '';

    console.log(this.email);


    // if (this.ssl) {
    //   this.url = 'https://secure.gravatar.com';
    // }

    // if (this.size) {
    //   parameters += 'size=' + this.size;
    // }

    // if (this.default) {
    //   parameters += '&default=' + this.default;
    // }

    // if (this.forceDefault) {
    //   parameters += '&forcedefault=' + this.forceDefault;
    // }

    // if (this.rating) {
    //   parameters += '&rating=' + this.rating;
    // }


    let md5 = new Md5Service();
    let emailHash = md5.encrypt(this.email);
    this.url += '/avatar/' + emailHash;

    if (parameters !== '') {
      this.url += '?' + parameters;
    }
  }
}
