import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [HomeComponent, HomeLoginComponent],
  declarations: [HomeComponent, HomeLoginComponent]
})
export class HomeModule { }
