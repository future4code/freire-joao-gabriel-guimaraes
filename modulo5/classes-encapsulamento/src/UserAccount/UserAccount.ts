import{ Transaction} from '../types'
import { Transaction1 } from '../Transactions/Transactions1';
export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction1[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getCpf(): string {
        return this.cpf
     }
     public getName(): string {
        return this.name
     }
     public getAge(): number {
        return this.age
     }
     public getBalance(): number {
        return this.balance
     }
     public getTransactions():  Transaction1[]{
        return this.transactions
     }
     public setNewTransaction(newTransaction: Transaction1):void {
        this.transactions.push(newTransaction)
     }
  
  }

//   1 - o construtor serve para conseguir acessar os dados passados dentro das classes e definir seus tipos

// b - foi impresso apenas uma vez.

// c - usando os métodos getters e setters

