import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../model/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-list-search-course',
  templateUrl: './list-search-course.component.html',
  styleUrls: ['./list-search-course.component.css']
})
export class ListSearchCourseComponent implements OnInit {
  course: Course[];
  @Input() courseId;
  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.course = this.courseService.getCoursesByCategoryId(this.courseId);
  }

}
