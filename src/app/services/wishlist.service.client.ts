import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {WishList} from '../models/wishlist.model.client';

@Injectable()


export class WishlistServiceClient {

  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;

  createWishList(userId: String, wishList: WishList) {
    const newWish = {name: wishList.name, userId: wishList.userId, cost: wishList.cost, seller: wishList.cost};
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/wishList', newWish);
  }

  findWishListItemsByUser(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/wishList');
  }

  findWishListItemsById(wishListId: String) {
    return this.http.get(this.baseUrl + '/api/wishList/' + wishListId);
  }

  /**updateWebsite(websiteId: String, website: any) {
    const updatedWeb = {_id: website._id, name: website.name, developerId: website.developerId, description: website.description};
    return this.http.put(this.baseUrl + '/api/website/' + websiteId, updatedWeb);
  }*/

  deleteWishListItem(wishListId: String) {
    return this.http.delete(this.baseUrl + '/api/wishList/' + wishListId);
  }
}
