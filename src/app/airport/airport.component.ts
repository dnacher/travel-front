import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Airport} from "../classes/Airport";
import {DataAirportService} from "../services/data.airport.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-Airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})

export class AirportComponent implements OnInit {

  airport: Airport = new Airport();
  currentPage: number = 1;
  airports: Airport[];

  constructor(private data: DataAirportService,
              private dialog: MatDialog) {
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
  }

  save() {
    this.data.saveAirport(this.airport).subscribe(
      data => this.airport = data,
      info => console.log(info));
      console.log(this.airport)
      this.loadData();
    this.airport = new Airport();
  }

  loadData() {
    this.data.getAirports().subscribe(
      data => {this.airports = data;
      });
  }

  onSubmit() {
    if(this.airport.name!=null && this.airport.country!=null){
      this.save();
    }else{
      Swal.fire({
        icon: "error",
        title: 'Hubo un error',
        html: 'Por favor, rellene el formulario',
        timer: 2900,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        }
      })
    }
  }

  delete(airport: Airport){
    this.data.deleteAirport(airport.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

}
