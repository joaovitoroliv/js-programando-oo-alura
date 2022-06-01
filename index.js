// ECMAScript 13 - Inserção dos Módulos
// Uso da palavra import para importar o meu conteudo
import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'
// SyntaxError: Cannot use import statement outside a module
// Para resolver esse erro: colocar "type": "module" no package.json -> npm init -y

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233345
cliente2.nome = 'Alice'
cliente2.cpf = 88899933309
// console.log(cliente1)
// console.log(cliente2)

// Transferëncia entre contas
const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);
console.log(contaCorrenteRicardo)

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = cliente2; 
contaCorrenteAlice.agencia = 102;
console.log(contaCorrenteAlice)
contaCorrenteRicardo.transferir(200, contaCorrenteAlice)
console.log(contaCorrenteAlice)
console.log(contaCorrenteRicardo)
