import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-user-calendar',
  templateUrl: './user-calendar.component.html',
  styleUrls: ['./user-calendar.component.scss']
})
export class UserCalendarComponent implements OnInit {

  events = [];
  calendarOptions: CalendarOptions;

  constructor(private httpClient: HttpClient) { }

  onDateClick(res) {
    alert('You clicked on: ' + res.dateStr)
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.events = [
        {
          title: 'A dummy event ...',
          date: '2022-05-31'
        }
      ]
    }, 2000);

    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.events
      }
    }, 3500);

  }

}
