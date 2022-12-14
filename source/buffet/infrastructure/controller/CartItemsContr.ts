import { Request, Response } from "express";
import { CartCase } from "../../application/CartCase";

export class CartController{

    constructor(private readonly cartCase:CartCase){}

    createItemController = async ({body}:Request, response:Response) =>{
        try {
            const Item = await this.cartCase.createitem(body);
            response.status(201).json({
                Item
            }) 
        } catch (error) {
            response.status(500).send({error:'something went wrong!', message: error})
        }
    }

    CartItemsController = async (request: Request, response: Response) => {
        try {
            const AllCartItems = await this.cartCase.GetCartItems();
            response.status(200).send(AllCartItems);
        } catch (error) {
            response.send({error:'something went wrong!'}).status(500);
        }
    }
}