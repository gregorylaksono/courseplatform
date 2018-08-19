import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../model/course';
import { Category } from '../../model/category';
import { CategoryService } from '../../services/category.service';
import { UtilService } from '../../services/util.service';
import { CompanyInfo } from '../../model/companyinfo';
declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  courses : Course[];
  categories: Category[];
  companyInfo : CompanyInfo;

  constructor(private courseService:CourseService, private categoryService: CategoryService, private utilService: UtilService) { }

  ngOnInit() {
    $('#owl-demo').owlCarousel({
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
    });
    
    this.courses = this.courseService.getHotCourses();
    this.categories = this.categoryService.getHotCategories();
    this.companyInfo = this.utilService.getCompanyInfo();
  }

}
