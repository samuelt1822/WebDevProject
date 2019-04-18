import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
// import 'rxjs-compat/add/operator/map';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';
import {SharedService} from './shared.service';
import {map} from 'rxjs/operators';




@Injectable()


export class UserServiceClient {
  constructor(private http: HttpClient, private sharedService: SharedService, private router: Router) {}

  baseUrl = environment.baseUrl;

  login(username: String, password: String) {


    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/login', body, {withCredentials: true});
  }

  logout() {
    return this.http.post(this.baseUrl + '/api/logout', '', {withCredentials: true});
  }

  register(username: String, password: String) {
    const body = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/register', body, { withCredentials: true })
      .pipe(map((res: any) => {
      const data = res;
      return data;
    }));
  }

  loggedIn() {
    return this.http.post(this.baseUrl + '/api/loggedIn', '', {withCredentials: true})
      .pipe(
        map(
          (user: any) => {
            if (user !== 0) {
              this.sharedService.user = user;
              console.log(user);
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        )
      );
  }

  createUser(user: User) {
    const url = this.baseUrl + '/api/user/';
    return this.http.post(url, user);
  }

  findUserByUsername(username: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username);
  }

  findUserByCredentials(username, password) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    console.log(url);
    return this.http.get(url);
  }

  findUserById(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url);
  }

  updateUser(userId: String, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user);
  }

  deleteUserById(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url);
  }

  /*createUser(user: any) {
    const body = {_id: '', username: user.username, password: user.password };
    return this.http.post(this.baseUrl + '/api/user', body);
  }
  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId);
  }
  findUserByUsername(username: String) {
    return this.http.get(this.baseUrl + '/api/username?username=' + username);
  }
  updateUser(user: any) {
    return this.http.put(this.baseUrl + '/api/user/' + user._id, user);
  }

  findUserByCredentials(username: String, password: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }

  deleteUserById(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user' + userId);
  }*/

}
