export class EmailValueObject {

    private email!:string;

    constructor(public readonly mail: string) {
        this.setEmail(mail);
    }

    private setEmail = (email: string) => {
        const rege = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(rege.test(String(email).toLowerCase())){
            this.email = email;
        }
    }

    public getEmail = () =>{
        return this.email;
    }
}