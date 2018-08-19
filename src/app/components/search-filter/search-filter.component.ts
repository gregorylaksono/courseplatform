import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  @Input() courseId : string;
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    
  }

}
