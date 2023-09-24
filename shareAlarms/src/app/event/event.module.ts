import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [EventListComponent, EventCreateComponent],
  declarations: [EventListComponent, EventCreateComponent]
})
export class EventModule { }
