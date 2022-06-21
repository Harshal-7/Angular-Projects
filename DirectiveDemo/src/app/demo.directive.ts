import { Directive,HostListener,ElementRef, Host } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective 
{
  constructor(private _eobj : ElementRef) { }

  @HostListener('mouseenter')onmouseenter()
  {
    this._eobj.nativeElement.style.background = 'red';
    this._eobj.nativeElement.style.color = 'yellow';

  }

  @HostListener('mouseleave')onmousleave()
  {
    this._eobj.nativeElement.style.background = 'yellow';
    this._eobj.nativeElement.style.color = 'red';
  }

}
