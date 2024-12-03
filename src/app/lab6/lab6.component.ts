import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student1 } from '../Student1';
import { WelcomePipe } from '../welcome.pipe';
import { NthpowerPipe } from '../nthpower.pipe';

@Component({
  selector: 'app-lab6',
  imports: [CommonModule,WelcomePipe,NthpowerPipe],
  templateUrl: './lab6.component.html',
  styleUrl: './lab6.component.css'
})
export class Lab6Component {
  s1:Student1[]=[
    new Student1(1,"Aditya Rakate",new Date(2002,11,19),"Male","BTech",99),
    new Student1(2,"Yash Kadam",new Date(2002,1,19),"Male","BTech",82),
    new Student1(3,"Anuj Vidhate",new Date(2002,6,30),"Male","BTech",85),
    new Student1(4,"Rushi Pawar",new Date(2002,7,29),"Male","BTech",93),
    new Student1(5,"Dipish Munot",new Date(2002,9,9),"Male","BTech",77),
    new Student1(6,"Tejas Dudhe",new Date(2002,0,15),"Male","BTech",82),
  ]

  name:string="Aditya"
  n:number=5
}
