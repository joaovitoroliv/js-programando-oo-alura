// O objetivo agora é criarmos um sistema de conta-corrente e cadastro de clientes para o contratante Bytebank, de modo que seja possível manipular o saldo desses usuários e realizar operações bancárias.

// O que vamos aprender: usar a palavra 'new', uso de classes, métodos e construtores, atributos estáticos e privados, assesores get e set

// Modulo 02 - Aula 02 - Comportamento de Classes
class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;
  sacar(valor) {
    // 'O saldo, DESSA conta corrente deve ser verificado e subtraido'
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
  }
}

// Instanciando a minha classe
const cliente1 = new Cliente();
const cliente2 = new Cliente();
cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233345
cliente2.nome = 'Alice'
cliente2.cpf = 88899933309

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.saldo = 100
console.log(contaCorrenteRicardo.saldo)
contaCorrenteRicardo.sacar(120)
console.log(contaCorrenteRicardo.saldo)

console.log(cliente1)
console.log(cliente2)



