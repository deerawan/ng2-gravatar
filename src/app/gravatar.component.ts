import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gravatar',
  template: '<img src="{{ url }}" />'
})
export class GravatarComponent implements OnInit {
  @Input() public email:string;
  @Input() public size:number;
  @Input() public default:string;
  @Input() public forceDefault:string;
  @Input() public rating:string;
  @Input() public ssl:boolean;

  url: string;

  ngOnInit() {
    // this.url = 'http://www.gravatar.com/avatar/71a6523c5915c0ee79a79a137c1b2be0';
    this.url = 'http://gravatar.com';
    var parameters = '';

    if (this.ssl) {
      this.url = 'https://secure.gravatar.com';
    }

    if (this.size) {
      parameters += 'size=' + this.size;
    }

    if (this.default) {
      parameters += '&default=' + this.default;
    }

    if (this.forceDefault) {
      parameters += '&forcedefault=' + this.forceDefault;
    }

    if (this.rating) {
      parameters += '&rating=' + this.rating;
    }
  }
}
