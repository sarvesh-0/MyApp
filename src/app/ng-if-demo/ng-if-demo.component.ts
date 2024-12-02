import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
}
