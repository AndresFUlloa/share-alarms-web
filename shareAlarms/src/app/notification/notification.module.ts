import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import { NotificationListComponent } from './notification-list/notification-list.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports:[NotificationListComponent],
  declarations: [NotificationListComponent]
})
export class NotificationModule { }
