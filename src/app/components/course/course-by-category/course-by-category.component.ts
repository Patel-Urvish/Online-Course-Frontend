import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrowseCoursesComponent } from "../browse-courses/browse-courses.component";

@Component({
  selector: 'app-course-by-category',
  imports: [BrowseCoursesComponent],
  templateUrl: './course-by-category.component.html',
  styleUrl: './course-by-category.component.css'
})
export class CourseByCategoryComponent implements OnInit{
  

  categoryId: number = 0;

  constructor(private route : ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.categoryId = Number(param.get('categoryId'));
    })
  }

}
