import "@angular/compiler";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared/shared.module';
import { LoginModule } from './AuthComponents/login/login.module';
import { PlaceholderDirective } from './shared/shared/placeholder.directive';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ColorChangeDirective } from './services/color-change.directive';



@NgModule({
  declarations: [
    AppComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    HttpClientModule,
    SharedModule,
    LoginModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
