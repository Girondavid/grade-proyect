import { Router } from "express";
import { CartCase } from "../../application/CartCase";
import { CartController } from "../controller/CartItemsContr";
import { MongoCartRepo } from "../CartRepository/MongoCartRepo";

const routerCart:Router = Router();

const mongoCartRepo = new MongoCartRepo();
const cartCase = new CartCase(mongoCartRepo);
const cartController = new CartController(cartCase);

routerCart.get('/products', cartController.CartItemsController);
routerCart.post('/CreateItem', cartController.createItemController);

export default routerCart;