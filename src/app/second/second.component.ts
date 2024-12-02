import { Component } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  message:string = "I created this second component today"
  p1:Product = new Product(11,"ABC",1200)
}
