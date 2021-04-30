import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../app/index/index.component'
import {FlightComponent} from "./flight/flight.component";
import {AirportComponent} from "./airport/airport.component";
import {TravelComponent} from "./travel/travel.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'flights',
    component: FlightComponent
  },
  {
    path: 'travels',
    component: TravelComponent
  },
  {
    path: 'airports',
    component: AirportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
