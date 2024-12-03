import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Workshop } from '../Workshop';

@Component({
  selector: 'app-workshop',
  imports: [CommonModule],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css'
})
export class WorkshopComponent {
  wrkarray:Workshop[] = [
    new Workshop(1,"Python","DS",8500,40,"complete"),
    new Workshop(2,"PhP","DS",8500,40,"complete"),
    new Workshop(3,"AWS","Cloud",8500,40,"pending"),
    new Workshop(4,"Angular","Framework",8500,40,"complete"),
    new Workshop(5,"React","Frontend",8500,40,"pending"),
    new Workshop(6,"Java","Dev Tool",8500,40,"complete")
  ]
}
