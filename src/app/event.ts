import { User } from './user';

export class Event {
    id: number;
    title: string;
    location: string;
    date: string;
    time: string;
    creator: User;
    attendees: User[];
    comments: Comment[];
    imageUrl: string;
    description: string;

    constructor(id, title, location, date, time, creator, attendees, comments, imageUrl, description) {
        this.id = id;
        this.title = title;
        this.location = location;
        this.date = date;
        this.time = time;
        this.creator = creator;
        this.attendees = attendees;
        this.comments = comments;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}
