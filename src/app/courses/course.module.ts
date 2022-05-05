import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CourseListComponent } from './course-list.component'
import { CourseInfoComponent } from './course-info.component'

import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReplacePipe } from "../pipe/replace.pipe";
import { StarComponent } from "../star/star.component";



@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: 'courses', component: CourseListComponent
      }
    ])
  ]
})
export class CourseModule {

}