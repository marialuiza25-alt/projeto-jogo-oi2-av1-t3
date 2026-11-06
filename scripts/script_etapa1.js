// VARIÁVEIS IMPORTANTES
localStorage.removeItem('vida');

const barra = new Barra(0, 100, 20, 100)
//VIDA INICIAL
barra.mudar_valor(100)

barra.desenhar(document.querySelector('#conteiner_barrinha'));

// ETAPA 1

// ESCOLHA 1 -  SE ESCONDER
const etapa1seEsconder = document.querySelector('#seEsconder');

function seEsconder() {
  alert('você se Escondeu!');
}

etapa1seEsconder.addEventListener('click', seEsconder);

// ESCOLHA 2 -  PASSAR POR ELES
const etapa1passarPorEles = document.querySelector('#passarPorEles');

function passarPorEles() {
  alert('Você Passou!');
  barra.mudar_valor(-10)
}

etapa1passarPorEles.addEventListener('click', passarPorEles);
