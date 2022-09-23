import { userRepository } from "../domain/userRepository";
import { UserValue } from "../domain/UserValue";


export class UserCase {

    constructor(private readonly userRepository:userRepository){}

    public createUser = async ({name, email, password}: {name:string, email:string, password:string}) => {
        const userValue = new UserValue({name, email, password});
        console.log(userValue)
        const userCreated = await this.userRepository.registerUser(userValue);
        return userCreated
    }

    public loginUser = async ({email, password}: {email:string, password:string}) => {
        const sign_inUser = new UserValue({email, password});
        const sign_User = await this.userRepository.registerUser(sign_inUser);
        return sign_User;
    }
}