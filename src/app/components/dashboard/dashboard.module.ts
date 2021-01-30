import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeadersComponent } from './headers/headers.component';
import { MenubarModule } from 'primeng/menubar';
import {AccordionModule} from 'primeng/accordion';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './change-detection/child/child.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ChildEncapsulatedComponent } from './view-encapsulation/child-encapsulated/child-encapsulated.component';
import { FromEventComponent } from './Observables/from-event/from-event.component';

@NgModule({
  declarations: [DashboardComponent, HeadersComponent, ChangeDetectionComponent, ChildComponent, ViewEncapsulationComponent, ChildEncapsulatedComponent, FromEventComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenubarModule,
    AccordionModule,
    FormsModule,
  ]
})
export class DashboardModule { }
