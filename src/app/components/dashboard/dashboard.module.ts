import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeadersComponent } from './headers/headers.component';
import { MenubarModule } from 'primeng/menubar';
import {AccordionModule} from 'primeng/accordion';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './change-detection/child/child.component';
import {ToastModule} from 'primeng/toast';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ChildEncapsulatedComponent } from './view-encapsulation/child-encapsulated/child-encapsulated.component';
import { FromEventComponent } from './Observables/from-event/from-event.component';
import { IntervalTimerComponent } from './Observables/interval-timer/interval-timer.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { ParentInputComponent } from './input-output/parent-input/parent-input.component';
import { ChildInputComponent } from './input-output/child-input/child-input.component';
import { OfFromEventComponent } from './Observables/of-from-event/of-from-event.component';
import { ToArrayComponent } from './Observables/to-array/to-array.component';
import { CustomObservableComponent } from './Observables/custom-observable/custom-observable.component';
import { MapComponent } from './Observables/map/map.component';
import { PluckComponent } from './Observables/pluck/pluck.component';
import { FilterComponent } from './Observables/filter/filter.component';
import { TapComponent } from './Observables/tap/tap.component';
import { TakeComponent } from './Observables/take/take.component';
import { RetryComponent } from './Observables/retry/retry.component';

@NgModule({
  declarations: [DashboardComponent, HeadersComponent, ChangeDetectionComponent, ChildComponent, ViewEncapsulationComponent, ChildEncapsulatedComponent, FromEventComponent, IntervalTimerComponent, ReactiveFormsComponent, ParentInputComponent, ChildInputComponent, OfFromEventComponent, ToArrayComponent, CustomObservableComponent, MapComponent, PluckComponent, FilterComponent, TapComponent, TakeComponent, RetryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenubarModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class DashboardModule { }
