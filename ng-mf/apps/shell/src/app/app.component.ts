import { Component, OnInit } from '@angular/core';
import {UserService} from '@ng-mf/shared/data-access-user'
@Component({
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  constructor(private userService:UserService){
   
  }
  username="";

  ngOnInit(): void {
    this.userService.isUserLoggedIn$.subscribe(result=>{
      this.username = this.userService.userName;
    })
  }


}
