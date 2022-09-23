import { UserCase } from "../../application/UserCases";
import { Request, Response } from "express";

export class userController {

    constructor(private UserCase: UserCase) { }

    loginControllerUser = async ({ body }: Request, response: Response) => {
        try {
            const user = await this.UserCase.loginUser(body);
            response.json({
                user
            });
        } catch (error) {
            response.status(401).json({error})
        }
    }

    registerControllerUser = async ({ body }: Request, response: Response) =>{
        try {
            const user = await this.UserCase.createUser(body);
            console.log(body.email)
            response.json({
                user
            });
        } catch (error) {
            response.json({error})
        }
    }

}