import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Flight} from "../classes/Flight";

@Injectable({
  providedIn: 'root'
})

export class DataFlightService {

  private baseUrl = 'http://localhost:8080/public/flights';
  constructor(private http: HttpClient) {   }

  getFlights(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getFlightById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveFlight(flight: Flight): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, flight);
  }

  deleteFlight(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateFlight(id: number, flight: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, flight);
  }

}
