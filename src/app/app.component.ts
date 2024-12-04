import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { OrdersComponent } from './orders/orders.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { Lab6Component } from './lab6/lab6.component';
import { ParentComponent } from './parent/parent.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { ParenteventComponent } from './parentevent/parentevent.component';

@Component({
  selector: 'app-root',
  imports: [ParenteventComponent],//,NgIfDemoComponent,OrdersComponent,WorkshopComponent,PipeDemoComponent,RouterOutlet,Lab6Component,ParentComponent,DirectivedemoComponent,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
}
