import { Component, OnInit } from '@angular/core';
import {DIY} from '../../../models/diy.model.client';
import {DiyServiceClient} from '../../../services/diy.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-diy-list',
  templateUrl: './diy-list.component.html',
  styleUrls: ['./diy-list.component.css']
})
export class DiyListComponent implements OnInit {
  userId: String;
  diys: DIY[] = [];
  // diyId: String;
  diy: DIY;

  constructor(private diyService: DiyServiceClient, private activatedRouted: ActivatedRoute, private sharedService: SharedService,
              private router: Router) { }

  delete(diyId) {
    this.diyService.deleteDIY(diyId)
      .subscribe((data: any) => {
        this.diys = data;
        console.log(this.diys);
        const url = '/diy';
        this.router.navigateByUrl(url);
      });

  }
  refresh(): void {
    window.location.reload();
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    console.log(this.userId);

    this.diyService.findDIYsByUser(this.userId).subscribe((data: any) => {
      this.diys = data;
      console.log(this.diys);
    });
  }

}
