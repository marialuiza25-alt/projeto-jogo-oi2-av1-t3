class Barra {
  constructor(min, max, alt, larg) {
    this.valor_minimo = min;
    this.valor_maximo = max;

    this.altura = alt;
    this.largura_maxima = larg;

    this.valor = this.valor_minimo;
  }

  mudar_valor(quanto) {
    this.valor += quanto;
  }

  desenhar(alvo) {
    alvo.innerHTML = `
    <div style='height: ${this.altura}px; width: ${
      (this.valor / this.valor_maximo) * this.largura_maxima
    }px; background-color: red;'></div>
    `;
  }
}
