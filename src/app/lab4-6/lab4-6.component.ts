import { Component } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-lab4-6',
  imports: [],
  templateUrl: './lab4-6.component.html',
  styleUrl: './lab4-6.component.css'
})
export class Lab46Component {
  emp:Employee = new Employee(1,"Jonathan Parker","Male","Contoso Public Ltd")
}
