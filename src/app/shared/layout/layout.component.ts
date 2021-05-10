import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  isShowSidebar: boolean;

  mode: string;

  constructor(private breakpointObserver: BreakpointObserver) { }


  ngOnInit() {

    // Make the sidenav responsive to small footprint devices
    this.breakpointObserver.observe('(max-width: 1024px)')
        .subscribe((state: BreakpointState) => {
          console.log(state);

          if (state.matches) {
            this.isShowSidebar = false;
            this.mode = 'over';
          } else {
            this.isShowSidebar = true;
            this.mode = 'side';
          }
        });

  }

  ngAfterViewInit(): void {

    /*
    NB: Include setTimeout wrapper to avoid the known ng error "ExpressionChangedAfterItHasBeenCheckedError".
    This error seem to happen in dev mode only
    */



  }

  public ngOnDestroy(): void {
    this.sidenav.close();
  }

  toggle() {
    this.isShowSidebar = !this.isShowSidebar;
  }
}
