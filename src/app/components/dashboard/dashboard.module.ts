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
import { DebounceComponent } from './Observables/debounce/debounce.component';
import { SubjectComponent } from './Observables/subject/subject.component';
import { Subject1Component } from './Observables/subject/subject1/subject1.component';
import { Subject2Component } from './Observables/subject/subject2/subject2.component';
import { Subject3Component } from './Observables/subject/subject3/subject3.component';
import { ReplaySubjectComponent } from './Observables/replay-subject/replay-subject.component';
import { EntryComponentsComponent } from './entry-components/entry-components.component';
import { Dummy1Component } from './entry-components/dummy1/dummy1.component';
import { CropElementComponent } from './crop-element/crop-element.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgrxComponent } from './ngrx/ngrx.component';
import { AsyncSubjectComponent } from './Observables/async-subject/async-subject.component';
import { ConcatComponent } from './Observables/concat/concat.component';
import { MergeComponent } from './Observables/merge/merge.component';
import { MergeMapComponent } from './Observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './Observables/concat-map/concat-map.component';
import { SwitchMapComponent } from './Observables/switch-map/switch-map.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { DemoDirective } from './demo.directive';

@NgModule({
  declarations: [DashboardComponent, HeadersComponent, ChangeDetectionComponent, ChildComponent, ViewEncapsulationComponent, ChildEncapsulatedComponent, FromEventComponent, IntervalTimerComponent, ReactiveFormsComponent, ParentInputComponent, ChildInputComponent, OfFromEventComponent, ToArrayComponent, CustomObservableComponent, MapComponent, PluckComponent, FilterComponent, TapComponent, TakeComponent, RetryComponent, DebounceComponent, SubjectComponent, Subject1Component, Subject2Component, Subject3Component, ReplaySubjectComponent, AsyncSubjectComponent, ConcatComponent, MergeComponent, MergeMapComponent, ConcatMapComponent, SwitchMapComponent, CustomDirectivesComponent, DemoDirective, ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenubarModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ImageCropperModule
  ],
  entryComponents:[Dummy1Component]
  // exports: [HeadersComponent]
})
export class DashboardModule { }
