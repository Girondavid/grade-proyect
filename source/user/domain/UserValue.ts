import { UserEntity } from './UserEntity';
//!El dominio no debe depender de librerías externas
import { v4 as uuid } from 'uuid';
import { response } from 'express';
import PasswordValidator from 'password-validator';

//!La construcción del objeto User no debería hacerse en el ValueObject, debería hacerse en la misma entidad.
export class UserValue implements UserEntity {
    uuid: string;
    name?: string;
    email?: string;
    password?: string;

    constructor({email, password, name}:{email:string, password:string, name?:string}) {
        this.setEmail(email);
        this.validatePassword(password);
        this.name = name;
        this.uuid = uuid();
    }

    private validatePassword =  (password:string) =>{
        try {
            //!ESTE ES EL ERROR
            //!No es necesario utilizar try/catch aquí debido a que ya se está manejando excepciones con throw new Error
            const schema = new PasswordValidator();
            schema
                .is().min(8)
                .is().max(100)
                .has().uppercase()
                .has().lowercase()
                .has().digits(2)
                .has().not().spaces()
                .is().not().oneOf(['Passw0rd', 'Password123']);
            if (schema.validate(password, { details: true })) {
                return this.password = password;
            }
            //throw new Error('La contraseña debe ser de mínimo de 8 caracteres, 2 números y mayúsculas');
        } catch (error) {
            response.json('Error de contraseña');
        }
    };

    private setEmail = (email:string) =>{
        try {
            //!ESTE ES EL ERROR
            //!No es necesario utilizar try/catch aquí debido a que ya se está manejando excepciones con throw new Error
            /* eslint-disable no-useless-escape */
            if(email ??  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ){
                this.email = email;
            }
            //throw new Error('Email invalido, debe ser acorde alguna extencion @, ejem: ejemplo@example.com');
        } catch (error) {
            response.json('Error de email');
        }
    };
}