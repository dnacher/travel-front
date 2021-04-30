import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Travel} from "../classes/Travel";

@Injectable({
  providedIn: 'root'
})

export class DataTravelService {

  private baseUrl = 'http://localhost:8080/public/travels';
  constructor(private http: HttpClient) {   }

  getTravels(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getTravelsById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveTravel(travel: Travel): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, travel);
  }

  deleteTravel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateTravel(id: number, travel: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, travel);
  }

}
