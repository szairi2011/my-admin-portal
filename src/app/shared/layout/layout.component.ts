import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  public isShowSidebar: boolean = true;

  constructor( private breakpointObserver: BreakpointObserver ) {}


  ngOnInit() {

  }

  ngAfterViewInit(): void {

    // Make the sidenav responsive to small devices
    this.breakpointObserver.observe('(max-width: 1024px)')
      .subscribe( (state: BreakpointState) => {

        console.log(state);

        if (state.matches) {
          // this.isShowSidebar = false;
          this.sidenav.mode = 'over';
        } else {
          this.isShowSidebar = true;
          this.sidenav.mode = 'side';
        }
      });
  }

  public ngOnDestroy(): void {
    this.sidenav.close();
  }

  toggle() {
    this.isShowSidebar = !this.isShowSidebar;
  }
}
