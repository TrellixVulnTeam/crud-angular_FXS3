import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  // courses: Course[] = [];
  displayedColumns = [ 'name', 'category'];

  // CoursesService: CoursesService;

  constructor(private CoursesService: CoursesService) { 
    //this.courses = [];
    // this.CoursesService = new CoursesService();
    this.courses = this.CoursesService.list();
    // this.CoursesService.list().subscribe(courses => this.courses = courses);
  }

  ngOnInit(): void {
    // this.courses = this.CoursesService.list();
  }

}
