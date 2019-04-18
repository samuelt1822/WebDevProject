import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserServiceClient} from './user.service.client';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserServiceClient) {}

  canActivate() {
    return this.userService.loggedIn();
  }
}
