import { Component, OnInit } from '@angular/core';
import {DIY} from '../../../models/diy.model.client';
import {DiyServiceClient} from '../../../services/diy.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-diy-edit',
  templateUrl: './diy-edit.component.html',
  styleUrls: ['./diy-edit.component.css']
})
export class DiyEditComponent implements OnInit {
  userId: String;
  user: User = new User('', '', '', '', '', '', false);
  diyId: String;
  diy: DIY;
  diys: DIY[];

  constructor(private diyService: DiyServiceClient, private activatedRoute: ActivatedRoute, private router:
    Router, private sharedService: SharedService) { }

    delete() {
    this.diyService.deleteDIY(this.diyId)
      .subscribe((data: any) => {
        this.diys = data;
        console.log(this.diys);
        const url = '/diy';
        this.router.navigateByUrl(url);
      });

    }
    update() {
    this.diyService.updateDIY(this.diyId, this.diy)
      .subscribe((data: any) => {
        const url = '/diy';
        this.router.navigateByUrl(url);
      });

    }

  ngOnInit() {
    this.user = this.sharedService.user;
    console.log(this.user);
    this.userId = this.user._id;
    console.log(this.user._id);

    this.activatedRoute.params
      .subscribe((params: any) => {
        this.diyId = params.diyid;
      });
    console.log('DIY ID =' + this.diyId);

    this.diyService.findDIYsByUser(this.userId)
      .subscribe((data: any) => {
        this.diys = data;
    });

    this.diyService.findDIYById(this.diyId)
      .subscribe((data: any) => {
        this.diy = data;
        console.log(this.diy);
      });
  }

}
