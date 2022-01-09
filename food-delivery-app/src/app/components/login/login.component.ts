import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/api/auth.service';
import { StorageHelper } from 'src/app/core/helpers/storage.helper';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginFormInstance: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService
  ) { 
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/browse']);
  }
  }

  ngOnInit(): void {
    this.initForm();
  }

  onHome() {
    (<any>this.router).navigate(["/home"])
  }

  initForm() {
    this.loginFormInstance = this.formBuilder.group({
      email: ["", Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(30)
      ])],
      password: ["", Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])]
    })
  }

  onLogin() {
    if (this.loginFormInstance.invalid) {
      return;
    }

    if (this.email != null && this.password != null)
      this.authService.login({ email: this.email.value, password: this.password.value }).subscribe((response: any) => {
        StorageHelper.setToken(response.token),
          (<any>this.router).navigate(["/home"])
      }, error => {
        console.log(error)
        console.log(error.error.error)
        this.openSnackBar(error.error.error, "Close")
      });
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(RegisterFormComponent, {
  //     width: '45vh',
  //     height: '75vh'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //     if (result) {
  //       let user = {
  //         firstName: result.value.firstName,
  //         lastName: result.value.lastName,
  //         username: result.value.username,
  //         email: result.value.email,
  //         password: result.value.password
  //       }
  //     }
  //   })
  // }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  get email() {
    return this.loginFormInstance.get("email");
  }

  get password() {
    return this.loginFormInstance.get("password");
  }

}
