import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName: string
  private isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false)
  isUserLoggedIn$: Observable<boolean> = this.isUserLoggedIn.asObservable();
  constructor() {
    this.userName = '';
  }

  checkCredentials(username: string, password: string) {
    if (username == 'kiran' && password == 'kiran') {
      this.isUserLoggedIn.next(true);
      this.userName = username;
    }
  }
  public logout() {
    this.isUserLoggedIn.next(false);
    this.userName = '';

  }

}
