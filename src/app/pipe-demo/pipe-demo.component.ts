import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../Product';
import { CountrycodePipe } from '../countrycode.pipe';

@Component({
  selector: 'app-pipe-demo',
  imports: [CommonModule,CountrycodePipe],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent {
  message:string="hello welcome"
  joinDate:Date= new Date(1999,5,4)
  p:Product = new Product(12,"Keybord",5000)

  countryName:string="United States of America"
}

