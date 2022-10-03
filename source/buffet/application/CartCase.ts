import { CartEntity } from "../domain/CartEntity";
import { CartRepository } from "../domain/CartRepository";
import { CartObject } from "../domain/ValueObjectCart";

export class CartCase{

    constructor(private readonly CartRepository: CartRepository){}

    createitem = async ({category, description, image, title, price, amount}:{id:string,category:string, description:string, image:string, title:string, price:number, amount:number}) =>{
        const cartObject = new CartObject({category, description, image, title, price, amount});
        console.log(cartObject);
        const itemCart = await this.CartRepository.iCreateItem(cartObject);
        return itemCart;
    }

    GetCartItems = async():Promise<CartEntity[]> =>{
        const CartItems:CartEntity[] = await this.CartRepository.iGetCartItems();
        console.log(CartItems);
        return CartItems;
    }
}