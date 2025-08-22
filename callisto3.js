// Afeição inicial do Callisto. O valor é recuperado do armazenamento local para que o progresso seja mantido.
let pontosCallisto = parseInt(localStorage.getItem("callistoPontos")) || 0;

// Seleciona os elementos do HTML para a cena da floresta (primeira interação)
const inicioFloresta = document.getElementById("inicioFloresta");
const respostaCena = document.getElementById("respostaCena");
const pontosCallistoElemento = document.getElementById("pontosCallisto");
const respostaTexto = document.getElementById("respostaTexto");

// Seleciona os elementos para a cena de confronto com Callisto
const callistoConfronto = document.getElementById("callistoConfronto");

// Seleciona os elementos para a cena do banquete
const banqueteCena = document.getElementById("banqueteCena");
const banqueteResposta = document.getElementById("banqueteResposta");
const respostaBanqueteTexto = document.getElementById("respostaBanqueteTexto");
const pontosCallistoBanquete = document.getElementById("pontosCallistoBanquete");

// Seleciona os elementos para a cena da caçada (NOVO)
const cenaCacada = document.getElementById("cenaCacada");
const cacadaRespostas = document.getElementById("cacadaRespostas");
const textoCacada = document.getElementById("textoCacada");
const pontosCacada = document.getElementById("pontosCacada");

// Botões da cena floresta (primeira interação)
const btnResposta1 = document.getElementById("resposta1");
const btnResposta2 = document.getElementById("resposta2");
const btnResposta3 = document.getElementById("resposta3");
const btnResposta4 = document.getElementById("resposta4");
const btnResposta5 = document.getElementById("resposta5");
const btnResposta6 = document.getElementById("resposta6");

// Botões da cena banquete
const btnAceitarConvite = document.getElementById("aceitarConvite");
const btnRecusarConvite = document.getElementById("recusarConvite");
const btnIgnorarConvite = document.getElementById("ignorarConvite");
const btnAvancarBanquete = document.getElementById("avancarBanquete");

// Botões da caçada (NOVO)
const btnSeguirCallisto = document.getElementById("btnSeguirCallisto");
const btnFicarSegura = document.getElementById("btnFicarSegura");

// Função para atualizar o texto da afeição em todas as cenas
function atualizarPontosCallisto() {
  pontosCallistoElemento.textContent = "Afeição Callisto: " + pontosCallisto;
  pontosCallistoBanquete.textContent = "Afeição Callisto: " + pontosCallisto;
  pontosCacada.textContent = "Afeição Callisto: " + pontosCallisto;
}

// Mostra a resposta da primeira cena (floresta) e avança para o confronto
function mostrarRespostaPrimeiraCena(texto) {
  inicioFloresta.style.display = "none";
  respostaTexto.innerHTML = texto;
  respostaCena.style.display = "block";

  // Define um tempo de 5 segundos antes de avançar para a próxima cena
  setTimeout(() => {
    respostaCena.style.display = "none";
    callistoConfronto.style.display = "block";
  }, 5000);
}

// Mostra a resposta final do confronto e avança para o banquete
function mostrarRespostaFinal(texto) {
  callistoConfronto.style.display = "none";
  respostaTexto.innerHTML = texto;
  respostaCena.style.display = "block";

  // Define um tempo de 5 segundos antes de avançar para a próxima cena
  setTimeout(() => {
    respostaCena.style.display = "none";
    banqueteCena.style.display = "block";
  }, 5000);
}

// Mostra a resposta do banquete (última cena antes da caçada)
function mostrarRespostaBanquete(texto) {
  banqueteCena.style.display = "none";
  respostaBanqueteTexto.innerHTML = texto;
  banqueteResposta.style.display = "block";
  atualizarPontosCallisto();
}

// Mostra a resposta da caçada (NOVO)
function mostrarRespostaCacada(texto) {
  cenaCacada.style.display = "none";
  textoCacada.innerHTML = texto;
  cacadaRespostas.style.display = "block";
  atualizarPontosCallisto();
}

// Eventos da cena da floresta - primeira interação
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

// Eventos da cena da floresta - segunda interação (confronto)
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
  localStorage.setItem("callistoPontos", pontosCallisto);
  atualizarPontosCallisto();
  mostrarRespostaFinal(
    '<p><strong>Callisto:</strong> <em>“O silêncio diz muito mais do que palavras vazias.”</em></p>'
  );
});

// Eventos da cena do banquete
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

// Evento para avançar do banquete para a caçada
btnAvancarBanquete.addEventListener("click", () => {
    banqueteResposta.style.display = "none";
    cenaCacada.style.display = "block";
    atualizarPontosCallisto();
});

// Eventos da cena da caçada (NOVO)
btnSeguirCallisto.addEventListener("click", () => {
    pontosCallisto += 15;
    localStorage.setItem("callistoPontos", pontosCallisto);
    mostrarRespostaCacada(
        `<p><strong>Callisto:</strong> <em>"Ah, que bom. Pensei que teria que te arrastar."</em> Ele sorri, um brilho perigoso em seus olhos. <em>"Vamos ver se você é tão esperta quanto parece."</em></p><p>Você encontra o monstro e luta ao lado dele. <strong>Afeição +15</strong></p>`
    );
});

btnFicarSegura.addEventListener("click", () => {
    pontosCallisto -= 20;
    localStorage.setItem("callistoPontos", pontosCallisto);
    mostrarRespostaCacada(
        `<p><strong>Penelope:</strong> <em>"Não, obrigada. Prefiro ficar onde é seguro."</em></p><p>A expressão de Callisto congela. <em>"Certo. Que pena. Pensei que teríamos diversão juntos."</em> Ele dá as costas e vai embora, deixando-a para trás. <strong>Afeição -20</strong></p>`
    );
});