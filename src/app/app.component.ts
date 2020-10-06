import { Component } from '@angular/core';
import { UserService } from './user.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  defaultExist: boolean = true;
  weatherdata: any;
  constructor(private user: UserService, public dialog: MatDialog) {
    this.user.getData().subscribe(data => {
      // console.log("data:", data);
      this.weatherdata = data;
    })
  }

  openDialogLogin() {
    let dialogref = this.dialog.open(LoginComponent);

    dialogref.afterClosed().subscribe(result => {
      console.log(`Dialog result:${result}`);
    })

  }

  openDialog() {
    let dialogref = this.dialog.open(SignupComponent);

    dialogref.afterClosed().subscribe(result => {
      console.log(`Dialog result:${result}`);
    })
  }

  onSubmit(data) {
    console.log("login-data:", data);
  }
  value: string;
  submitValue(inputValue: any) {
    console.log("input value:", inputValue.value);
    this.value = inputValue.value;
  }
  destroy() {
    this.defaultExist = false;
  }

}
