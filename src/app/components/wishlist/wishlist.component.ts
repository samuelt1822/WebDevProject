import { Component, OnInit } from '@angular/core';
import {WishList} from '../../models/wishlist.model.client';
import {WishlistServiceClient} from '../../services/wishlist.service.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user.model.client';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  userId: String;
  // new addition with user
  user: User = new User('', '', '', '', '', '', false);
  wishLists: WishList[] = [];

  constructor(private wishListService: WishlistServiceClient, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    /*this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      console.log(this.userId);
    });*/
    this.user = this.sharedService.user;
    this.userId = this.user._id;
    this.wishListService.findWishListItemsByUser(this.userId).subscribe((data: any) => {
      this.wishLists = data;
    });
  }

}
