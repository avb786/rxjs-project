import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeadersComponent } from './headers/headers.component';
import { MenubarModule } from 'primeng/menubar';
import {AccordionModule} from 'primeng/accordion';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, HeadersComponent, ChangeDetectionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenubarModule,
    AccordionModule,
    FormsModule,
  ]
})
export class DashboardModule { }
