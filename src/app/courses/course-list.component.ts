import { Component } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  //selector: 'app-course-list',
  templateUrl: 'course-list.component.html'  
})
export class CourseListComponent{

  filteredCourses: Course[] = [];
  
  _courses: Course[] = [];
  _filterBy: string = '';

  constructor(private courceService: CourseService){
    this._courses = courceService.retrievAll();
    this.filteredCourses = this._courses;
  }

  ngOnInit(): void {
      
  }
  set filter(value: string){
    this._filterBy = value;
    this.filteredCourses = this._courses.filter( (course: Course)  => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }

}