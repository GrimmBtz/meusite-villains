let pontosReynold = parseInt(localStorage.getItem("pontosReynold")) || 0;
let jogadorNome = localStorage.getItem("jogadorNome") || "Penelope";

const atualizarPontos = () => {
  document.getElementById("pontosReynold").innerText = `Afeição de Reynold: ${pontosReynold}`;
};

const mostrarMensagem = (html) => {
  const caixa = document.getElementById("mensagemResultado");
  caixa.innerHTML = html;
  caixa.style.display = "block";
  setTimeout(() => {
    caixa.style.display = "none";
  }, 3000);
};

const atualizarLocalStorage = () => {
  localStorage.setItem("pontosReynold", pontosReynold);
  atualizarPontos();
};

const esconderTodasCenas = () => {
  document.querySelectorAll(".caixa-dialogo, .final, .game-over").forEach(section => {
    section.style.display = "none";
  });
};

const gameOver = (mensagem) => {
  esconderTodasCenas();
  document.getElementById("gameOver").style.display = "block";
  document.getElementById("gameOverTexto").innerText = mensagem;
};

const exibirFinal = () => {
  esconderTodasCenas();
  document.getElementById("pontosReynold").style.display = "none";
  document.getElementById("mensagemResultado").style.display = "none";

  if (pontosReynold >= 80) {
    document.getElementById("finalSecreto").style.display = "block";
  } else if (pontosReynold >= 50) {
    document.getElementById("finalBom").style.display = "block";
  } else if (pontosReynold >= 20) {
    document.getElementById("finalNormal").style.display = "block";
  } else {
    document.getElementById("finalRuim").style.display = "block";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Personalizar com o nome do jogador se disponível
  const urlParams = new URLSearchParams(window.location.search);
  const nome = urlParams.get('nome');
  if (nome) {
    jogadorNome = nome;
    localStorage.setItem("jogadorNome", nome);
  }
  
  // Substituir nome genérico
  document.querySelectorAll(".nome-penelope").forEach(el => {
    if (el.textContent === "Penelope") {
      el.textContent = jogadorNome;
    }
  });
  
  atualizarPontos();

  // Mostrar revelacaoCena no início
  esconderTodasCenas();
  document.getElementById("revelacaoCena").style.display = "block";

  // CENA 1: Revelação do Pingente
  document.getElementById("aceitarDesculpa").addEventListener("click", () => {
    document.getElementById("revelacaoCena").style.display = "none";
    pontosReynold += 10;
    atualizarLocalStorage();
    mostrarMensagem("<p><strong>Reynold</strong> suspira aliviado, seus ombros relaxam.</p><p><em>Afeição +10</em></p>");
    document.getElementById("fugaCena").style.display = "block";
  });

  document.getElementById("recusarDesculpa").addEventListener("click", () => {
    document.getElementById("revelacaoCena").style.display = "none";
    pontosReynold -= 5;
    atualizarLocalStorage();
    mostrarMensagem("<p><strong>Reynold</strong> cerra os punhos, sua expressão se fecha.</p><p><em>Afeição -5</em></p>");
    document.getElementById("fugaCena").style.display = "block";
  });

  // CENA 2: Fuga pela Janela
  document.getElementById("pularReynold").addEventListener("click", () => {
    document.getElementById("fugaCena").style.display = "none";
    pontosReynold += 8;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> te segura com firmeza. <em>『Eu não ia deixar você cair.』</em></p><p><em>Afeição +8</em></p>");
    document.getElementById("cenaDesafio").style.display = "block";
  });

  document.getElementById("ficarcorda").addEventListener("click", () => {
    document.getElementById("fugaCena").style.display = "none";
    if (pontosReynold < 10) {
      gameOver("Você escorrega, cai e é descoberta pelos guardas. O Duque a tranca em seus aposimentos indefinidamente.");
    } else {
      pontosReynold += 5;
      atualizarLocalStorage();
      mostrarMensagem("<p><span class='nomereynold'>Reynold</span> sobe e te ajuda a subir de volta. <em>『Você é teimosa demais.』</em></p><p><em>Afeição +5</em></p>");
      document.getElementById("cenaDesafio").style.display = "block";
    }
  });

  // CENA 3: Festival - Desafio
  document.getElementById("aceitarDesafio").addEventListener("click", () => {
    document.getElementById("cenaDesafio").style.display = "none";
    pontosReynold += 7;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> sorri, admirado com sua coragem.</p><p><em>Afeição +7</em></p>");
    document.getElementById("cenaAparte").style.display = "block";
  });

  document.getElementById("observarDesafio").addEventListener("click", () => {
    document.getElementById("cenaDesafio").style.display = "none";
    pontosReynold += 12;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> se exibe para você, acertando todos os alvos.</p><p><em>Afeição +12</em></p>");
    document.getElementById("cenaAparte").style.display = "block";
  });

  // CENA 4: Momento de Conexão
  document.getElementById("aceitarElogio").addEventListener("click", () => {
    document.getElementById("cenaAparte").style.display = "none";
    pontosReynold += 15;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> cora ligeiramente, surpreso por sua reação gentil.</p><p><em>Afeição +15</em></p>");
    document.getElementById("cenaTransicao").style.display = "block";
  });

  document.getElementById("respostaSarcastica").addEventListener("click", () => {
    document.getElementById("cenaAparte").style.display = "none";
    if (pontosReynold < 10) {
      gameOver("Sua atitude sarcástica afasta Reynold definitivamente. Ele some no festival e evita você a partir de então.");
    } else {
      pontosReynold -= 10;
      atualizarLocalStorage();
      mostrarMensagem("<p><span class='nomereynold'>Reynold</span> revira os olhos, mas há um leve sorriso em seus lábios.</p><p><em>Afeição -10</em></p>");
      document.getElementById("cenaTransicao").style.display = "block";
    }
  });

  // CENA 5: Transição para a Caçada
  document.getElementById("continuarCacada").addEventListener("click", () => {
    document.getElementById("cenaTransicao").style.display = "none";
    document.getElementById("cenaCacada").style.display = "block";
  });

  // CENA 6: A Caçada
  document.getElementById("obedecerReynold").addEventListener("click", () => {
    document.getElementById("cenaCacada").style.display = "none";
    pontosReynold += 20;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> fica aliviado e impressionado por você ter confiado nele.</p><p><em>Afeição +20</em></p>");
    document.getElementById("cenaCarruagem").style.display = "block";
  });

  document.getElementById("ajudarReynold").addEventListener("click", () => {
    document.getElementById("cenaCacada").style.display = "none";
    if (pontosReynold < 30) {
      gameOver("Sua tentativa de ajudar distrai Reynold. O javali os ataca e ambos ficam gravemente feridos.");
    } else {
      pontosReynold += 5;
      atualizarLocalStorage();
      mostrarMensagem("<p><span class='nomereynold'>Reynold</span> fica irritado, mas admira sua coragem.</p><p><em>Afeição +5</em></p>");
      document.getElementById("cenaCarruagem").style.display = "block";
    }
  });

  // CENA 7: Consequências na Carruagem
  document.getElementById("defenderReynold").addEventListener("click", () => {
    document.getElementById("cenaCarruagem").style.display = "none";
    pontosReynold += 25;
    atualizarLocalStorage();
    mostrarMensagem("<p>Você defende Reynold perante o Duque. Ele te olha com admiração e gratidão.</p><p><em>Afeição +25</em></p>");
    document.getElementById("cenaConfronto").style.display = "block";
  });

  document.getElementById("calarReynold").addEventListener("click", () => {
    document.getElementById("cenaCarruagem").style.display = "none";
    pontosReynold -= 15;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> fica visivelmente decepcionado com sua reação.</p><p><em>Afeição -15</em></p>");
    document.getElementById("cenaConfronto").style.display = "block";
  });

  // CENA 8: Confronto Final
  document.getElementById("aceitarConfissao").addEventListener("click", () => {
    document.getElementById("cenaConfronto").style.display = "none";
    pontosReynold += 30;
    atualizarLocalStorage();
    setTimeout(exibirFinal, 1000);
  });

  document.getElementById("negarConfissao").addEventListener("click", () => {
    document.getElementById("cenaConfronto").style.display = "none";
    pontosReynold -= 20;
    atualizarLocalStorage();
    setTimeout(exibirFinal, 1000);
  });
});