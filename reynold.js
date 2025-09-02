let pontosReynold = parseInt(localStorage.getItem("pontosReynold")) || 0;
let jogadorNome = localStorage.getItem("jogadorNome") || "Penelope";

const atualizarPontos = () => {
  document.getElementById("pontosReynold").innerText = `Aprovação de Reynold: ${pontosReynold}`;
  document.getElementById("progressoBar").style.width = `${pontosReynold}%`;
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

const mostrarCena = (idCena) => {
  esconderTodasCenas();
  const cena = document.getElementById(idCena);
  if (cena) {
    cena.style.display = "block";
  }
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
    document.getElementById("finalBom").style.display = "block";
  } else if (pontosReynold >= 50) {
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
    mostrarCena("fugaCena");
    pontosReynold += 10;
    atualizarLocalStorage();
    mostrarMensagem("<p><strong>Reynold</strong> suspira aliviado, seus ombros relaxam.</p><p><em>Aprovação +10</em></p>");
  });

  document.getElementById("recusarDesculpa").addEventListener("click", () => {
    mostrarCena("fugaCena");
    pontosReynold -= 5;
    atualizarLocalStorage();
    mostrarMensagem("<p><strong>Reynold</strong> cerra os punhos, sua expressão se fecha.</p><p><em>Aprovação -5</em></p>");
  });

  // CENA 2: Fuga pela Janela
  document.getElementById("pularReynold").addEventListener("click", () => {
    mostrarCena("cenaDesafio");
    pontosReynold += 8;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> te segura com firmeza. <em>『Eu não ia deixar você cair.』</em></p><p><em>Aprovação +8</em></p>");
  });

  document.getElementById("ficarcorda").addEventListener("click", () => {
    if (pontosReynold < 10) {
      gameOver("Você escorrega, cai e é descoberta pelos guardas. O Duque a tranca em seus aposimentos indefinidamente.");
    } else {
      mostrarCena("cenaDesafio");
      pontosReynold += 5;
      atualizarLocalStorage();
      mostrarMensagem("<p><span class='nomereynold'>Reynold</span> sobe e te ajuda a subir de volta. <em>『Você é teimosa demais.』</em></p><p><em>Aprovação +5</em></p>");
    }
  });

  // CENA 3: Festival - Desafio
  document.getElementById("aceitarDesafio").addEventListener("click", () => {
    mostrarCena("cenaAparte");
    pontosReynold += 7;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> sorri, admirado com sua coragem.</p><p><em>Aprovação +7</em></p>");
  });

  document.getElementById("observarDesafio").addEventListener("click", () => {
    mostrarCena("cenaAparte");
    pontosReynold += 12;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> se exibe para você, acertando todos os alvos.</p><p><em>Aprovação +12</em></p>");
  });

  // CENA 4: Momento de Conexão
  document.getElementById("aceitarElogio").addEventListener("click", () => {
    mostrarCena("cenaTransicao");
    pontosReynold += 15;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> cora ligeiramente, surpreso por sua reação gentil.</p><p><em>Aprovação +15</em></p>");
  });

  document.getElementById("respostaSarcastica").addEventListener("click", () => {
    if (pontosReynold < 10) {
      gameOver("Sua atitude sarcástica afasta Reynold definitivamente. Ele some no festival e evita você a partir de então.");
    } else {
      mostrarCena("cenaTransicao");
      pontosReynold -= 10;
      atualizarLocalStorage();
      mostrarMensagem("<p><span class='nomereynold'>Reynold</span> revira os olhos, mas há um leve sorriso em seus lábios.</p><p><em>Aprovação -10</em></p>");
    }
  });

  // CENA 5: Transição para a Caçada
  document.getElementById("continuarCacada").addEventListener("click", () => {
    mostrarCena("cenaCacada");
  });

  // CENA 6: A Caçada
  document.getElementById("obedecerReynold").addEventListener("click", () => {
    mostrarCena("cenaCarruagem");
    pontosReynold += 20;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> fica aliviado e impressionado por você ter confiado nele.</p><p><em>Aprovação +20</em></p>");
  });

  document.getElementById("ajudarReynold").addEventListener("click", () => {
    if (pontosReynold < 30) {
      gameOver("Sua tentativa de ajudar distrai Reynold. O javali os ataca e ambos ficam gravemente feridos.");
    } else {
      mostrarCena("cenaCarruagem");
      pontosReynold += 5;
      atualizarLocalStorage();
      mostrarMensagem("<p><span class='nomereynold'>Reynold</span> fica irritado, mas admira sua coragem.</p><p><em>Aprovação +5</em></p>");
    }
  });

  // CENA 7: Consequências na Carruagem
  document.getElementById("defenderReynold").addEventListener("click", () => {
    mostrarCena("cenaConfronto");
    pontosReynold += 25;
    atualizarLocalStorage();
    mostrarMensagem("<p>Você defende Reynold perante o Duque. Ele te olha com admiração e gratidão.</p><p><em>Aprovação +25</em></p>");
  });

  document.getElementById("calarReynold").addEventListener("click", () => {
    mostrarCena("cenaConfronto");
    pontosReynold -= 15;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> fica visivelmente decepcionado com sua reação.</p><p><em>Aprovação -15</em></p>");
  });

  // CENA 8: Confronto Final
  document.getElementById("aceitarConfissao").addEventListener("click", () => {
    mostrarCena("cenaPresente");
    pontosReynold += 30;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> sorri aliviado, seus olhos brilham com esperança.</p><p><em>Aprovação +30</em></p>");
  });

  document.getElementById("negarConfissao").addEventListener("click", () => {
    if (pontosReynold < 20) {
      gameOver("Sua rejeição final faz Reynold desistir completamente de você. Ele parte para sempre.");
    } else {
      mostrarCena("cenaPresente");
      pontosReynold -= 20;
      atualizarLocalStorage();
      mostrarMensagem("<p><span class='nomereynold'>Reynold</span> parece ferido, mas ainda mantém esperança.</p><p><em>Aprovação -20</em></p>");
    }
  });

  // CENA 9: O Presente de Irmão
  document.getElementById("aceitarPresente").addEventListener("click", () => {
    mostrarCena("cenaBaile");
    pontosReynold += 15;
    atualizarLocalStorage();
    mostrarMensagem("<p>Você aceita o presente. <span class='nomereynold'>Reynold</span> sorri, aliviado e feliz.</p><p><em>Aprovação +15</em></p>");
  });

  document.getElementById("recusarPresente").addEventListener("click", () => {
    if (pontosReynold < 40) {
      gameOver("Reynold interpreta sua recusa como rejeição completa e se afasta para sempre.");
    } else {
      mostrarCena("cenaBaile");
      pontosReynold -= 10;
      atualizarLocalStorage();
      mostrarMensagem("<p>Você recusa gentilmente. <span class='nomereynold'>Reynold</span> parece decepcionado, mas compreensivo.</p><p><em>Aprovação -10</em></p>");
    }
  });

  // CENA 10: O Baile Familiar
  document.getElementById("aceitarDanca").addEventListener("click", () => {
    pontosReynold += 20;
    atualizarLocalStorage();
    setTimeout(exibirFinal, 1000);
  });

  document.getElementById("recusarDanca").addEventListener("click", () => {
    if (pontosReynold < 50) {
      gameOver("A rejeição pública humilha Reynold, que decide que nunca mais tentará se reconciliar.");
    } else {
      pontosReynold -= 15;
      atualizarLocalStorage();
      setTimeout(exibirFinal, 1000);
    }
  });
});