// O objetivo agora é criarmos um sistema de conta-corrente e cadastro de clientes para o contratante Bytebank, de modo que seja possível manipular o saldo desses usuários e realizar operações bancárias.
// O que vamos aprender: usar a palavra 'new', uso de classes, métodos e construtores, atributos estáticos e privados, assesores get e set

// Modulo 02 - Aula 07 - Métodos com Retorno
class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  // Saldo está desprotegido - Sugestção: Private Fields - uso de '#' - nao aceito
  // #saldo = 0; https://github.com/tc39/proposal-private-fields
  _saldo = 0;
  sacar(valor) {
    // 'O saldo, DESSA conta corrente deve ser verificado e subtraido'
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }
  depositar(valor) {
    if (valor <= 0) return; // Early Return - código mais legível
    this._saldo += valor; // Condição aceita, deposito correto!
  }
}

// Instanciando a minha classe Cliente
const cliente1 = new Cliente();
const cliente2 = new Cliente();
cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233345
cliente2.nome = 'Alice'
cliente2.cpf = 88899933309
console.log(cliente1)
console.log(cliente2)

// Criação da Conta Corrente
const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001

contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)
// Quero manipular o valorSacado para futuras operações
const valorSacado = contaCorrenteRicardo.sacar(50)
console.log(valorSacado)
// contaCorrenteRicardo._saldo = 1000; // Consigo acessar ainda sim
console.log(contaCorrenteRicardo)

// Perguntas:
// Um método nunca consegue acessar atributos da classe que ele pertence.
// Errado. Um método pode e deve acessar atributos de sua classe e para isso usamos a palavra-chave this






