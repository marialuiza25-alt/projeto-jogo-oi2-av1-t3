class Barra {
  constructor(min, max, alt, larg) {
    this.valor_minimo = min;
    this.valor_maximo = max;
    this.altura = alt;
    this.largura_maxima = larg;
    this.valor = this.valor_minimo;
  }

  mudar_valor(quanto) {
    const valorSalvo = Number(localStorage.getItem('vida'));
    this.valor = Number.isNaN(valorSalvo) ? this.valor_minimo : valorSalvo;
    this.valor += quanto;

    if (this.valor > this.valor_maximo) this.valor = this.valor_maximo;
    if (this.valor < this.valor_minimo) this.valor = this.valor_minimo;

    localStorage.setItem("vida", this.valor);
  }

  desenhar(alvo) {
    const valorSalvo = Number(localStorage.getItem('vida'));
    this.valor = Number.isNaN(valorSalvo) ? this.valor_maximo : valorSalvo;
    alvo.innerHTML = `
    <div style='height: ${this.altura}px; width: ${
      (this.valor / this.valor_maximo) * this.largura_maxima
    }px; background-color: red;'></div>
    `;
  }
}