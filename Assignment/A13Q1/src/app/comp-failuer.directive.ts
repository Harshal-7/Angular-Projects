import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompFailuer]'
})
export class CompFailuerDirective
{
  constructor(private _eobj : ElementRef) {}

  @HostListener('mouseenter')onmouseenter()
  {
    this._eobj.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this._eobj.nativeElement.style.color = 'black';
  }

}
