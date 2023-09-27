import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreateComponent } from './event/event-create/event-create.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';

const routes: Routes = [{
  path: 'crearEvento',
  component:EventCreateComponent
},{
  path: 'home',
  component: EventListComponent
}, {
  path: 'notifications',
  component: NotificationListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
