import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[decorStyle]'
})
export class ChangestyleDirective implements AfterViewInit{
  @Input()fontstyle!:string
  @Input()fontw!:string
  constructor(private elref:ElementRef) { }
  ngAfterViewInit():void{
    this.elref.nativeElement.style.fontStyle=this.fontstyle
    this.elref.nativeElement.style.fontWeight=this.fontw
  }
}
