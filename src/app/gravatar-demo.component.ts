import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { GravatarComponent } from './gravatar.component';
import 'rxjs/Rx'; // load the full rxjs

@Component({
  moduleId: module.id,
  selector: 'gravatar-demo',
  templateUrl: 'gravatar-demo.component.html',
  providers: [
    HTTP_PROVIDERS,
  ],
  directives: [
    GravatarComponent
  ]
})
export class GravatarDemoComponent {}
