import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable()
export class StudentService {
  students: Student[] = [];
  
  save(student: Student): Student {
     var result = null as any;
     if (this.idAlreadyRegistered(student.id)) {
       this.students.push(student);     
       result = student;
     }
     return result;     
  }

  idAlreadyRegistered(id: string): boolean {
     return !this.students.find(s => s.id == id);
  }
}
