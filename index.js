import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233345
const cliente2 = new Cliente();
cliente2.nome = 'Alice'
cliente2.cpf = 88899933309

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);
// console.log(contaCorrenteRicardo)

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = 0; // Consegui proteger o atributo de ser instanciado 
contaCorrenteAlice.cliente = cliente2; 
contaCorrenteAlice.agencia = 102;
// console.log(contaCorrenteAlice)
console.log(contaCorrenteAlice.cliente)

// Proibido!! Propriedade de somente leitura
// contaCorrenteAlice.saldo = 30000

let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice)
console.log("valor: ",valor)
