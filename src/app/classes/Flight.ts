import {Airport} from "./Airport";

export class Flight {
    id: number;
    airportDeparture: Airport;
    airportArrival: Airport;
    departureDate: Date;
    arrivalDate: Date;
    airline: String;

    getName(){
        return this.airportArrival + ' ' + this.arrivalDate + ' ' + this.airline;
    }
}
