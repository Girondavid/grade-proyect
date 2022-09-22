import { response } from "express";

export class EmailValueObject {
    private email?:string;

    constructor(email:string){
        this.setEmail(email);
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

    public getEmail = ():string =>{
        return this.email!;
    }
}