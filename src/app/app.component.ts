import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName: string = '';
  userNameEmpty: boolean = true;

  isUserNameEmpty() {
    if(this.userName !== '') {
      this.userNameEmpty = false;
      return this.userNameEmpty;
    } else {
      this.userNameEmpty = true;
      return this.userNameEmpty;
    }
  }

  onResetUserName() {
    this.userName = '';
  }

}
