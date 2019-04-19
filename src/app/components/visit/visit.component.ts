import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AgmCoreModule} from '@agm/core';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {
   lat = 47.622083;
   lng = -122.338686;
   zoom = 15;


  constructor() { }

  ngOnInit() {
  }

}
