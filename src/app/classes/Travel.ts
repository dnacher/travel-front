import {Flight} from "./Flight";

export class Travel {
    id: number;
    passengerName: String;
    passengerBirthDate: Date;
    passport: String;
    email: String;
    flights: Flight[];
}
