import { CartEntity } from "./CartEntity";

export interface CartRepository{
    iCreateItem(item:CartEntity):Promise<object | null>;
    iGetCartItems():Promise<CartEntity[]>
}