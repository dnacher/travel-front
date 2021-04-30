import {Calling} from "./Calling";
import {Organization} from "./Organization";

export class ChurchMember {
    id: number;
    name: string;
    surname: string;
    fullname: string;
    calling: Calling = new Calling();
    organization: Organization = new Organization();
}
