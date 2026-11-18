const barra = new Barra(0, 100, 20, 100)
barra.desenhar(document.querySelector('#conteiner_barrinha'));

// ETAPA 4

// ESCOLHA 1 - ACEITAR O CONVITE DE ANA CLARA
const etapa4aceitarConvite = document.querySelector('#aceitarConvite');

function aceitarConvite() {
  alert('Você aceitou o convite e fez uma nova amiga!');
  barra.mudar_valor(15)
}

etapa4aceitarConvite?.addEventListener('click', aceitarConvite);

// ESCOLHA 2 - RECUSAR E FICAR SOZINHO
const etapa4recusarConvite = document.querySelector('#recusarConvite');

function recusarConvite() {
  alert('Você recusou e ficou sozinho novamente...');
  barra.mudar_valor(-15)
}

etapa4recusarConvite?.addEventListener('click', recusarConvite);
