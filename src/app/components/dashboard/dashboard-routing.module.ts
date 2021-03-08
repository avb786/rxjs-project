import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { FromEventComponent } from './Observables/from-event/from-event.component';
import { IntervalTimerComponent } from './Observables/interval-timer/interval-timer.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ParentInputComponent } from './input-output/parent-input/parent-input.component';
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
import { ReplaySubjectComponent } from './Observables/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Observables/async-subject/async-subject.component';
import { ConcatComponent } from './Observables/concat/concat.component';
import { MergeComponent } from './Observables/merge/merge.component';
import { MergeMapComponent } from './Observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './Observables/concat-map/concat-map.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'changeDetection', component: ChangeDetectionComponent, pathMatch: 'full' },
      { path: 'viewEncapsulation', component: ViewEncapsulationComponent, pathMatch: 'full' },
      { path: 'fromEvent', component: FromEventComponent, pathMatch: 'full' },
      { path: 'intervalTimer', component: IntervalTimerComponent, pathMatch: 'full' },
      { path: 'reactiveForms', component: ReactiveFormsComponent, pathMatch: 'full' },
      { path: 'inputOutput', component: ParentInputComponent, pathMatch: 'full' },
      { path: 'ofFromEvent', component: OfFromEventComponent, pathMatch: 'full' },
      { path: 'toArray', component: ToArrayComponent, pathMatch: 'full' },
      { path: 'customObservable', component: CustomObservableComponent, pathMatch: 'full' },
      { path: 'mapOperator', component: MapComponent, pathMatch: 'full' },
      { path: 'pluckOperator', component: PluckComponent, pathMatch: 'full' },
      { path: 'filterOperator', component: FilterComponent, pathMatch: 'full' },
      { path: 'tapOperator', component: TapComponent, pathMatch: 'full' },
      { path: 'takeOperator', component: TakeComponent, pathMatch: 'full' },
      { path: 'retryOperator', component: RetryComponent, pathMatch: 'full' },
      { path: 'debounceOperator', component: DebounceComponent, pathMatch: 'full' },
      { path: 'subjectOperator', component: SubjectComponent, pathMatch: 'full' },
      { path:'replaySubjectOperator', component: ReplaySubjectComponent, pathMatch: 'full' },
      { path:'asyncSubjectOperator', component: AsyncSubjectComponent, pathMatch: 'full' },
      { path:'concat', component: ConcatComponent, pathMatch: 'full' },
      { path:'merge', component: MergeComponent, pathMatch: 'full' },
      { path:'mergeMap', component: MergeMapComponent, pathMatch: 'full' },
      { path:'concatMap', component: ConcatMapComponent, pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
