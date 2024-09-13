// Controle de volume inicial do áudio
window.onload = function () {
  const audio = document.getElementById('myAudio');
  audio.volume = 0.2; // Define o volume inicial para 20%
};

// Pega os elementos do modal
const modal = document.getElementById('myModal');
const btn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close');

// Quando o usuário clica no botão, abre o modal
btn.addEventListener('click', function () {
  modal.style.display = 'flex'; // Torna o modal visível
});

// Quando o usuário clica no botão de fechar (×), fecha o modal
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Quando o usuário clica fora da caixa de conteúdo, fecha o modal
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Define uma posição aleatória no eixo X para o coração
  heart.style.left = Math.random() * 100 + 'vw';

  // Define um tamanho aleatório
  heart.style.width = Math.random() * 20 + 10 + 'px';
  heart.style.height = heart.style.width;

  // Define uma duração aleatória para a animação de queda
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';

  document.getElementById('falling-hearts').appendChild(heart);

  // Remove o coração após a animação
  setTimeout(() => {
    heart.remove();
  }, 5000); // Tempo para a animação completar
}

// Gera corações a cada 300ms
setInterval(createHeart, 2000);

// Executa o código quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
  // Pergunta ao usuário no console se ele deseja reproduzir a música
  const playMusic = confirm('Você deseja reproduzir a música?');

  // Seleciona o elemento de áudio
  const audio = document.getElementById('myAudio');

  // Verifica a resposta do usuário
  if (playMusic) {
    audio.play(); // Inicia a reprodução da música
    console.log('Música começou a tocar');
  } else {
    console.log('Usuário optou por não tocar a música.');
  }
});
