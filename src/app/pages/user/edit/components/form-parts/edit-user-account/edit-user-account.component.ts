import { Component, Input, OnInit } from '@angular/core';
import { IEditFormPartComponent } from '../../../models';

@Component({
  selector: 'app-edit-user-account',
  templateUrl: './edit-user-account.component.html',
  styleUrls: ['./edit-user-account.component.scss']
})
export class EditUserAccountComponent implements OnInit, IEditFormPartComponent {

  @Input() data?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
