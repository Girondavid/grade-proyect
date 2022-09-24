import { Router } from 'express';
import { UserCase } from '../../application/UserCases';
import { userController } from '../controller/userController';
import { mongoRepository } from '../repository/mongoRepository';


const route:Router = Router();

//Podría usarse un IoC para evitar instanciar aquí las clases.
const UsermongoRepository = new mongoRepository();
const UseCase = new UserCase(UsermongoRepository);
const UserController = new userController(UseCase);

route.post('/sign_in', UserController.loginControllerUser);
route.post('/sign_up', UserController.registerControllerUser);

export default route;