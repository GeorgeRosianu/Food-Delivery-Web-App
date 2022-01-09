export class User {
    id: number;
    username: string;
    password: string;
    token: string;
    address: string;

    constructor(id: number, username: string, password: string, token: string, address: string) {
        this.id=id;
        this.username = username;
        this.password = password;
        this.token = token;
        this.address = address;
    }
}