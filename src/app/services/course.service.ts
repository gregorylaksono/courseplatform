import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getHotCourses(): Course[]
  {
    let course : Course[] = [];
    course.push(new Course("Belajar berhitung","http://4.bp.blogspot.com/-UFNmL1KrQbg/VfZ1av32BdI/AAAAAAAAJks/Pra88LbZqgc/s640/Belajar%2BBerhitung%2BAngka%2BDari%2B1%2BSampai%2B10%2BUntuk%2BAnak%2B%25285%2529.jpg","Adi Lorem","Rp. 100.000"));
    course.push(new Course("Belajar menjahit","https://jualmesinjahit.net/wp-content/uploads/2016/08/cropped-caramenjahitbajucelanawanita-21.jpg","Gregory Laksono","Rp.200.000"));
    course.push(new Course("Belajar memasak","https://cdn-asset.hipwee.com/wp-content/uploads/2016/04/www.lastresortrecipes--750x422.jpg","Toni Kusuma","Rp. 65.000"));
    course.push(new Course("Belajar sepakbola","http://2.bp.blogspot.com/-jcsH08OOhZs/VR81xC7dfKI/AAAAAAAAHmk/IU91i0mqTkY/s1600/teknik%2Bsepak%2Bbola.png","Irtum Loren","Rp. 90.000"));
    course.push(new Course("Persiapan ujian nasional","https://unjkita.com/wp-content/uploads/2016/02/Ujian-Nasional-768x400.jpg","Hashim Warung","Rp. 78.000"));
    course.push(new Course("Belajar menari", "https://blog.sukawu.com/wp-content/uploads/2016/02/kursus-tari.jpg","Iriene Simanjuntak","Rp. 120.000"));
    // course.push(new Course("Kursus Yoga dasar","https://blog.fitnesia.com/wp-content/uploads/2017/05/artikelrealyoga-630x420.jpg","Ricky Luis","Rp. 25.000"));
    return course;
  }

  public getCoursesByCategoryId(categoryId:string) : Course[]{
    let course : Course[] =  this.getHotCourses();
    course.push(new Course("Item 1","https://vignette.wikia.nocookie.net/villains/images/6/6b/Unknown_icon.png/revision/latest?cb=20150426164103","Teacher 1","Rp. 100.000"));
    course.push(new Course("Item 2","https://vignette.wikia.nocookie.net/villains/images/6/6b/Unknown_icon.png/revision/latest?cb=20150426164103","Teacher 2","Rp. 100.000"));
    course.push(new Course("Item 3","https://vignette.wikia.nocookie.net/villains/images/6/6b/Unknown_icon.png/revision/latest?cb=20150426164103","Teacher 3","Rp. 100.000"));
    course.push(new Course("Item 4","https://vignette.wikia.nocookie.net/villains/images/6/6b/Unknown_icon.png/revision/latest?cb=20150426164103","Teacher 4","Rp. 100.000"));
    return course;
  }
}
