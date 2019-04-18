import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  userId: String;
  user: User = new User('', '', '', '', '', '');
  username: String;

  constructor(private router: Router, private userService: UserServiceClient, private sharedService: SharedService,
              private activatedRouter: ActivatedRoute) { }

  update() {
    this.userId = this.user._id;
    this.userService.updateUser(this.userId, this.user)
      .subscribe((data: any) => {
        console.log('I am here');
        this.user = data;
        console.log(this.user);
      },
        (error: any) => {
        alert('Update failed.');
        });
  }

  logout() {
    this.userService.logout().subscribe((data: any) => {
      this.router.navigate(['/login']);
      this.sharedService.user = null;
    });
  }

  ngOnInit() {
    console.log('MyAccount component!');
    this.user = this.sharedService.user;
    console.log(this.user);
    this.username = this.user.username;
    console.log(this.user.password);
    console.log(this.user._id);

  }

}
