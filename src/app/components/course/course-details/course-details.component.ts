import { Component, OnInit } from '@angular/core';
import { CourseDetails } from '../../../models/course-details';
import { CourseService } from '../../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit{
  
  courseDetails : CourseDetails | null = null;
  courseId: number = 0;


  constructor(private courseService  : CourseService,
    private route  : ActivatedRoute
  ){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(param =>{
      const id = param.get('courseId');
      if(id){
        this.courseId = Number(id);
        this.getCourseDetails();
      }
    })
  }
  
  getCourseDetails() {
    this.courseService.getCourseDetails(this.courseId).subscribe(
      (data) => {
        this.courseDetails = data;
      },
      (error) => {
        console.error('Error fetching course details:', error);
      }
    );
  }

}
