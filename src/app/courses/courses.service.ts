import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './courses';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
private coursesUrl: string = 'http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient){
    }
    getAllCourses(): Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }
    getCourse(id: number): Observable<Course>{
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`); 
    }
    setCourse(course: Course): Observable<Course>{
        if(course.id){
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`,course); 
        }
    }
    deleteCourse(id: number): Observable<Course>{
        return this.httpClient.delete<Course>(`${this.coursesUrl}/${id}`);

    }
}
