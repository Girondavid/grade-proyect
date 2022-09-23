import { UserEntity } from "../../domain/UserEntity";
import { userRepository } from "../../domain/userRepository";
import UserModel from "../model/userSchema";


export class mongoRepository implements userRepository {
    async registerUser(User: UserEntity): Promise<any> {
        try {
            const user = await UserModel.create(User)
            return user
        } catch (error) {
            return error;
        }
    }
    async iLoginUser(User: UserEntity): Promise<any> {
        try {
            const user = await UserModel.findOne({ User });
            return user
        } catch (error) {
            return error  
        }
    }

}