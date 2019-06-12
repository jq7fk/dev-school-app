import { Event } from './event';
import { users } from './usersdata';

export var events = [
    new Event(1, "Tacos after work", "Tako Nako", new Date("June 10, 2019 12:30"), new Date("June 10, 2019 4:30"), users[0], [users[0], users[1]]),
    new Event(2, "happy hour", "Trin", new Date("June 8, 2019 6:30"), new Date("June 8, 2019 7:30"), users[1], [users[0], users[1], users[2]]),
    new Event(3, "Basketball", "Gym", new Date("June 10, 2019 12:30"), new Date("June 10, 2019 4:30"), users[3], [users[0]])   
];