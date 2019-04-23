import { Component, OnInit } from '@angular/core';
import {DIY} from '../../../models/diy.model.client';
import {DiyServiceClient} from '../../../services/diy.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-diy-new',
  templateUrl: './diy-new.component.html',
  styleUrls: ['./diy-new.component.css']
})
export class DiyNewComponent implements OnInit {
  diy: DIY;
  user: User = new User('', '', '', '', '', '', false);
  userId: String;
  errorFlag: boolean;
  successMsg = 'Your instructable has been added. You may add another or return to your instructables list.';
  diys: DIY[];
  constructor(private diyService: DiyServiceClient, private router: Router, private activatedRouter: ActivatedRoute,
              private sharedService: SharedService) {
    console.log(this.diy);
  }

  create() {
    this.diy = new DIY(this.diy._id, this.diy.name, this.userId, this.diy.description, this.diy.cost, this.diy.difficulty,
      this.diy.toolsNeeded, this.diy.supplies, this.diy.url);
    if (this.diy.url === undefined) {
      this.diy.url = 'https://www.passiton.com/assets/your_photo_here-bd52bd115083f7b7844b90b3af7395c4.png';
    };
    this.diyService.createDIYPost(this.userId, this.diy).subscribe(
      (data: any) => {
        const url = '/diy';
        this.router.navigateByUrl(url);
        this.diyService.findDIYsByUser(this.userId).subscribe((diys: any) => {
          this.diys = diys;
        });
      }
    );

  }
  ngOnInit() {
    this.user = this.sharedService.user;
    console.log(this.user);
    this.userId = this.user._id;
    this.diyService.findDIYsByUser(this.user._id)
      .subscribe((data: any) => {
        this.diys = data;
      });
    this.diy = new DIY('', '', this.user._id, '', '', '', '', '', '');
  }

}
