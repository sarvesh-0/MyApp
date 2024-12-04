import { Component } from '@angular/core';
import { CustomdirectiveDirective } from '../customdirective.directive';
import { ChangestyleDirective } from '../changestyle.directive';

@Component({
  selector: 'app-directivedemo',
  imports: [CustomdirectiveDirective,ChangestyleDirective],
  templateUrl: './directivedemo.component.html',
  styleUrl: './directivedemo.component.css'
})
export class DirectivedemoComponent {

}
