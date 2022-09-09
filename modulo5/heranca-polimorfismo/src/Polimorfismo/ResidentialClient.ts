import { Client } from "./Client";
import { Residence } from "./Residence";

export class ResidencialClient extends Residence implements Client{
    
    constructor( 
        private cpf: string,
        residentsQuantity:number, 
        cep:string, 
        public name: string, 
        public registrationNumber: number, 
        public consumedEnergy: number
        ){
        super(residentsQuantity, cep)
    }
    
    public getCpf(): string {
        return this.cpf
    }
    public calculateBill(): number {
        return (this.consumedEnergy * 0.75)
    }
}