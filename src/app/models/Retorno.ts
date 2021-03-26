export class Tio {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    constructor(nombre: string, email: string, password: string) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}
