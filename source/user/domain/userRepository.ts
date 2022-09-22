import { UserEntity } from "./UserEntity";

export interface userRepository {
    registerUser(User: UserEntity):Promise<object | null>;
    iLoginUser(User: UserEntity):Promise<object | null>
}