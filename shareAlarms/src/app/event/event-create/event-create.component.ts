import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  eventForm!: FormGroup;
  days!: number[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {this.eventForm = this.formBuilder.group({
      description: ["", Validators.required],
      date: ["", Validators.required],
      time: ["", Validators.required]
    });
  }

  modifyDays(day: number){
    if (!this.days.includes(day)) {
      this.days.push(day);
    } else {
      this.days.splice(this.days.indexOf(day), 1);
    }
  }

  crearEvento(event: Event){
    event.dias = this.days;
  }

}
