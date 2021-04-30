import {ChurchMember} from "./ChurchMember";

export class Attendance {
    id: number;
    churchMember: ChurchMember;
    attended: boolean;
    date: Date;
}
