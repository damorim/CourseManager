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
  duplicateID: boolean = false;

  save(s: Student): void {
     if (this.studentService.save(s)) {
       this.students.push(s);
       this.student = {name: "", id: "", email: ""};       
     } else {
       this.duplicateID = true;
     }
  }

  onMove(): void {
     this.duplicateID = false;
  }

}
