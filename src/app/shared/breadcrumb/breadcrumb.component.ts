import { BreadcrumbItem } from './../models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  items: BreadcrumbItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        title: 'app',
        link: '/dashboard'
      },
      {
        title: 'user',
        link: '/user/list'
      },
      {
        title: 'profile',
        link: '/user/profile'
      }
    ]
  }

}
