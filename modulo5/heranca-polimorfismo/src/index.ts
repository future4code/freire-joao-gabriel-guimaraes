import { Customer } from "./Herança/Customer"
import { User } from "./Herança/User"
import { Client } from "./Polimorfismo/Client"
import { Place } from "./Polimorfismo/Place"

console.log("Hello, world!")

// ----------------------- HERENÇA ------------------------


// EXERCÍCIO 1
const user = new User('001','joao@gmail.com', 'joao', '123456')

// console.log(user)

// console.log(user.getEmail())
// console.log(user.getId())
// console.log(user.getName())

// a) não, pois ela é privada e não tem um método get específico para pegar a senha.

// b) apenas uma vez.


// EXERCÍCIO 2
const customer = new Customer('001','joao@gmail.com', 'joao', '123456', 'mastercard')

console.log(customer)

// a) foi impressa apenas uma vez.

// b) 2 vezes. Uma que foi padrão, e outra por ter sido chamada dentro do costumer, no extends.

// EXERCÍCIO 3 

console.log(customer.getId())
console.log(customer.getName())
console.log(customer.getEmail())
console.log(customer.getCreditCard())
console.log(customer.purchaseTotal)


// b) nao, pois ela é uma propriedade privada e não tem nenhum metodo para buscar seu valor.

// Exercício 4

// console.log(customer.introduceYourself())

// Exercício 5

console.log(customer.introduceYourself())


// ----------------------- POLIMORFISMO ----------------------

// Exercício 1

const client: Client = {
    name: 'jao',
    registrationNumber: 123,
    consumedEnergy: 75,
    calculateBill: () => {
        return 2
    },
  }
  console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())

  // a) consegui imprimir todas propriedades.

  // Exercício 2

//   const place = new Place('12332114')

  // error - Não é possível criar uma instância de uma classe abstrata

  // b) teria que chamar esta classe em outra para que fosse possívrl criar uma instancia.
  
  // Exercício 4

  // Este método possui tanto as propriedades do client (name, registrationNumber, consumedEnergy) como do residence(cep e residenceQuantity) além do cpf que é proprio dela.

