import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseCategory } from '../models/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root' 
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}/CourseCategory`; 

  constructor(private http: HttpClient) {} 

  getCategories(): Observable<CourseCategory[]> {
    return this.http.get<CourseCategory[]>(`${this.apiUrl}/GetAll`);
  }
}
