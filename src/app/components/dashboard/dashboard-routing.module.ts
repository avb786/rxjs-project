import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { FromEventComponent } from './Observables/from-event/from-event.component';
import { IntervalTimerComponent } from './Observables/interval-timer/interval-timer.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'changeDetection', component: ChangeDetectionComponent, pathMatch: 'full' },
      { path: 'viewEncapsulation', component: ViewEncapsulationComponent, pathMatch: 'full' },
      { path: 'fromEvent', component: FromEventComponent, pathMatch: 'full' },
      { path: 'intervalTimer', component: IntervalTimerComponent, pathMatch: 'full' },
      { path: 'reactiveForms', component: ReactiveFormsComponent, pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
