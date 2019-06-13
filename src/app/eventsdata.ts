import { Event } from './event';
import { users } from './usersdata';

export var events = [
    new Event(1, "Tacos after work", "Tako Nako", "June 10, 2019", "12:30 PM", users[0], [users[0], users[1], users[4]], [], "https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520956952-chicken-tacos-horizontal.jpg", "This will be super fun!"),
    new Event(2, "happy hour", "Trin", "June 8, 2019", "6:30 PM", users[1], [users[0], users[1], users[2]], [], "https://media1.fdncms.com/portmerc/imager/u/large/18893368/hh3.jpg", "We're going to celebrate Bob's birthday!"),
    new Event(3, "Basketball", "Gym", "June 10, 2019", "12:30 PM", users[3], [users[0]], [], "https://www.spalding.com/dw/image/v2/ABAH_PRD/on/demandware.static/-/Sites-masterCatalog_SPALDING/default/dw09a75b0a/images/hi-res/74875E_SIDE.jpg?sw=555&sh=689&sm=cut", "Roll thru")   
];