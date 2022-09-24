import { UserEntity } from './UserEntity';

//!Es buena práctica tipar no con Object sino con la misma Entidad (UserEntity)
export interface userRepository {
    iRegisterUser(User: UserEntity):Promise<object | null>;
    iLoginUser(User: UserEntity):Promise<object | null>
}