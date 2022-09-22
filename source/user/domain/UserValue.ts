import { UserEntity } from "./UserEntity";
import { v4 as uuid } from "uuid";
import { PasswordValueObject } from "./valueObjects/PasswordValue";
import { EmailValueObject } from "./valueObjects/EmailValue";
export class UserValue implements UserEntity {
    uuid: string;
    name?: string;
    email: string;
    password: string;

    constructor({ name, email, password }: { name?: string, email: EmailValueObject, password: PasswordValueObject }) {
        this.email = email.getEmail();
        this.password = password.getPassword();
        this.name = name;
        this.uuid = uuid();
    }
}