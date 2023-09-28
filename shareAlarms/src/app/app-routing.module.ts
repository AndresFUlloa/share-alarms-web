import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreateComponent } from './event/event-create/event-create.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { HomeLoginComponent } from './home/home-login/home-login.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [{
  path: 'login',
  component:HomeLoginComponent
},{
  path: 'home',
  component:HomeComponent
},{
  path: 'crearEvento',
  component:EventCreateComponent
},{
  path: 'listaEvento',
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
