import { Component ,OnInit} from '@angular/core';
import {UserService} from '@ng-mf/shared/data-access-user'
@Component({
  selector: 'ng-mf-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private userService:UserService){

  }
  ngOnInit(){
    this.userService.checkCredentials("kiran","kiran");
  }
}
