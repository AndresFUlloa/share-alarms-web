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
    var firstList = document.getElementById('first-li') as HTMLElement;
    firstList.style.color = "black";
    firstList.style.borderBottom = "1px solid black";
    this.days = [];
  }

  modifyDays(day: number){
    if (!this.days.includes(day)) {
      this.days.push(day);
    } else {
      this.days.splice(this.days.indexOf(day), 1);
    }
    var dayElment = document.getElementById("day" + day) as HTMLElement;
    if(dayElment.classList.contains('selected')){
       dayElment.classList.remove('selected');
       dayElment.classList.add('unselected');
    }
    else{
        dayElment.classList.remove('unselected');
        dayElment.classList.add('selected');
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

  selectHorario(tiempo: string){
    var otro = tiempo=="pm"? "am": "pm";
    var currentElement = document.getElementById(tiempo + "-button") as HTMLElement;
    var otherElement = document.getElementById(otro + "-button") as HTMLElement;
    if(currentElement.classList.contains('button-white')){
      currentElement.classList.remove('button-white');
      currentElement.classList.add('button-dark');

      otherElement.classList.remove('button-dark');
      otherElement.classList.add('button-white');
    }
    else{
      currentElement.classList.remove('button-dark');
      currentElement.classList.add('button-white');

      otherElement.classList.remove('button-white');
      otherElement.classList.add('button-dark');
    }

  }

}
