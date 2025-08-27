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

const atualizarLocalStorage = () => {
 localStorage.setItem("pontosReynold", pontosReynold);
 atualizarPontos();
};

const gameOver = (mensagem) => {
 document.querySelectorAll("section").forEach(section => {
  section.style.display = "none";
 });
 document.getElementById("gameOver").style.display = "block";
 document.getElementById("gameOverTexto").innerText = mensagem;
};

// Esta função irá exibir o final do jogo com base na pontuação.
const exibirFinal = () => {
 document.querySelectorAll("section").forEach(section => {
  section.style.display = "none";
 });
 document.getElementById("pontosReynold").style.display = "none";
 document.getElementById("mensagemResultado").style.display = "none";

 if (pontosReynold >= 25) {
  document.getElementById("finalFeliz").style.display = "block";
 } else if (pontosReynold >= 5) {
  document.getElementById("finalNormal").style.display = "block";
 } else {
  document.getElementById("finalRuim").style.display = "block";
 }
};

document.addEventListener("DOMContentLoaded", () => {
 atualizarPontos();

 // Mostrar revelacaoCena no início
 document.querySelectorAll("section").forEach(section => {
  section.style.display = "none";
 });
 document.getElementById("revelacaoCena").style.display = "block";

 // CENA 1
 document.getElementById("aceitarDesculpa").addEventListener("click", () => {
  pontosReynold += 5;
  atualizarLocalStorage();
  mostrarMensagem("<p><strong>Reynold</strong> suspira, aliviado.</p><p><em>Afeição +5</em></p>");
  document.getElementById("revelacaoCena").style.display = "none";
  document.getElementById("fugaCena").style.display = "block";
});

 document.getElementById("recusarDesculpa").addEventListener("click", () => {
  pontosReynold -= 10;
  atualizarLocalStorage();
  mostrarMensagem("<p><strong>Reynold</strong> fecha a expressão. <em>Afeição -10</em></p>");
  document.getElementById("revelacaoCena").style.display = "none";
  document.getElementById("fugaCena").style.display = "block";
});

 // segunda cEna 
 document.getElementById("pularReynold").addEventListener("click", () => {
  pontosReynold += 2;
  atualizarLocalStorage();
  mostrarMensagem("<p><span class='nomereynold'>Reynold</span> te segura com firmeza. <em>“Viu só? Eu disse.”</em></p><p><em>Afeição +2</em></p>");
  document.getElementById("fugaCena").style.display = "none";
  document.getElementById("cenaDesafio").style.display = "block";
 });

 document.getElementById("ficarcorda").addEventListener("click", () => {
  if (pontosReynold < 0) {
   gameOver("Você escorrega, cai e é descoberta. GAME OVER.");
  } else {
   pontosReynold += 5;
   atualizarLocalStorage();
   mostrarMensagem("<p><span class='nomereynold'>Reynold</span> te agarra no ar. <em>“Você não tem jeito.”</em></p><p><em>Afeição +5</em></p>");
  document.getElementById("fugaCena").style.display = "none";
   document.getElementById("cenaDesafio").style.display = "block";
  }
 });

 // CENA tres
 document.getElementById("aceitarDesafio").addEventListener("click", () => {
  pontosReynold += 2;
  atualizarLocalStorage();
  mostrarMensagem("<p><span class='nomereynold'>Reynold</span> ama sua coragem.</p><p><em>Afeição +2</em></p>");
  document.getElementById("cenaDesafio").style.display = "none";
  document.getElementById("cenaAparte").style.display = "block";
 });

 document.getElementById("observarDesafio").addEventListener("click", () => {
 pontosReynold += 5;
 atualizarLocalStorage();
 mostrarMensagem("<p><span class='nomereynold'>Reynold</span> ainda tenta te impressionar.</p><p><em>Afeição +5</em></p>");
 document.getElementById("cenaDesafio").style.display = "none";
  document.getElementById("cenaAparte").style.display = "block";
 });

 // CENA 4
 document.getElementById("aceitarElogio").addEventListener("click", () => {
  pontosReynold += 3;
  atualizarLocalStorage();
  mostrarMensagem("<p><span class='nomereynold'>Reynold</span> começa a ver você diferente.</p><p><em>Afeição +3</em></p>");
  document.getElementById("cenaAparte").style.display = "none";
  document.getElementById("cenaTransicao").style.display = "block";
 });

 document.getElementById("respostaSarcástica").addEventListener("click", () => {
  pontosReynold -= 12;
  atualizarLocalStorage();
  if (pontosReynold < 0) {
   gameOver("Sua atitude o afasta. Ele some no festival. GAME OVER.");
 } else {
  mostrarMensagem("<p><span class='nomereynold'>Reynold</span> revira os olhos. <em>“Você podia tentar ser gentil.”</em></p><p><em>Afeição -12</em></p>");
   document.getElementById("cenaAparte").style.display = "none";
   document.getElementById("cenaTransicao").style.display = "block";
  }
 });
  // CENA 5
  document.getElementById("continuarCacada").addEventListener("click", () => {
    document.getElementById("cenaTransicao").style.display = "none";
    document.getElementById("cenaCacada").style.display = "block";
  });

  // CENA 6 - Caçada
  document.getElementById("obedecerReynold").addEventListener("click", () => {
    pontosReynold += 15;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> fica surpreso e satisfeito por você ter fugido como ele ordenou. <em>Afeição +15</em></p>");
    document.getElementById("cenaCacada").style.display = "none";
    document.getElementById("cenaCarruagem").style.display = "block";
  });

  document.getElementById("ajudarReynold").addEventListener("click", () => {
    pontosReynold -= 10;
    atualizarLocalStorage();
    gameOver("Sua tentativa de ajuda o confunde, fazendo-o hesitar. Vocês são atacados e capturados. GAME OVER.");
  });

  // CENA 7 - Carruagem
  document.getElementById("defenderReynold").addEventListener("click", () => {
    pontosReynold += 20;
    atualizarLocalStorage();
    mostrarMensagem("<p>Você o defende e assume a culpa pelo incidente. <span class='nomereynold'>Reynold</span> fica chocado com suas palavras. Ele te olha com gratidão. <em>Afeição +20</em></p>");
    document.getElementById("cenaCarruagem").style.display = "none";
    setTimeout(exibirFinal, 1000);
  });

  document.getElementById("calarReynold").addEventListener("click", () => {
    pontosReynold -= 5;
    atualizarLocalStorage();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> lança um olhar de decepção em sua direção. <em>Afeição -5</em></p>");
    document.getElementById("cenaCarruagem").style.display = "none";
    setTimeout(exibirFinal, 1000);
  });
});