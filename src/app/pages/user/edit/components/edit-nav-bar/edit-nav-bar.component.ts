import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { routes } from 'src/app/consts';

@Component({
  selector: 'app-edit-nav-bar',
  templateUrl: './edit-nav-bar.component.html',
  styles: [
  ]
})
export class EditNavBarComponent implements OnInit {

  @Output() editTabChanged: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTabChange(_event: MatTabChangeEvent) {
    switch (_event.index) {
      case 0: // First tab
        // this.router.navigate([routes.USER_LIST_PAGE]);
        this.editTabChanged.emit(_event.index);
        break;
    }
  }

}
