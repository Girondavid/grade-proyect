import { CartEntity } from "./CartEntity";
import { v4 as uuid } from 'uuid';

export class CartObject implements CartEntity{
    id!: string;
    category: string;
    description!: string;
    image!: string;
    title!: string;
    price!: number;
    amount: number;

    constructor({category, description, image, title, price, amount}:{category:string, description:string, image:string, title:string, price:number, amount:number}){
        this.id = uuid();
        this.category = category;
        this.description = description;
        this.image = image;
        this.title = title;
        this.price = price;
        this.amount = amount;        
    }
}