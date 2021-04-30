import { Component, OnInit } from '@angular/core';
import {Travel} from "../classes/Travel";
import {DataTravelService} from "../services/data.travel.service";
import {DataFlightService} from "../services/data.flight.service";
import {Flight} from "../classes/Flight";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sacrament-meeting',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  travel: Travel = new Travel();
  flights: Flight[]
  flightSelected: Flight;

  constructor(private dataFlightService: DataFlightService,
              private dataTravelService: DataTravelService) {}

  ngOnInit() {
    this.loadFlights();
  }

  loadFlights(){
    this.dataFlightService.getFlights().subscribe(
      data=> {this.flights = data;
      }
    );
  }

  deleteFlight(flight: Flight) {
    let ind = this.travel.flights.indexOf(flight);
    this.travel.flights.splice(ind,1);
  }

  save() {
    if(this.checkValues()==0){
      this.dataTravelService.saveTravel(this.travel).subscribe();
      Swal.fire({
        icon: "success",
        title: 'Viaje Agregado',
        html: 'Se agrego el viaje correctamente',
        timer: 900,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        }
      })
      this.travel = new Travel();
    }
  }

  private checkValues(){
    let msg = '';
    if(this.travel.email!=null){
      if(this.travel.passport!=null){
        if(this.travel.passengerBirthDate!=null){
          if(this.travel.passengerName!=null){
            if(this.travel.flights!=null || this.travel.flights.length>0){
              return 0;
            }else{
              msg = 'debe haber por lo menos un vuelo agregado';
            }
          }else{
            msg = 'el pasajero debe tener nombre';
          }
        }else{
          msg = 'Seleccione fecha de nacimiento';
        }
      }else {
        msg = 'agregue pasarporte';
      }
    }else {
      msg = 'El mail no puede estar vacio';
    }
    this.displayErrorMessage(msg);
  }

  public displayErrorMessage(message){
    Swal.fire({
      icon: "error",
      title: 'Hubo un error',
      html: message,
      timer: 2900,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }

  addFlight() {
    if(this.flightSelected!=null){
      if(this.travel.flights==null){
        this.travel.flights = new Array;
      }
      if(!this.checkFlight()){
        this.travel.flights.push(this.flightSelected);
      }
    }
  }

  checkFlight(){
    return this.travel.flights.indexOf(this.flightSelected) > -1;
  }
}
