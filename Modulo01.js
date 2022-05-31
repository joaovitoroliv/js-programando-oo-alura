// O objetivo agora é criarmos um sistema de conta-corrente e cadastro de clientes para o contratante Bytebank, de modo que seja possível manipular o saldo desses usuários e realizar operações bancárias.

// O que vamos aprender: usar a palavra 'new', uso de classes, métodos e construtores, atributos estáticos e privados, assesores get e set

// Modulo 01 - Aula 03 - Entendendo o problema do cliente
const cliente1Nome = 'Ricardo'
const cliente1CPF = 11122233345
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

const cliente2Nome = 'Alice'
const cliente2CPF = 88899933309
const cliente2Agencia = 1001;
const cliente2Saldo = 0;
// Muitas repetições
// Nossa primeira classe
class Cliente {
  nome;
  cpf;
  agencia;
  saldo;
  RG;
}

// Instanciando a minha classe
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233345
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.RG = 123456789

cliente2.nome = 'Alice'
cliente2.cpf = 88899933309
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2)

