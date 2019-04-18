import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserServiceClient} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') loginForm: NgForm;
  @ViewChild('rform') registerForm: NgForm;

  user: User;
  username: String;
  password: String;
  verifyPassword: String;
  errorMsg: 'Invalid username or password';
  errorFlag: boolean;
  error: String;



  constructor(private userService: UserServiceClient, private router: Router, private sharedService: SharedService) { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.errorFlag = false;
    this.userService.login(this.username, this.password)
      .subscribe((user: any) => {
        if (user) {
          console.log('TS Component' + user);
          this.sharedService.user = user;
          this.router.navigate(['/MyAccount']);
        } else {
          this.errorFlag = true;
        }
      }
      );
  }
  ngOnInit() {

    console.log('login page');
  }

}
