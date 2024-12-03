
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  imports: [],
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {
  result:string = ""
  x:string =""
  DisplayMessage(){
    this.result = "Hi there Welcome to Angular !"
  }

  DisplayDetails(fn:string,ln:string){
    this.x ="Hi "+fn+" "+ln+" Good Morning !"
  }

  var1:string="Initial Value"
  handleInput(event:any){
    this.var1=(event.target as HTMLInputElement).value
  }

  ans:number=0;

  add(n1:number,n2:number){
    this.ans=n1+n2
  }

  sub(n1:number,n2:number){
    this.ans=n1-n2
  }

  mul(n1:number,n2:number){
    this.ans=n1*n2
  }

  div(n1:number,n2:number){
    this.ans=n1/n2
  }
}
