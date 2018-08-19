import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '../../../node_modules/@angular/router';
import { MainComponent } from '../pages/main/main.component';

const routes : Routes = [
  {
    path:"",
    component:MainComponent
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutesModule { }
