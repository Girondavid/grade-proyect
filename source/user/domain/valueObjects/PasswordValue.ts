export class PasswordValueObject {

    private password!:string;

    constructor(public readonly passwor: string) {
        this.setPassword(passwor);
    }

    public setPassword = (password: string) => {

        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if(regex.test(password)){
            this.password = password;
        }
    }

    public getPass = () =>{
        return this.password!
    }  
}