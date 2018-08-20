import { RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail.component';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';


export const ModernRoutes: Routes = [
  {
    path: ':id',
    component: CourseDetailComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ModernRoutes),
    SharedModule
  ],
  declarations: []
})
export class CourseDetailModule { }
