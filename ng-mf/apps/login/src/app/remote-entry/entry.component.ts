import { Component } from '@angular/core';
import { UserService } from '@ng-mf/shared/data-access-user';

@Component({
  selector: 'ng-mf-login-entry',
  template: `<button (click)="login()">Login</button>`
})
export class RemoteEntryComponent {
     constructor(private userService:UserService){

     }
     login(){
      this.userService.checkCredentials("kiran","kiran");
     }
}
