import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTxtbackground]'
})
export class TxtbackgroundDirective {

  constructor(private myelem: ElementRef)
   {
     this.myelem.nativeElement.style.backgroundColor='yellow';
    }
    
@HostListener('mouseenter')
onMouseEnter() {
   this.myelem.nativeElement.style.fontSize = '30px';
  }
  @HostListener('mouseleave')
onMouseLeave() {
   this.myelem.nativeElement.style.fontSize = '30px';
  }
  @HostListener('dbclick')
onMouseDoubleClick() {
   this.myelem.nativeElement.style.color = 'red';
  }
    

    @HostListener('click')
    onMouseClick(){
      this.myelem.nativeElement.style.color='black'
    }
}
