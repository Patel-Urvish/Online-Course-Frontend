import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/core/nav-bar/nav-bar.component';
import { ContactUsComponent } from './components/core/contact-us/contact-us.component';
import { BrowseCoursesComponent } from './components/course/browse-courses/browse-courses.component';
import { CategoryComponent } from "./components/course/category/category.component";
import { NgxSpinner, NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent,NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-course-ui';
}
