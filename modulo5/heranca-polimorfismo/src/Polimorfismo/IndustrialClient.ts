import { Client } from "./Client";
import { Industry } from "./Industry";

export class IndustrialClient extends Industry implements Client {

    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private IndustrialRegistrationNumber: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public calculateBill(): number {
        return (this.consumedEnergy * 0.45)
    }
    public getIndustrialRegistrationNumber(): string {
        return this.IndustrialRegistrationNumber
    }
}