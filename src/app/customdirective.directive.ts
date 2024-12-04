import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  standalone:true,
  selector: '[myColor]'
})
export class CustomdirectiveDirective implements AfterViewInit {
  @Input()inputColor!:string
  constructor(private elref:ElementRef) { }
  ngAfterViewInit():void{
    this.elref.nativeElement.style.color=this.inputColor
  }
}
