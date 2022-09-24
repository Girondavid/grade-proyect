//!El correo y la contraseña deberían ser obligatorios.
export interface UserEntity {
    uuid:string;
    name?:string;
    email?:string;
    password?: string;
}