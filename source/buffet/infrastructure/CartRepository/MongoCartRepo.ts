import CartModel from "../model/CartSchema";
import { CartEntity } from "../../domain/CartEntity";
import { CartRepository } from "../../domain/CartRepository";

export class MongoCartRepo implements CartRepository{
    iCreateItem = async (item: CartEntity): Promise<object> => {
        const NewItem = await CartModel.create(item);
        return NewItem;
    }
    iGetCartItems = async (): Promise<CartEntity[]> => {
        const AllItems: CartEntity[] = await CartModel.find();
        return AllItems;
    }
    
}