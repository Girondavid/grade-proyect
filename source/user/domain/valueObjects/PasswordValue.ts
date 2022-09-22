import { response } from "express";
import PasswordValidator from "password-validator";

export class PasswordValueObject {
    private password?:string;

    constructor(password:string){
        this.setPassword(password);
    }

    private setPassword = (password:string) => {
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

    public getPassword = () =>{
        return this.password!
    }
}