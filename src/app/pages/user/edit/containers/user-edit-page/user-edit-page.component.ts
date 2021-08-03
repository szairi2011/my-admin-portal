import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit {

  formPartIdx: number;

  constructor() { }

  ngOnInit(): void {
  }

  setFormPartIdx(_event: EventEmitter<number>) {
    this.formPartIdx = _event.
  }

}
