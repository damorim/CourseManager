import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   student: Student = {name: "", id: "", email: ""};
}

export class Student {
  name: string = "";
  id: string = "";
  email: string = "";
}
