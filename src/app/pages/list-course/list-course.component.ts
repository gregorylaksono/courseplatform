import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  categoryId:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.params['id'];

  }

}
