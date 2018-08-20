import { CourseDetailComponent } from './../../pages/course-detail/course-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from '../../components/course-item/course-item.component';
import { CategoryService } from '../../services/category.service';
import { CourseService } from '../../services/course.service';
import { UtilService } from '../../services/util.service';
import { CategoryItemComponent } from '../../components/category-item/category-item.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListSearchCourseComponent } from '../../components/list-search-course/list-search-course.component';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';
import { ListCourseComponent } from '../../pages/list-course/list-course.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
      CategoryService,
      CourseService,
      UtilService],
  declarations: [
      CourseItemComponent,
      CategoryItemComponent,
      FooterComponent,
      ListCourseComponent,
      SearchFilterComponent,
      ListSearchCourseComponent,
      CourseDetailComponent
    ],
    exports:[
      CourseItemComponent,
      CategoryItemComponent,
      FooterComponent,
      ListCourseComponent,
      SearchFilterComponent,
      ListSearchCourseComponent,
      CourseDetailComponent
    ]

})
export class SharedModule { }
