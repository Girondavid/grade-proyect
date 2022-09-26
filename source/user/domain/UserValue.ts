import { UserEntity } from './UserEntity';
//!El dominio no debe depender de librerías externas
import { v4 as uuid } from 'uuid';
import { response} from 'express';


//!La construcción del objeto User no debería hacerse en el ValueObject, debería hacerse en la misma entidad.
export class UserValue implements UserEntity {
    uuid: string;
    name?: string;
    email!: string;
    password!: string;

    constructor({email, password, name}:{email: string, password:string, name?:string}) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.uuid = uuid();
    }

    
}