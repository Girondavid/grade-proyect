import { EmailValueObject } from "./valueObjects/EmailValue";
import { PasswordValueObject } from "./valueObjects/PasswordValue";

export interface UserEntity {
    uuid:string;
    name?:string;
    email?:string;
    password?: string;
}