import { User } from './user';

export class Event {
    id: number;
    title: string;
    location: string;
    startdate: Date;
    enddate: Date;
    creator: User;
    attendees: User[];

    constructor (id, title, location, startdate, enddate, creator, attendees) {
        this.id = id;
        this.title = title;
        this.location = location;
        this.startdate = startdate;
        this.enddate = enddate;
        this.creator = creator;
        this.attendees = attendees;
    }
}