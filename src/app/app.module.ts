import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';

import { Routes, RouterModule } from '@angular/router';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared/shared.module';


const appRoutes : Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full' },
  {path:'main', component:MainComponent},
  {path:'courses', loadChildren:'./pages/list-course/list-course.module#ListCourseModule'},
  {path:'course', loadChildren:'./pages/course-detail/course-detail.module#CourseDetailModule'}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
