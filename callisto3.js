// Afeição inicial do Callisto. O valor é recuperado do armazenamento local.
let pontosCallisto = parseInt(localStorage.getItem("callistoPontos")) || 0;

// Seleciona os elementos principais da história
const inicioFloresta = document.getElementById("inicioFloresta");
const respostaCena = document.getElementById("respostaCena");
const pontosCallistoElemento = document.getElementById("pontosCallisto");
const respostaTexto = document.getElementById("respostaTexto");
const callistoConfronto = document.getElementById("callistoConfronto");
const missaoIntroducao = document.getElementById("missaoIntroducao");
const missaoAlternativa = document.getElementById("missaoAlternativa");
const jogoArea2 = document.getElementById("jogoArea2");
const monstrosRestantesSpan2 = document.getElementById("monstrosRestantes2");
const tempoRestanteSpan2 = document.getElementById("tempoRestante2");
const missaoResultado2 = document.getElementById("missaoResultado2");
const resultadoTitulo2 = document.getElementById("resultadoTitulo2");
const resultadoTexto2 = document.getElementById("resultadoTexto2");
const gameOver = document.getElementById("gameOver");

// Botões
const btnResposta1 = document.getElementById("resposta1");
const btnResposta2 = document.getElementById("resposta2");
const btnResposta3 = document.getElementById("resposta3");
const btnResposta4 = document.getElementById("resposta4");
const btnResposta5 = document.getElementById("resposta5");
const btnResposta6 = document.getElementById("resposta6");
const btnAceitarMissao2 = document.getElementById("btnAceitarMissao2");
const btnFugirMissao = document.getElementById("btnFugirMissao");
const btnAvancarHistoria2 = document.getElementById("avancarHistoria2");
const btnReiniciar = document.getElementById("reiniciar");

// Variáveis da missão 2
let monstrosMissao2 = document.querySelectorAll('#jogoArea2 .monstro');
let monstrosParaDestruir;
let tempoRestante;
let timer;
let movimentoInterval;

// Atualiza a exibição da afeição do Callisto
function atualizarPontosCallisto() {
  pontosCallistoElemento.textContent = "Afeição Callisto: " + pontosCallisto;
}

// Mostra uma cena e esconde as outras
function mostrarCena(id) {
  document.querySelectorAll('.caixa-dialogo-content').forEach(cena => {
    cena.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
  atualizarPontosCallisto();
}

function alterarPontos(valor) {
  pontosCallisto += valor;
  localStorage.setItem("callistoPontos", pontosCallisto);
  atualizarPontosCallisto();
}

// Inicia no começo da história
mostrarCena('inicioFloresta');

// Eventos dos botões de diálogo
btnResposta1.addEventListener("click", () => {
  alterarPontos(2);
  respostaTexto.innerHTML = '<strong class="nomecallisto">Callisto:</strong> “Típico. Mas se quisesse morrer, teria deixado.”';
  mostrarCena('respostaCena');
  setTimeout(() => mostrarCena('callistoConfronto'), 3000);
});

btnResposta2.addEventListener("click", () => {
  alterarPontos(3);
  respostaTexto.innerHTML = '<strong class="nomecallisto">Callisto:</strong> “Não sei por quê. Talvez eu esteja entediado.”';
  mostrarCena('respostaCena');
  setTimeout(() => mostrarCena('callistoConfronto'), 3000);
});

btnResposta3.addEventListener("click", () => {
  alterarPontos(1);
  respostaTexto.innerHTML = '<strong class="nomecallisto">Callisto:</strong> “Cuide-se. Da próxima, talvez eu não esteja por perto.”';
  mostrarCena('respostaCena');
  setTimeout(() => mostrarCena('callistoConfronto'), 3000);
});

btnResposta4.addEventListener("click", () => {
  alterarPontos(-2);
  respostaTexto.innerHTML = '<strong class="nomecallisto">Callisto:</strong> “Você os defende mesmo depois disso? Hmpf.”';
  mostrarCena('respostaCena');
  setTimeout(() => mostrarCena('missaoIntroducao'), 3000);
});

btnResposta5.addEventListener("click", () => {
  alterarPontos(-4);
  respostaTexto.innerHTML = '<strong class="nomecallisto">Callisto:</strong> “Não espero nada de irmãos como eles.”';
  mostrarCena('respostaCena');
  setTimeout(() => mostrarCena('missaoIntroducao'), 3000);
});

btnResposta6.addEventListener("click", () => {
  respostaTexto.innerHTML = '<strong class="nomecallisto">Callisto:</strong> “O silêncio diz muito mais do que palavras vazias.”';
  mostrarCena('respostaCena');
  setTimeout(() => mostrarCena('missaoIntroducao'), 3000);
});

// Botão de aceitar a missão 2
btnAceitarMissao2.addEventListener("click", () => {
  mostrarCena('missaoAlternativa');
  iniciarMissao(monstrosMissao2, jogoArea2, monstrosRestantesSpan2, tempoRestanteSpan2, 10, 'missaoResultado2');
});

// Botão fugir da missão (game over)
btnFugirMissao.addEventListener("click", () => {
  mostrarCena('gameOver');
});

// Botão reiniciar após game over
btnReiniciar.addEventListener("click", () => {
  pontosCallisto = 0;
  localStorage.setItem("callistoPontos", pontosCallisto);
  mostrarCena('inicioFloresta');
});

// Função para iniciar a missão
function iniciarMissao(monstros, areaJogo, spanMonstros, spanTempo, tempoLimite, cenaResultado) {
  monstrosParaDestruir = monstros.length;
  tempoRestante = tempoLimite;
  spanMonstros.textContent = monstrosParaDestruir;
  spanTempo.textContent = tempoRestante;

  clearInterval(timer);
  clearInterval(movimentoInterval);

  // Posicionar monstros aleatoriamente
  monstros.forEach(monstro => {
    const x = Math.random() * (areaJogo.offsetWidth - 50);
    const y = Math.random() * (areaJogo.offsetHeight - 50);
    monstro.style.left = `${x}px`;
    monstro.style.top = `${y}px`;
    monstro.style.opacity = "1";
    monstro.style.transform = 'scale(1)';
  });

  // Evento de clique em cada monstro
  monstros.forEach(monstro => {
    monstro.onclick = () => {
      if (parseFloat(monstro.style.opacity) === 1) {
        monstro.style.opacity = "0";
        monstro.style.transform = 'scale(0)';
        monstrosParaDestruir--;
        spanMonstros.textContent = monstrosParaDestruir;
        if (monstrosParaDestruir <= 0) {
          finalizarMissao(true, cenaResultado);
        }
      }
    };
  });

  // Timer da missão
  timer = setInterval(() => {
    tempoRestante--;
    spanTempo.textContent = tempoRestante;
    if (tempoRestante <= 0) {
      finalizarMissao(false, cenaResultado);
    }
  }, 1000);

  // Movimento dos monstros
  movimentoInterval = setInterval(() => {
    monstros.forEach(monstro => {
      if (parseFloat(monstro.style.opacity) === 1) {
        const novoX = Math.random() * (areaJogo.offsetWidth - 50);
        const novoY = Math.random() * (areaJogo.offsetHeight - 50);
        monstro.style.left = `${novoX}px`;
        monstro.style.top = `${novoY}px`;
      }
    });
  }, 1500);
}

// Função que finaliza a missão e mostra resultados
function finalizarMissao(vitoria, cenaResultado) {
  clearInterval(timer);
  clearInterval(movimentoInterval);
  mostrarCena(cenaResultado);

  if (cenaResultado === 'missaoResultado2') {
    if (vitoria) {
      alterarPontos(25); // Bônus por missão mais difícil
      resultadoTitulo2.textContent = "Missão  Concluída!";
      resultadoTexto2.innerHTML = `
        <p><strong class="nomecallisto">Callisto:</strong> “ISTO NÃO É UMA BUSCA! É UMA TORTURA!! Eu nem consegui segurar direito durante o treino! Estou tão cansado, tão morto. OHHHH, ESTE É MAIS UM ANO SENDO CHAMADO DE CHIMPANZÉ DA CAÇADA? MEU DEUS, LADY PENELOPE ECKHART NOS SALVOU A TODOS! GRAÇAS AOS CÉUS! SE NÃO FOSSE LADY PENELOPE...! APLAUDAS, OBRIGADA, LADY PENELOPE! NOSSA SALVADORA!”</p>
        <p>SISTEMA - Episódio Principal: Torne-se a Rainha da Caçada - Primeira Missão! [Salve as Pessoas do Perigo!] Sucesso! Recompensa obtida: Reputação 450, Todos os interesses amorosos 45% (TOTAL: 80)</p>
        <p>HA, ISSO É APENAS... 50 PONTOS DE REPUTAÇÃO? POR QUE NÃO DAR ESSE VALOR TAMBÉM PARA OS PONTOS DE AFETO? PALMAS, PALMAS, PALMAS. ESTOU COMPLETAMENTE PERPLEXO, E MEU CORPO ESTÁ MORTO DE CANSADO DE SER MANIPULADO PELO JOGO...</p>
        <p>manga Mreader.to MAS ISSO DEFINITIVAMENTE NÃO É UMA RECOMPENSA RUIM. PELO MENOS, PARECE QUE ESCAPEI DO PERIGO DE MORRER NAS MÃOS DO PRÍNCIPE HERDEIRO. REYNOLD... CORREU, E ESTAVA QUASE BEM AO MEU LADO. capturando os magos que controlavam os monstro.</p>
        <p class="nome-sistema">SISTEMA: Reputação ▲50, Todos os interesses amorosos ▲5%, Afeição Callisto: +25.</p>
      `;
    } else {
      alterarPontos(-10);
      resultadoTitulo2.textContent = "Missão Falhada!";
      resultadoTexto2.innerHTML = `<p>Você não conseguiu destruir todos os monstros. As pessoas estão em perigo e Callisto está decepcionado.</p><p class="nome-sistema">SISTEMA: Afeição Callisto: -10.</p>`;
      document.getElementById("reiniciar").style.display = "block";
    }
  }
}

