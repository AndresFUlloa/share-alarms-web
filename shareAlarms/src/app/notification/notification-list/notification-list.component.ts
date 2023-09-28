import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  notifications: Array<Notification> = [
    new Notification(1, 'Pedro acepto evento colegio'),
    new Notification(2, 'Se agrego nuevo tono')
  ]

  fechaHoy: Date = new Date();

  constructor() { }

  ngOnInit() {
    var forthList = document.getElementById('forth-li') as HTMLElement;
    forthList.style.color = "black";
    forthList.style.borderBottom = "1px solid black";
  }

  eliminarNotificacion(notificationId:number){
    const notificationSearched = this.notifications.find(n => n.id === notificationId);
    const indiceAEliminar = this.notifications.indexOf(notificationSearched!);
    if (indiceAEliminar !== -1) {
      this.notifications.splice(indiceAEliminar, 1);
    }
  }

}
