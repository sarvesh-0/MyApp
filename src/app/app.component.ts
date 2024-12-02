import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIfDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
}
