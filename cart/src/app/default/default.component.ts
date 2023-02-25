import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {BasketComponent} from "../basket/basket.component"

@Component({
  selector: 'app-default',
  standalone:true,
  imports:[CommonModule,BasketComponent],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {

}
