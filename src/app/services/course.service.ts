import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { CourseDetails } from '../models/course-details';

@Injectable({providedIn: 'root'})
export class CourseService {

    private baseUrl = `${environment.apiUrl}/Course`;

    constructor(private http : HttpClient) { }

    getCourseByCategoryId(categoryId : number) : Observable<Course[]>{
        return this.http.get<Course[]>(`${this.baseUrl}/Category/${categoryId}`);

    }

    getCourseDetails(courseId : number)  :Observable<CourseDetails>{
        return this.http.get<CourseDetails>(`${this.baseUrl}/Detail/${courseId}`);

    }

    getAllCourses() : Observable<Course[]>{
        return this.http.get<Course[]>(`${this.baseUrl}`);
    }
    
}