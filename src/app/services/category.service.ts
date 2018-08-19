import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public getHotCategories() :Category[]{
      let category : Category[] = [];
      category.push(new Category("Pemograman C++","1"));
      category.push(new Category("Yoga","2"));
      category.push(new Category("Business Development","3"));
      category.push(new Category("Accounting","4"));
      category.push(new Category("Menjahit","5"));
      category.push(new Category("Membuat kue","6"));
      category.push(new Category("Merancang komputer","7"));
      return category;
  }
}
