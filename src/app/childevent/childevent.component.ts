import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childevent',
  imports: [],
  templateUrl: './childevent.component.html',
  styleUrl: './childevent.component.css'
})
export class ChildeventComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  onClick():void{
    this.notify.emit('I am from child component ..........')
  }
}
