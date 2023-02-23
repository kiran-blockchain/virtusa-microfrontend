import { Component } from '@angular/core';
import { UserService } from '@ng-mf/shared/data-access-user';
import {CounterFacade} from "@ng-mf/shared/counter"
@Component({
  selector: 'ng-mf-login-entry',
  template: `<button (click)="login()">Login</button>
  <button (click)="decrement()">Decrement<button>
  `
})
export class RemoteEntryComponent {
     constructor(private userService:UserService,private facade:CounterFacade){

     }
     login(){
      this.userService.checkCredentials("kiran","kiran");
     }
     decrement(){
      this.facade.decrement()
     }
}
