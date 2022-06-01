// Modulo 03 - Aula 02 - Módulos JavaScript - Separação das classes por arquivo
// Uso da palavra export para exportar o meu conteudo
export class ContaCorrente {
  agencia;
  cliente;

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

  // Transferëncia entre contas
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}