import { Cliente } from "./Cliente.js"
export class ContaCorrente {
  agencia;

  // Atributo privados
  _cliente;
  _saldo = 0;

  // Quero privar o meu atributo 'cliente'
  // atribuirCliente(){ 
  // }
  // pegarCliente(){
  // }
  // Para isso uso as palavras reservadas 'get' e o 'set'
  // Acessor set
  set cliente(novoValor) {
    // Quero verificar se o valor de cliente é uma instancia de 'Cliente'
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  // Acessor get
    get cliente() {
      return this._cliente;
    }

  get saldo(){
    return this._saldo
  }

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
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
    conta.cidade = "Sao Paulo"
    valor = 20;
  }
}