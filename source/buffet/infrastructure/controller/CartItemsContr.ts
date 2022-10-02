import { Request, Response } from "express";
import { CartCase } from "../../application/CartCase";

export class CartController{

    constructor(private readonly cartCase:CartCase){}

    createItemController = async ({body}:Request, response:Response) =>{
        try {
            const Item = this.cartCase.createitem(body);
            response.status(201).send({
                Item
            }) 
        } catch (error) {
            response.status(500).send({error:'something went wrong!', message: error})
        }
    }

    CartItemsController = async (response: Response) => {
        try {
            const AllCartItems = this.cartCase.GetCartItems();
            response.status(200).send(AllCartItems);
        } catch (error) {
            response.status(500).send({error:'something went wrong!'})
        }
    }
}