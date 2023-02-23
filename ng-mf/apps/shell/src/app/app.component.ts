import { Component, OnInit } from '@angular/core';
import {UserService} from '@ng-mf/shared/data-access-user';
import {CounterFacade} from "@ng-mf/shared/counter"
@Component({
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  constructor(private userService:UserService, 
    private facade:CounterFacade){
   
  }
  username="";
  selectedState:any;
  ngOnInit(): void {
    this.userService.isUserLoggedIn$.subscribe(result=>{
      this.username = this.userService.userName;
    })
    this.facade.initialCount.subscribe(result=>{
      console.log(result);
      this.selectedState =result;
    })
    console.log(this.selectedState)
  }

  increment(){
    this.facade.increment();
  }


}
