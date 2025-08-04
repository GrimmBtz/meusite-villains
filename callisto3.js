// Inicia pontuação
let pontosCallisto = parseInt(localStorage.getItem("callistoPontos")) || 0;

// Atualiza a pontuação no HTML
function atualizarPontosCallisto() {
  document.getElementById("pontosCallisto").textContent = "Afeição Callisto: " + pontosCallisto;
}

// Mostra a resposta e avança para próxima etapa
function mostrarResposta(texto) {
  document.getElementById("respostaTexto").innerHTML = texto;
  atualizarPontosCallisto();
  document.getElementById("inicioFloresta").style.display = "none";
  document.getElementById("callistoConfronto").style.display = "none";
  document.getElementById("respostaCena").style.display = "block";
}

// Botões da primeira cena
document.getElementById("resposta1").addEventListener("click", () => {
  pontosCallisto += 2;
  localStorage.setItem("callistoPontos", pontosCallisto);
  mostrarResposta('<p><strong>Callisto:</strong> <em>“Típico. Mas se quisesse morrer, teria deixado.”</em></p>');
});

document.getElementById("resposta2").addEventListener("click", () => {
  pontosCallisto += 3;
  localStorage.setItem("callistoPontos", pontosCallisto);
  mostrarResposta('<p><strong>Callisto:</strong> <em>“Não sei por quê. Talvez eu esteja entediado.”</em> Ele limpa a lâmina e te observa por um momento mais longo do que deveria.</p>');
});

document.getElementById("resposta3").addEventListener("click", () => {
  pontosCallisto += 1;
  localStorage.setItem("callistoPontos", pontosCallisto);
  mostrarResposta('<p><strong>Callisto:</strong> <em>“Cuide-se. Da próxima, talvez eu não esteja por perto.”</em></p>');
});

// Botão "Continuar"
document.getElementById("continuarConfronto").addEventListener("click", () => {
  document.getElementById("respostaCena").style.display = "none";
  document.getElementById("callistoConfronto").style.display = "block";
});

// Segunda cena: confrontos
document.getElementById("resposta4").addEventListener("click", () => {
  pontosCallisto -= 2;
  localStorage.setItem("callistoPontos", pontosCallisto);
  mostrarResposta('<p><strong>Callisto:</strong> <em>“Você os defende mesmo depois disso? Hmpf. Patético.”</em></p>');
});

document.getElementById("resposta5").addEventListener("click", () => {
  pontosCallisto += 10;
  localStorage.setItem("callistoPontos", pontosCallisto);
  mostrarResposta('<p><strong>Callisto:</strong> <em>“Pelo menos é honesta. A maioria aqui prefere fingir.”</em> Ele cruza os braços; o olhar suaviza por um segundo.</p>');
});

document.getElementById("resposta6").addEventListener("click", () => {
  pontosCallisto += 4;
  localStorage.setItem("callistoPontos", pontosCallisto);
  mostrarResposta('<p><strong>Callisto:</strong> <em>“Você é covarde... ou cautelosa. Ambas são melhores do que ingenuidade.”</em></p>');
});

// Atualiza a pontuação ao carregar a página
atualizarPontosCallisto();
