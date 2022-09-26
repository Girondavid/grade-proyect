import { UserCase } from '../../application/UserCases';
import { Request, Response } from 'express';

export class userController {

    constructor(private UserCase: UserCase) { }

    loginControllerUser = async ({ body }: Request, response: Response) => {
        try {
            const user = await this.UserCase.loginUser(body);
            response.status(200).json({
                user
            });
        } catch (error) {
            response.status(500).send({error:'something went wrong!', message: error})
        }

    };

    registerControllerUser = async ({ body }: Request, response: Response) => {
        try {
            const user = await this.UserCase.createUser(body);
            response.status(200).json({
                user
            });
        } catch (error) {
            response.status(500).send(error)
        }
    };

}