import { Routes, RouterModule } from "@angular/router";
import { ListCourseComponent } from "./list-course.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchFilterComponent } from "../../components/search-filter/search-filter.component";
import { ListSearchCourseComponent } from "../../components/list-search-course/list-search-course.component";
import { CourseItemComponent } from "../../components/course-item/course-item.component";
import { SharedModule } from "../../shared/shared/shared.module";

export const ModernRoutes: Routes = [
    {
      path: ':id',
      component: ListCourseComponent
    }
  ];
  
@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(ModernRoutes),
      SharedModule
    ],
    declarations: [
      
      
    ]
  })
  export  class ListCourseModule { }