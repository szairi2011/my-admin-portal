import { ActivatedRoute, ChildActivationStart, NavigationEnd, Router } from '@angular/router';
import { BreadcrumbItem } from './../models';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs$: Observable<BreadcrumbItem[]>

  items: BreadcrumbItem[];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {

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


    this.router.events.pipe(
      filter(event => {
        console.log("Router event type: ", event);
        return event instanceof NavigationEnd;
      }),
      // distinctUntilChanged(),
      map(event => {
        const root: ActivatedRoute = this.activeRoute.root;
        console.log("The activated route root: ", root);
        // return this.createBreadCrumbs();
        this.breadcrumbs$ = this.createBreadcrumbs( root );
      })
    ).subscribe();
  }

  ngOnInit(): void {

    console.log('Reached ngOnInit lifecycle hook');




  }

  /* createBreadCrumbs() {
    return of(this.items);
  } */

  createBreadcrumbs( route, url: string = '', breadcrumbs = [ {title: 'home', link: '/home'}] ) {
    const children = route.firstChild;

    if( !children ){
      return [...breadcrumbs];
    }

    const routeURL: string = children.snapshot.url
      .map(segment => segment.path)
      .join('/');
    const label = children.snapshot.data['breadcrumb'];

    if (routeURL !== '') {
      url += `/${routeURL}`;
    }

    const breadcrumb = {
      title: label,
      params: children.snapshot.params,
      link: url
    }

    return this.createBreadcrumbs( children, url,  [...breadcrumbs, breadcrumb])
  }

}
