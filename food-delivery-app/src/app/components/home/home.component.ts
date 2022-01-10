import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  title = 'Delivery App';
  isShowHideFlag = "over" as const;

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  showHide() { }

  // onAuth() {
  //   (<any>this.router).navigate(["/login"])
  // }

  onBrowse() {
    (<any>this.router).navigate(["/browse"])
  }

  loginWithRedirect(): void {
    appState: { target: '/browse' };
    this.auth.loginWithRedirect();
  }

  signupWithRedirect(): void {
    appState: { target: '/browse' };
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }

}
