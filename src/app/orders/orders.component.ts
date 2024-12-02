import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Order } from '../Orders';

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  oderarray:Order[]=[
    new Order(100,new Date(2022,1,21),"delivered","India","Amazon"),
    new Order(102,new Date(2023,3,18),"onTheWay","India","Flipkart"),
    new Order(103,new Date(2023,0,8),"onTheWay","India","Amazon"),
    new Order(104,new Date(2022,4,11),"delivered","India","Messho"),
    new Order(105,new Date(2024,8,26),"pending","India","Mintra"),
    new Order(106,new Date(2022,6,25),"delivered","India","Amazon"),
  ]
}
