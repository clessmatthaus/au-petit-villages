import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  prevFunc(){
    var element = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = element.getElementsByClassName("item");
    element.prepend(item[item.length -1]);
  }
}
