import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import { ColorChangeDirective } from 'src/app/services/color-change.directive';


@NgModule({
  declarations: [ColorChangeDirective  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [CardModule]
})
export class SharedModule { }
