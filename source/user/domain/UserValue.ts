import { UserEntity } from "./UserEntity";
import { v4 as uuid } from "uuid";
import { response } from "express";
import PasswordValidator from "password-validator";
export class UserValue implements UserEntity {
    uuid: string;
    name?: string;
    email?: string;
    password?: string;

    constructor({email, password, name}:{email:string, password:string, name?:string}) {
        this.validatePassword(password)
        this.setEmail(email);
        this.name = name;
        this.uuid = uuid();
    }

    private validatePassword =  (password:string) =>{
        try {
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
        throw new Error('La contraseña debe ser de minimo de 8 caracteres, 2 numeros y mayúsculas');
        } catch (error) {
            response.json(error);
        }
    }

    private setEmail = (email:string) =>{
        try {
            if(email ??  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ){
                this.email = email;
            }
            throw new Error('Email invalido, debe ser acorde alguna extencion @, ejem; ejemplo@example.com');
        } catch (error) {
            response.json(error);
        }
    }
}