import { UserAccount } from "./UserAccount/UserAccount"
import { Bank } from "./Bank/Bank"
import { Transaction1 } from "./Transactions/Transactions1"

const transaction2: Transaction1 = new Transaction1('compras do mês', 250, '05/09/2022')


const pessoa1 = new UserAccount('05512352100', 'jao', 23)
const pessoa2 = new UserAccount('05512352101', 'joao', 24)


pessoa1.setNewTransaction(transaction2)

console.log(Bank)

const conta = new Bank([pessoa1])

conta.setAccount(pessoa2)
console.log(conta)

