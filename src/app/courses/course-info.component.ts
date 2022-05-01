import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  courseId?: number;

  constructor(private activateRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    const param = this.activateRoute.snapshot.paramMap.get('id'); // pode retornar null
    this.courseId = param?+param:0;
  }

}