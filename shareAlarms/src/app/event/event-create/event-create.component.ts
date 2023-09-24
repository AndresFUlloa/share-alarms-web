import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Event } from '../event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  eventForm!: FormGroup;
  days!: number[];
  events: Array<Event> = [
    new Event(1, 'Evento 1', new Date(), false, []),
    new Event(2, 'Evento 2', new Date(), false, [])
  ];

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
    event.recurrente = this.eventForm.controls['required'].value;
    if(event.datetime === new Date()){
      this.events.push(event);
    }
  }

  cambiarRecurrente(){
    var checkBoxElement = document.getElementById('recurrente') as HTMLInputElement;
    var divDays = document.getElementById('div-days') as HTMLDivElement;
    if(checkBoxElement.checked){
      divDays.style.display = "flex";
    }
    else {
      divDays.style.display = "none";
    }
  }

}
