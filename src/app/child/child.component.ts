import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  //import @input to use @input
  @Input()technology!:string //technology:string
  @Input()techtype!:string
  constructor(){
  }
}
