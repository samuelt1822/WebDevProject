import { Component, OnInit } from '@angular/core';
import {WishList} from '../../models/wishlist.model.client';
import {WishlistServiceClient} from '../../services/wishlist.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  userId: String;
  wishLists: WishList[] = [];

  constructor(private wishListService: WishlistServiceClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
    });
    this.wishListService.findWishListItemsByUser(this.userId).subscribe((data: any) => {
      this.wishLists = data;
    });
  }

}
