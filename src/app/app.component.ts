import { Component } from '@angular/core';

//Decorate
@Component({
  selector: 'app-root',// mandatory
  templateUrl: './app.component.html',// madatory
  styleUrls: ['./app.component.css']// optional
})
export class AppComponent {
  title = 'ekart';
}
