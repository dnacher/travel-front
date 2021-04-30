import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {DataFlightService} from "../services/data.flight.service";
import {Flight} from "../classes/Flight";
import {Airport} from "../classes/Airport";
import {DataAirportService} from "../services/data.airport.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";
import Swal from "sweetalert2";

@Component({
  selector: 'app-attendance',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  flights: Array<Flight> = [];
  airports: Array<Airport> = [];
  currentPage: number = 1;
  isLoading: boolean = false;
  flight: Flight = new Flight();
  public formGroup = new FormGroup({
    date: new FormControl(null, [Validators.required]),
    date2: new FormControl(null, [Validators.required])
  })
  public color: ThemePalette = 'primary';
  public dateControl = new FormControl(new Date(2021,9,4,5,6,7));
  constructor(private dataFlightService: DataFlightService,
              private dataAirportService: DataAirportService,
              private spinnerService: NgxSpinnerService) {
    this.loadFlights();
  }

  ngOnInit() {
    this.loadFlights();
    this.loadAirport();
    this.spinnerService.show();
  }

  loadFlights(){
    this.dataFlightService.getFlights().subscribe(
      data => {
        this.flights = data;
      }
    );
  }

  loadAirport(){
    this.dataAirportService.getAirports().subscribe(
      data => {
        this.airports = data;
      }
    )
  }

  saveAirline() {
    this.isLoading = true;
    this.spinnerService.show();
    if(this.checkValues()==0) {
      this.dataFlightService.saveFlight(this.flight).subscribe(
        data => {
          this.loadFlights();
          this.isLoading = false;
          this.spinnerService.hide();
        }
      )
      Swal.fire({
        icon: "success",
        title: 'Vuelo Agregado',
        html: 'Se agrego vuelo de aerolinea: ' + this.flight.airline,
        timer: 900,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        }
      })
    }
  }

  public checkValues(){
    let msg = '';
    if(this.flight.airportDeparture!=this.flight.airportArrival){
      if(this.flight.arrivalDate!=null && this.flight.departureDate!=null){
        if(this.flight.arrivalDate>=this.flight.departureDate){
          if(this.flight.airline!=null){
            return 0;
          }else{
            msg ='Ingrese la aerolinea';
          }
        }else{
          msg = 'Verificar fechas';
        }
      }else {
        msg = 'Ingresar Fechas';
      }
    }else {
      msg = 'No pueden ser iguales la salida y llegada del aeropuerto';
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
    this.isLoading = false;
    this.spinnerService.hide();
  }

  deleteFlight(flight: Flight) {
    this.dataFlightService.deleteFlight(flight.id).subscribe();
    Swal.fire({
      icon: "success",
      title: 'Se elimino el vuelo correctamente',
      html: 'Vuelo borrado ' + this.flight.airline,
      timer: 1900,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }
    })
    this.loadFlights();
  }
}
