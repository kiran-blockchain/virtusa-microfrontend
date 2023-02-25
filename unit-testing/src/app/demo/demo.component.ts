import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{mydata}}</div>`
})
export class DemoComponent {
  mydata = 'Demo App';
}
