import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {UserServiceClient} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';
import {NgForm} from '@angular/forms';
import 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('form') registerForm: NgForm;
  user: User;
  verifyPassword: string;
  errorFlag: boolean;
  errorMsg: 'Password and verified password do not match!';

  constructor(private userService: UserServiceClient, private router: Router, private sharedService: SharedService) {
    this.user = new User();
    console.log(this.user);
  }

  register() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;

    this.errorFlag = false;

    if (this.user.password !== this.verifyPassword) {
      this.errorFlag = true;
    } else {
      this.userService.register(this.user.username, this.user.password)
        .subscribe((data: any) => {
          alert('Successful registration');
        this.sharedService.user = data;
        this.router.navigate(['/MyAccount']);
        },
        (error: any) => {
          console.log('register error' + error);
        });
    }
  }
  ngOnInit() {
    console.log('register page!');
    // this.user = new User(undefined, undefined, undefined, undefined, undefined, undefined);

  }

}
