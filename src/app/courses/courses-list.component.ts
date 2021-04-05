import { CourseService } from './courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './courses';
@Component({
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css'],
})

export class CoursesListComponent implements OnInit {

    filteredCourses: Course[] = [];
    courses: Course[] = [];
    filterBy: string;

    constructor(private courseService: CourseService) {

    }
    ngOnInit(): void {
        this.getAllCourses();
    }

    getAllCourses(): void {
        this.courseService.getAllCourses().subscribe({
            next: courses => {
                this.courses = courses;
                this.filteredCourses = this.courses;
            },
            error: err => console.log('GET All Courses Error: ', err)
        });
    }
    deleteCourse(id: number): void {
        var confim = window.confirm('Want to delete this course?');
        if (confim) {
            this.courseService.deleteCourse(id).subscribe({
                next: courses => {
                    window.alert('Success when deleting course')
                    console.log(courses);
                    this.getAllCourses();
                },
                error: err => console.log('GET All Courses Error: ', err)
            });
        }
    }

    get filter() {
        return this.filterBy;
    }
    set filter(value: string) {
        this.filterBy = value;
        if (!!this.courses) {
            console.log('filter funcionando')
            this.filteredCourses = this.courses.filter((course) => {

                return course.name.toLowerCase().indexOf(this.filterBy.toLowerCase()) > -1
            })
        }

    }
}