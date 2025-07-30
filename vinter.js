let pontosVinter = 0;

const atualizarPontos = () => {
  document.getElementById("pontosVinter").innerText = "Afeição Vinter: " + pontosVinter;
}

const mostrarMensagem = (texto) => {
  document.getElementById("mensagemCena").innerHTML = texto;
}

// Referências das seções e botões
const inicioCena = document.getElementById("inicioCena");
const esconderijoCena = document.getElementById("esconderijoCena");
const vinterAparece = document.getElementById("vinterAparece");
const btnContinuarVinter = document.getElementById("btnContinuarVinter");

const btnAceitarConvite = document.getElementById("aceitarConvite");
const btnRecusarConvite = document.getElementById("recusarConvite");
const btnAproximarCriancas = document.getElementById("aproximarCriancas");
const btnResponderApresentar = document.getElementById("responderApresentar");
const btnResponderSilencio = document.getElementById("responderSilencio");
const btnResponderFugir = document.getElementById("responderFugir");

// Fluxo do jogo

btnAceitarConvite.addEventListener("click", () => {
  inicioCena.style.display = "none";
  esconderijoCena.style.display = "block";
  mostrarMensagem("Você sente uma energia estranha, e de repente é teleportada para um esconderijo secreto da Guilda Coelho Branco.");
});

btnRecusarConvite.addEventListener("click", () => {
  mostrarMensagem("Você ignora o convite. Talvez seja melhor evitar problemas por enquanto...");
});

btnAproximarCriancas.addEventListener("click", () => {
  esconderijoCena.style.display = "none";
  vinterAparece.style.display = "block";
  mostrarMensagem("As crianças te olham assustadas, parando o que estavam fazendo. Você nota o baú congelado que estavam tentando abrir, coberto por uma aura mágica. De repente, Vinter aparece mascarado, encarando você com um olhar ameaçador.");
});

btnResponderApresentar.addEventListener("click", () => {
  pontosVinter += 2;
  atualizarPontos();
  mostrarMensagem(`
    <p><strong>Penelope:</strong> "Eu sou Penelope. Vim porque recebi seu convite."</p>
    <p><strong>Vinter:</strong> "Hm... Não esperava sua presença aqui tão cedo. Fique atenta. Nem tudo é o que parece."</p>
    <p>Ele se afasta lentamente, ainda observando você com desconfiança.</p>
  `);
  vinterAparece.style.display = "none";
  btnContinuarVinter.style.display = "block";
  // Aqui você pode adicionar próximo passo do roteiro
});

btnResponderSilencio.addEventL
