import { CourseService } from './../courses.service';
import { Course } from './../courses';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  course: Course;
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourse(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.error(err)
    });
  }

  onSaveForm(): void {
    var confim = window.confirm('Want to save this course?');
    if (confim) {
      this.courseService.setCourse(this.course).subscribe({
        next: result => {
          window.alert('Success in save course')
          console.log(result)},
        error: err => console.error(err)
      });
    }

  }

}
