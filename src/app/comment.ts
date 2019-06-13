import { User } from './user';

export class Comment {
    creator: User;
    content: string;

    constructor(creator, content) {
        this.creator = creator;
        this.content = content;
    }
}
