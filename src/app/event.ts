import { User } from './user';

export class Event {
    id: number;
    title: string;
    location: string;
    date: Date;
    creator: User;
    attendees: User[];
    imageUrl: string;
    description: string;

    constructor (id, title, location, date, creator, attendees, imageUrl, description) {
        this.id = id;
        this.title = title;
        this.location = location;
        this.date = date;
        this.creator = creator;
        this.attendees = attendees;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}