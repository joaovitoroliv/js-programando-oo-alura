// O objetivo agora é criarmos um sistema de conta-corrente e cadastro de clientes para o contratante Bytebank, de modo que seja possível manipular o saldo desses usuários e realizar operações bancárias.
// O que vamos aprender: usar a palavra 'new', uso de classes, métodos e construtores, atributos estáticos e privados, assesores get e set

// Modulo 03 - Aula 07 - Módulos JavaScript
class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  _saldo = 0;
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }
  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233345
cliente2.nome = 'Alice'
cliente2.cpf = 88899933309
console.log(cliente1)
console.log(cliente2)

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001

contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)
const valorSacado = contaCorrenteRicardo.sacar(50)
console.log(valorSacado)
console.log(contaCorrenteRicardo)





