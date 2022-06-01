// Modulo 03 - Aula 02 - Módulos JavaScript - Separação das classes por arquivo
// ECMAScript 13 - Inserção dos Módulos
// Uso da palavra export para exportar o meu conteudo
export class Cliente {
  nome;
  _cpf;

  
  // Acessor do cpf, único e imutável
  get cpf(){
    return this._cpf;
  }

  // Construtor
  constructor(nome,cpf){
    this.nome = nome;
    this._cpf = cpf;
  }
}