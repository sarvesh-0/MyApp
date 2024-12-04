import { Component } from '@angular/core';
import { ChildeventComponent } from '../childevent/childevent.component';

@Component({
  selector: 'app-parentevent',
  imports: [ChildeventComponent],
  templateUrl: './parentevent.component.html',
  styleUrl: './parentevent.component.css'
})
export class ParenteventComponent {
  msg:string = ""
  onNotify(message:string):void{
    this.msg+='I am actually.........' + message
  }
}
