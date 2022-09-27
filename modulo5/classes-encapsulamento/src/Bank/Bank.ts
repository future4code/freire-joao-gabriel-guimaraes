import { UserAccount } from "../UserAccount/UserAccount";

export class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]){
        this.accounts = accounts
    }

    public getAccounts(): UserAccount[] {
        return this.accounts
    }

    public setAccount(user: UserAccount): void{
        this.accounts.push(user)
    }
}