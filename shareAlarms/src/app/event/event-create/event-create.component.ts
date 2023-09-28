import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Event } from '../event';
import { Utils } from 'src/app/utils/utils';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  eventForm!: FormGroup;
  days!: number[];
  events: Array<Event> = [
    new Event(1, 'Evento 1', new Date(), false, "Voz 1", []),
    new Event(2, 'Evento 2', new Date(), false, "Ring Bell Tone", [])
  ];
  fechaHoy: Date = new Date();
  datePipe!: DatePipe;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {this.eventForm = this.formBuilder.group({
      id: [],
      description: ["", Validators.required],
      date: ["", Validators.required],
      time: ["", Validators.required],
      franja: [],
      recurrente:[],
      metodo:["", Validators.required]
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

  cleanDays(){
    for(var i=1; i < 8; i++){
      var dayElment = document.getElementById("day" + i) as HTMLElement;
      dayElment.classList.remove('selected');
       dayElment.classList.add('unselected');
    }
  }

  crearEvento(event: Event){
    event.dias = this.days;
    event.recurrente = this.days.length > 0;
    var franjaInput = document.getElementById('franja') as HTMLInputElement;
    event.datetime = Utils.crearFecha(
      this.eventForm.controls['date'].value, this.eventForm.controls['time'].value, franjaInput.value);
    if(Utils.fechasIguales(event.datetime, this.fechaHoy) && Utils.isNullOrEmpty(this.eventForm.controls['id'].value)){
      event.id = this.events.length + 1;
      this.events.push(event);
    }
    else if(!Utils.isNullOrEmpty(this.eventForm.controls['id'].value)){
      this.eliminarEvento(event.id);
      if(Utils.fechasIguales(event.datetime, this.fechaHoy)){
        this.events.push(event);
      }
    }
    this.clearForm()
    
  }

  clearForm(){
    this.eventForm.reset();
    var checkBoxElement = document.getElementById('recurrente') as HTMLInputElement;
    checkBoxElement.checked = false;
    this.cambiarRecurrente();
    this.seleccionarFranja('am')
  }

  cambiarRecurrente(){
    var checkBoxElement = document.getElementById('recurrente') as HTMLInputElement;
    var divDays = document.getElementById('div-days') as HTMLDivElement;
    if(checkBoxElement.checked){
      divDays.style.display = "flex";
    }
    else {
      divDays.style.display = "none";
      this.days = [];
      this.cleanDays();
    }
  }

  editarEvento(eventoId: number){
    this.eventForm.reset();
    const eventoBuscado = this.events.find(e => e.id === eventoId);
    this.eventForm.setValue({
      'id': eventoBuscado?.id,
      'description': eventoBuscado?.description,
      'date': Utils.parseFecha(eventoBuscado?.datetime),
      'time': Utils.getTime(eventoBuscado?.datetime),
      'franja': Utils.getFranja(eventoBuscado?.datetime),
      'recurrente': '',
      'metodo': eventoBuscado?.metodo
    });
    
    var franja = this.eventForm.controls['franja'].value;
    this.seleccionarFranja(franja);
    this.days = eventoBuscado!.dias;
    this.seleccionarDias();
  }

  eliminarEvento(eventoId: number){
    const eventoBuscado = this.events.find(e => e.id === eventoId);
    const indiceAEliminar = this.events.indexOf(eventoBuscado!);
    if (indiceAEliminar !== -1) {
      this.events.splice(indiceAEliminar, 1);
    }

  }

  seleccionarFranja(franja: string){
    var otraFranja = franja==='am' ? 'pm': 'am';
    var currentFranja = document.getElementById(franja + "-button") as HTMLElement;
    var unselectedFranja = document.getElementById(otraFranja + "-button") as HTMLElement;
    currentFranja.className = '';
    currentFranja.classList.add('button-white');
    unselectedFranja.className = '';
    unselectedFranja.classList.add('button-dark');
  }

  selectHorario(tiempo: string){
    var otro = tiempo=="pm"? "am": "pm";
    var currentElement = document.getElementById(tiempo + "-button") as HTMLElement;
    var otherElement = document.getElementById(otro + "-button") as HTMLElement;
    var franjaInput = document.getElementById("franja") as HTMLInputElement;
    franjaInput.value = tiempo;
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

  seleccionarDias(){
    this.cleanDays();
    if(this.days.length > 0){
      var checkBoxElement = document.getElementById('recurrente') as HTMLInputElement;
      var divDays = document.getElementById('div-days') as HTMLDivElement;

      checkBoxElement.checked = true;
      divDays.style.display = 'flex';

      for(var i=0; i<this.days.length; i++){
        var dayElment = document.getElementById("day" + this.days[i]) as HTMLElement;
        dayElment.className = ''
        dayElment.classList.add('circle')
        dayElment.classList.add('selected')
      }
    }
  }

}
