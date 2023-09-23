import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Array<Event> = [
    new Event(1, 'Evento 1', new Date('2023-09-24T10:00:00'), false, []),
    new Event(2, 'Evento 2', new Date('2023-09-24T12:00:00'), false, [])
  ];

  events_date: Date = new Date('2023-09-24');
  
  constructor() { }

  ngOnInit() {
  }

}
