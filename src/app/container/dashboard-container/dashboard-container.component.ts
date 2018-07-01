import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent  {
  _mRoute: string;



  ngOnInit() {
  }


  _vmNavItems: any = {
    dashboard: [
      {
        name: "ABOUT US",
        // icon: "home",
        route: "/aboutus",
        color: "tb-theme-background"
      },
      {
        name: "SHOWCASE",
        route: "/showcase",
        color: "tb-theme-background"
      },
      {
        name: "LETTERS",
        route: "/letters",
        color: "tb-theme-background"
      },
      {
        name: "CONTACTS",
        route: "/contacts",
        color: "tb-theme-background"
      },
      {
        name: "BLOG",
        route: "/blog",
        color: "tb-theme-background"
      },
     
     

    ]

  };
}