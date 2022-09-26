import { UserEntity } from '../../domain/UserEntity';
import { userRepository } from '../../domain/userRepository';
import UserModel from '../model/userSchema';

//! Es mala práctica tipar con any. 
export class mongoRepository implements userRepository {
    async iRegisterUser(User: UserEntity): Promise<object> {
        const user = await UserModel.create(User);
        return user;
    }
    async iLoginUser({email, password}: UserEntity): Promise<any> {
        const user = await UserModel.findOne({email, password});
        return user;
    }

}