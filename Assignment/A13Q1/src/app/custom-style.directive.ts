import { Directive, ElementRef, HostBinding } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective
{
  constructor(private _eobj : ElementRef){}

  @HostBinding('style.background') backgroundColor = 'yellow';

  @HostBinding('style.font-weight') fontWeight = 'bolder';


}
