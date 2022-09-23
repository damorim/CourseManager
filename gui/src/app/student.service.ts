import { Student } from './student';

export class StudentService {
  students: Student[] = [];
  save(student: Student): void {
     this.students.push(student);
  }
}
