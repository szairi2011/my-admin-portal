import { Component, Input, OnInit } from '@angular/core';
import { IEditFormPartComponent } from '../../../models';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit, IEditFormPartComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
