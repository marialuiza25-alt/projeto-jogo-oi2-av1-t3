const barra = new Barra(0, 100, 20, 100)
barra.desenhar(document.querySelector('#conteiner_barrinha'));

// ETAPA 3

// ESCOLHA 1 - PEDIR PARA LUCCA PARAR COM AS PROVOCAÇÕES
const etapa3pedirParaParar = document.querySelector('#pedirParaParar');

function pedirParaParar() {
  alert('Você pediu para Lucca parar com as provocações!');
  barra.mudar_valor(-10)
}

etapa3pedirParaParar?.addEventListener('click', pedirParaParar);

// ESCOLHA 2 - FICAR EM SILÊNCIO E ABAIXAR A CABEÇA
const etapa3ficarEmSilencio = document.querySelector('#ficarEmSilencio');

function ficarEmSilencio() {
  alert('Você ficou em silêncio e abaixou a cabeça...');
  barra.mudar_valor(-20)
}

etapa3ficarEmSilencio?.addEventListener('click', ficarEmSilencio);
