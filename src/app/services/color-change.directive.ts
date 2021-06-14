import { Directive } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  constructor() {
    console.log('Direcieve');
   }

}
