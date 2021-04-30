import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
import {Airport} from "../classes/Airport";

@Injectable({
  providedIn: 'root'
})

export class DataAirportService {

  private baseUrl = 'http://localhost:8080/public/airports';

  constructor(private http: HttpClient) {   }

  getAirports(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getAirportById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveAirport(airport: Airport): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, airport);
  }

  updateAirport(id: number, airport: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, airport);
  }

  deleteAirport(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
