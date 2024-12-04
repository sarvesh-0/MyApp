import { Component } from '@angular/core';
import { CustomdirectiveDirective } from '../customdirective.directive';

@Component({
  selector: 'app-directivedemo',
  imports: [CustomdirectiveDirective],
  templateUrl: './directivedemo.component.html',
  styleUrl: './directivedemo.component.css'
})
export class DirectivedemoComponent {

}
