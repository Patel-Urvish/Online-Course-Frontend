import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/core/about-us/about-us.component';
import { PlansAndPricingComponent } from './components/plans-and-pricing/plans-and-pricing.component';
import { ContactUsComponent } from './components/core/contact-us/contact-us.component';
import { BrowseCoursesComponent } from './components/course/browse-courses/browse-courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseByCategoryComponent } from './components/course/course-by-category/course-by-category.component';
import { CategoryComponent } from './components/course/category/category.component';
import { CourseDetailsComponent } from './components/course/course-details/course-details.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component : HomeComponent},
    {path:'about-us', component : AboutUsComponent},
    {path:'contact-us', component: ContactUsComponent},
    {path:'plans-and-pricing',component:PlansAndPricingComponent},
    {path: 'course/browse' ,component:BrowseCoursesComponent},
    {path: 'course/category/:categoryId' ,component:CourseByCategoryComponent},
    {path: 'course/category' ,component:CategoryComponent},
    {path:'course/details/:courseId',component:CourseDetailsComponent}

];