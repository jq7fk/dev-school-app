// data.ts file for list of Users
// export var people = []

export class User {
    id: number;
    firstname: string;
    lastname: string;
    office: string;

    constructor(id, firstname, lastname, office) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.office = office;
    }
}