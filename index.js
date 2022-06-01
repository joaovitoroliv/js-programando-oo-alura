import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

// Uso do constructor para criação de Clientes e ContaCorrente (inicialização de atributos)
const cliente1 = new Cliente("Ricardo", 11122233345);
const cliente2 = new Cliente('Alice', 88899933309);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1)
contaCorrenteRicardo.depositar(500);
console.log(contaCorrenteRicardo)
const contaCorrenteAlice = new ContaCorrente(101, cliente2);
console.log(contaCorrenteAlice)

let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice)
console.log("valor: ",valor)
