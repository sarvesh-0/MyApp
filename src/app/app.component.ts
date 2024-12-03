import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { OrdersComponent } from './orders/orders.component';
import { WorkshopComponent } from './workshop/workshop.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIfDemoComponent,OrdersComponent,WorkshopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
}
