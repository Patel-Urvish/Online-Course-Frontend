import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from '../../../models/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../services/course.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-browse-courses',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './browse-courses.component.html',
  styleUrl: './browse-courses.component.css'
})
export class BrowseCoursesComponent implements OnInit, OnChanges{

  courses : Course[] = [];
  @Input() categoryId : number = 0;
  
  constructor(private courseService : CourseService){
    this.courses = [];
  }
  
  processCourse(){
    this.getCourseByCategoryId(this.categoryId);
  }


  getCourseByCategoryId(categoryId : number){
    this.courseService.getCourseByCategoryId(categoryId).subscribe(data =>{
      this.courses = data;
    })
    //this.courses = [];
  }

  ngOnInit(): void {
    this.processCourse();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.processCourse();
  }

  formatPrice(price:number) : string{
    return `$${price.toFixed(2)}`;
  
  }
}


