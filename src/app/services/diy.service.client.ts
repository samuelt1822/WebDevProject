import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {DIY} from '../models/diy.model.client';

@Injectable()


export class DiyServiceClient {

  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;

  createDIYPost(userId: String, diy: DIY) {
    const newDIY = {name: diy.name, userId: diy.userId, description: diy.description, cost: diy.cost,
    difficulty: diy.difficulty, toolsNeeded: diy.toolsNeeded, supplies: diy.supplies, url: diy.url};
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/diy', newDIY);
  }

  findDIYsByUser(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/diy');
  }

  findDIYById(diyId: String) {
    return this.http.get(this.baseUrl + '/api/diy/' + diyId);
  }

  updateDIY(diyId: String, diy: any) {
    const updatedDIY = {name: diy.name, userId: diy.userId, description: diy.description, cost: diy.cost,
      difficulty: diy.difficulty, toolsNeeded: diy.toolsNeeded, supplies: diy.supplies, url: diy.url};
    return this.http.put(this.baseUrl + '/api/diy/' + diyId, updatedDIY);
  }

  deleteDIY(diyId: String) {
    return this.http.delete(this.baseUrl + '/api/diy/' + diyId);
  }
}
