import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgSelectModule} from "@ng-select/ng-select";
import {FlightComponent} from "./flight/flight.component";
import {NgxPaginationModule} from 'ngx-pagination';
import {AirportComponent} from "./airport/airport.component";
import {NgxSpinnerModule} from "ngx-spinner";
import { TravelComponent } from './travel/travel.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from "@angular/material/input";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import { NgxMatDatetimePickerModule} from '@angular-material-components/datetime-picker';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IndexComponent,
    FlightComponent,
    AirportComponent,
    TravelComponent,
  ],
  entryComponents: [],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
    NgxPaginationModule,
    MatDialogModule,
    NgxSpinnerModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
