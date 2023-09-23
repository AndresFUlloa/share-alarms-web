import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventCreateComponent } from './event-create/event-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EventListComponent, EventCreateComponent],
  declarations: [EventListComponent, EventCreateComponent]
})
export class EventModule { }
