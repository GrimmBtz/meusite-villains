let pontosReynold = parseInt(localStorage.getItem("pontosReynold")) || 0;

const atualizarPontos = () => {
  document.getElementById("pontosReynold").innerText = `Afeição Reynold: ${pontosReynold}`;
};

const mostrarMensagem = (html) => {
  const caixa = document.getElementById("mensagemResultado");
  caixa.innerHTML = html;
  caixa.style.display = "block";
  setTimeout(() => {
    caixa.style.display = "none";
  }, 3000);
};

const mostrarCena = (id) => {
  document.querySelectorAll("section").forEach(section => {
    section.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
};

const atualizarLocalStorage = () => {
  localStorage.setItem("pontosReynold", pontosReynold);
  atualizarPontos();
};

const gameOver = (mensagem) => {
  mostrarCena("gameOver");
  document.getElementById("gameOverTexto").innerText = mensagem;
};

const exibirFinal = () => {
  const final = document.getElementById("dialogoFinal");
  final.innerHTML = pontosReynold >= 25
    ? `<p><span class="nomereynold">Reynold</span> sorri para você. <em>"Então... É isso. Chegamos. Foi legal, tá?"</em></p>`
    : `<p><span class="nomereynold">Reynold</span> evita contato visual. <em>"É isso. Não conte a ninguém."</em></p>`;
};

document.addEventListener("DOMContentLoaded", () => {
  atualizarPontos();
  mostrarCena("revelacaoCena");

  // CENA 1
  document.getElementById("aceitarDesculpa").addEventListener("click", () => {
    pontosReynold += 5;
    atualizarLocalStorage();
    mostrarMensagem("<p><strong>Reynold</strong> suspira, aliviado.</p><p><em>Afeição +5</em></p>");
    mostrarCena("fugaCena");
  });

  document.getElementById("recusarDesculpa").addEventListener("click", () => {
    pontosReynold -= 5;
    atualizarLocalStorage();
    mostrarMensagem("<p><strong>Reynold</strong> fecha a expressão. <em>Afeição -5</em></p>");
    mostrarCena("fugaCena");
  });

  // CENA 2
  document.getElementById("pularReynold").addEventListener("click", () => {
    pontosReynold += 2;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> te segura com firmeza. <em>“Viu só? Eu disse.”</em></p><p><em>Afeição +2</em></p>");
    mostrarCena("cenaDesafio");
  });

  document.getElementById("ficarcorda").addEventListener("click", () => {
    if (pontosReynold < 0) {
      gameOver("Você escorrega, cai e é descoberta. GAME OVER.");
    } else {
      pontosReynold += 5;
      atualizarLocalStorage();
      mostrarMensagem("<p><span class='nomereynold'>Reynold</span> te agarra no ar. <em>“Você não tem jeito.”</em></p><p><em>Afeição +5</em></p>");
      mostrarCena("cenaDesafio");
    }
  });

  // CENA 3
  document.getElementById("aceitarDesafio").addEventListener("click", () => {
    pontosReynold += 2;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> ama sua coragem.</p><p><em>Afeição +2</em></p>");
    mostrarCena("cenaAparte");
  });

  document.getElementById("observarDesafio").addEventListener("click", () => {
    pontosReynold += 5;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> ainda tenta te impressionar.</p><p><em>Afeição +5</em></p>");
    mostrarCena("cenaAparte");
  });

  // CENA 4
  document.getElementById("aceitarElogio").addEventListener("click", () => {
    pontosReynold += 3;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> começa a ver você diferente.</p><p><em>Afeição +3</em></p>");
    mostrarCena("cenaFinal");
    exibirFinal();
  });

  document.getElementById("respostaSarcástica").addEventListener("click", () => {
    pontosReynold -= 10;
    atualizarLocalStorage();
    if (pontosReynold < 0) {
      gameOver("Sua atitude o afasta. Ele some no festival. GAME OVER.");
    } else {
      mostrarMensagem("<p><span class='nomereynold'>Reynold</span> revira os olhos. <em>“Você podia tentar ser gentil.”</em></p><p><em>Afeição -10</em></p>");
      mostrarCena("cenaFinal");
      exibirFinal();
    }
  });
});
