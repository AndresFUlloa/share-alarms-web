import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/event/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentMonth!: string;
  calendar!: string[][];
  currentDay: string = new Date().getDate().toString();
  currentYear!: number;
  fechaHoy: Date = new Date();
  events: Array<Event> = [
    new Event(1, 'Evento 1', new Date(), false, "Voz 1", []),
    new Event(2, 'Evento 2', new Date(), false, "Ring Bell Tone", [])
  ];


  constructor() {
    this.currentYear = new Date().getFullYear();
  }

    ngOnInit(): void {
    const today = new Date();
    this.currentMonth = today.toLocaleString('default', { month: 'long' });
    this.generateCalendar(today);
    var li_inicio = document.getElementById("second-li") as HTMLElement;
    li_inicio.style.color="var(--darker-green)";
    li_inicio.style.borderBottom="1px solid var(--darker-green)"
  }
  generateCalendar(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    var calendar: string[][] = [];
    let week: string[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = new Date(year, month, day).getDay();
      if (day === 1) {
        let currentDayOfWeek = 0;

        while (currentDayOfWeek != dayOfWeek) {
          week.push("");
          currentDayOfWeek ++;
        }
      }
      if (dayOfWeek === 0 && week.length > 0) {
        calendar.push(week);
        week = [];
      }
      week.push(day.toString());
    }

    while (week.length < 7) {
      week.push("");
    }

    calendar.push(week);

    this.calendar = calendar;
  }

  eliminarEvento(eventoId: number){
    const eventoBuscado = this.events.find(e => e.id === eventoId);
    const indiceAEliminar = this.events.indexOf(eventoBuscado!);
    if (indiceAEliminar !== -1) {
      this.events.splice(indiceAEliminar, 1);
    }

}
}
