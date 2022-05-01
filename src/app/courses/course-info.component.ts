import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  courseId?: number;
  course!: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService ){
    
  }
  
  ngOnInit(): void {
    
    const param = this.activatedRoute.snapshot.paramMap.get('id'); // pode retornar null

    this.courseId = param?+param:0;
    this.course = this.course = this.courseService.retrieveById(this.courseId);
    

    /*
    this.courseService.retrieveById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });    
    */
  }

  save(): void {
    /*
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Saved with success', course),
      error: err => console.log('Error', err)
    });
    */

    this.courseService.save(this.course);
  }

}