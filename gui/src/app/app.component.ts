import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  student: Student = {name: "", id: "", email: ""};   

  studentService = new StudentService();
  students: Student[] = [];

  save(s: Student): void {
    this.studentService.save(s);
    this.students.push(s);
    this.student = {name: "", id: "", email: ""};
  }

}
