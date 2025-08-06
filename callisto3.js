let pontosCallisto = parseInt(localStorage.getItem("callistoPontos")) || 0;

// Elementos cena floresta
const inicioFloresta = document.getElementById("inicioFloresta");
const respostaCena = document.getElementById("respostaCena");
const callistoConfronto = document.getElementById("callistoConfronto");
const pontosCallistoElemento = document.getElementById("pontosCallisto");
const respostaTexto = document.getElementById("respostaTexto");

// Elementos cena banquete
const banqueteCena = document.getElementById("banqueteCena");
const banqueteResposta = document.getElementById("banqueteResposta");
const respostaBanqueteTexto = document.getElementById("respostaBanqueteTexto");
const pontosCallistoBanquete = document.getElementById("pontosCallistoBanquete");

// Botões cena floresta
const btnResposta1 = document.getElementById("resposta1");
const btnResposta2 = document.getElementById("resposta2");
const btnResposta3 = document.getElementById("resposta3");
const btnResposta4 = document.getElementById("resposta4");
const btnResposta5 = document.getElementById("resposta5");
const btnResposta6 = document.getElementById("resposta6");

// Botões cena banquete
const btnAceitarConvite = document.getElementById("aceitarConvite");
const btnRecusarConvite = document.getElementById("recusarConvite");
const btnIgnorarConvite = document.getElementById("ignorarConvite");

// Atualiza o display da afeição nas duas cenas
function atualizarPontosCallisto() {
  pontosCallistoElemento.textContent = "Afeição Callisto: " + pontosCallisto;
  pontosCallistoBanquete.textContent = "Afeição Callisto: " + pontosCallisto;
}

// Mostra resposta da primeira cena (floresta)
function mostrarRespostaPrimeiraCena(texto) {
  inicioFloresta.style.display = "none";
  respostaTexto.innerHTML = texto;
  respostaCena.style.display = "block";

  setTimeout(() => {
    respostaCena.style.display = "none";
    callistoConfronto.style.display = "block";
  }, 5000);
}

// Mostra resposta final da segunda cena (confronto)
function mostrarRespostaFinal(texto) {
  callistoConfronto.style.display = "none";
  respostaTexto.innerHTML = texto;
  respostaCena.style.display = "block";

  setTimeout(() => {
    respostaCena.style.display = "none";
    // Próxima cena (banquete)
    banqueteCena.style.display = "block";
  }, 5000);
}

// Mostra resposta do banquete (última cena aqui)
function mostrarRespostaBanquete(texto) {
  banqueteCena.style.display = "none";
  respostaBanqueteTexto.innerHTML = texto;
  banqueteResposta.style.display = "block";
  atualizarPontosCallisto();
}

// Eventos cena floresta - primeira interação
btnResposta1.addEventListener("click", () => {
  pontosCallisto += 2;
  localStorage.setItem("callistoPontos", pontosCallisto);
  atualizarPontosCallisto();
  mostrarRespostaPrimeiraCena(
    '<p><strong>Callisto:</strong> <em>“Típico. Mas se quisesse morrer, teria deixado.”</em></p>'
  );
});

btnResposta2.addEventListener("click", () => {
  pontosCallisto += 3;
  localStorage.setItem("callistoPontos", pontosCallisto);
  atualizarPontosCallisto();
  mostrarRespostaPrimeiraCena(
    '<p><strong>Callisto:</strong> <em>“Não sei por quê. Talvez eu esteja entediado.”</em> Ele limpa a lâmina e te observa por um momento mais longo do que deveria.</p>'
  );
});

btnResposta3.addEventListener("click", () => {
  pontosCallisto += 1;
  localStorage.setItem("callistoPontos", pontosCallisto);
  atualizarPontosCallisto();
  mostrarRespostaPrimeiraCena(
    '<p><strong>Callisto:</strong> <em>“Cuide-se. Da próxima, talvez eu não esteja por perto.”</em></p>'
  );
});

// Eventos cena floresta - segunda interação (confronto)
btnResposta4.addEventListener("click", () => {
  pontosCallisto -= 2;
  localStorage.setItem("callistoPontos", pontosCallisto);
  atualizarPontosCallisto();
  mostrarRespostaFinal(
    '<p><strong>Callisto:</strong> <em>“Você os defende mesmo depois disso? Hmpf.</em></p>'
  );
});

btnResposta5.addEventListener("click", () => {
  pontosCallisto -= 4;
  localStorage.setItem("callistoPontos", pontosCallisto);
  atualizarPontosCallisto();
  mostrarRespostaFinal(
    '<p><strong>Callisto:</strong> <em>“Não espero nada de irmãos como eles.”</em></p>'
  );
});

btnResposta6.addEventListener("click", () => {
  // pontosCallisto += 0; desnecessário
  localStorage.setItem("callistoPontos", pontosCallisto);
  atualizarPontosCallisto();
  mostrarRespostaFinal(
    '<p><strong>Callisto:</strong> <em>“O silêncio diz muito mais do que palavras vazias.”</em></p>'
  );
});

// Eventos cena banquete
btnAceitarConvite.addEventListener("click", () => {
  pontosCallisto += 5;
  localStorage.setItem("callistoPontos", pontosCallisto);
  mostrarRespostaBanquete(
    '<p><strong>Callisto:</strong> <em>“Assim que eu gosto.”</em> Ele te puxa gentilmente para perto.</p>'
  );
});

btnRecusarConvite.addEventListener("click", () => {
  pontosCallisto -= 3;
  localStorage.setItem("callistoPontos", pontosCallisto);
  mostrarRespostaBanquete(
    '<p><strong>Callisto:</strong> <em>“Suas prioridades são claras, mas eu esperava outra coisa.”</em></p>'
  );
});

btnIgnorarConvite.addEventListener("click", () => {
  pontosCallisto -= 1;
  localStorage.setItem("callistoPontos", pontosCallisto);
  mostrarRespostaBanquete(
    '<p><strong>Callisto:</strong> <em>“Ignorar é a pior resposta que poderia dar.”</em></p>'
  );
});
