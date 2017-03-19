import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  user = {};
  displayName = {};
  
  constructor(
    public af: AngularFire
  ) {
    this.af.auth.subscribe(user => {
      console.log(user);
      if (user) { 
        // user logged in
        this.user = user;
        this.displayName = user.auth.displayName;
        debugger;
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }

  logout() {
    this.af.auth.logout();
  }
}