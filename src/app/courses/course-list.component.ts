import { Component } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: 'course-list.component.html'  
})
export class CourseListComponent{

  courses: Course[] = [];

  constructor(private courceService: CourseService){
    this.courses = courceService.retrievAll();
  }

  ngOnInit(): void {
      
  }

}