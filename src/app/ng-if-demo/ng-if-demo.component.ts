import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-ng-if-demo',
  imports: [CommonModule],
  templateUrl: './ng-if-demo.component.html',
  styleUrl: './ng-if-demo.component.css'
})
export class NgIfDemoComponent {
   show:boolean = false
   heading1:string = "Hi Welcome to Angular !"
   heading2:string = "Angular is too easy .."

   subjects:string[] = ["C prog", "DSA", "OOP", "DBMS", "Java"]

   students:Student[] = [new Student("Tejas",22,98),new Student("Aditya",23,98),new Student("Yash",24,98),new Student("Abhishek",25,98),new Student("Varad",26,98)]

  //  cCode:string[]=["USA","IND"]
  countryCode:string="USA"
}
