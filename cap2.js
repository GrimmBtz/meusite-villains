let pontosCallisto = 0;

// Atualiza o contador de afeição
const atualizarPontos = () => {
  document.getElementById("pontosCallisto").innerText = "Afeição Callisto Regulos: " + pontosCallisto;
}

// Mostra o texto da cena atual
const mostrarMensagem = (texto) => {
  document.getElementById("mensagemCena").innerHTML = texto;
}

// Referência de seções
const callistoCena = document.getElementById("Callisto");
const vinterCena = document.getElementById("encontroVinter");

// Botões iniciais
const btnArFresco = document.getElementById("arFesco");
const btnFicarFesta = document.getElementById("ficarFesta");

// Botões de resposta a Callisto
const btnRespostaEducada = document.getElementById("respostaEducada");
const btnRespostaCalada = document.getElementById("respostaCalada");
const btnRespostaProvocacao = document.getElementById("respostaProvocacao");

// Botões de Vinter
const btnVinterAceitar = document.getElementById("vinterAceitar");
const btnVinterPerguntar = document.getElementById("vinterPerguntar");
const btnVinterIgnorar = document.getElementById("vinterIgnorar");

// INÍCIO: Opções da festa
btnArFresco.addEventListener("click", () => {
  // Oculta os botões iniciais
  btnArFresco.style.display = "none";
  btnFicarFesta.style.display = "none";

  mostrarMensagem(`
    <p>Você começa a caminhar pelo LABIRINTO DO JARDIM REAL, quando de repente <strong>Callisto</strong> aparece:</p>
    <p>'Me perguntava que tipo de rata veio espreitar neste lugar...'</p>
    <p>'Por acaso, não é a cachorra louca da FAMÍLIA ECKHART?'</p>
    <p><em>Você sente o frio do aço em sua garganta. Ele segura uma espada curta, o olhar cruel e curioso.</em></p>
  `);

  callistoCena.style.display = "block";
});

btnFicarFesta.addEventListener("click", () => {
  btnArFresco.style.display = "none";
  btnFicarFesta.style.display = "none";

  mostrarMensagem("<p>Você permanece na festa, tentando se manter invisível. Nada acontece... Mas você sente que perdeu algo importante.</p>");
});

// RESPOSTAS a Callisto
btnRespostaEducada.addEventListener("click", () => {
  pontosCallisto += 0;
  atualizarPontos();
  mostrarMensagem(`
    <p><strong>Penelope:</strong> "Não foi minha intenção, Alteza... Por favor, me perdoe."</p>
    <p><strong>Callisto:</strong> "Fique esperta da próxima vez. O jardim não perdoa tolos."</p>
  `);
  callistoCena.style.display = "none";
});

btnRespostaCalada.addEventListener("click", () => {
  pontosCallisto -= 2;
  atualizarPontos();
  mostrarMensagem(`
    <p>Penelope mantém silêncio absoluto, os olhos fixos nos dele, desafiadora.</p>
    <p><strong>Callisto:</strong> <em>"Interessante... Não tem medo, hein? Então será sua última escolha."</em></p>
    <p><strong><em>GAME OVER:</em></strong> Você foi degolada por Callisto.</p>
  `);
  callistoCena.style.display = "none";
});

btnRespostaProvocacao.addEventListener("click", () => {
  pontosCallisto += 1;
  atualizarPontos();
  mostrarMensagem(`
    <p><strong>Penelope:</strong> <em>"EU... EU-EU, EU GOSTO DE VOCÊ!"</em></p>
    <p><strong>Callisto:</strong> <em>"Você é louca... mas talvez essa loucura seja sua força."</em></p>
    <p><em>"Na próxima vez que nos encontrarmos, explique direitinho esse sentimento... Agora pode ir."</em></p>
  `);
  callistoCena.style.display = "none";
  mostrarCenaVinter();
});

// CENA VINTER
function mostrarCenaVinter() {
  vinterCena.style.display = "block";
  document.getElementById("textoVinter").innerHTML = `
    <p><em>Você avança pelo labirinto, a dor lateja como lembrança constante.</em></p>
    <p><strong>Vinter:</strong> "Isso parece pior do que posso tratar sem ajuda, vou chamar os médicos para você."</p>
    <p><strong>Penelope:</strong> "Não precisa de médico."</p>
    <p><strong>Vinter:</strong> "Então aceite esse lenço mágico pelo menos."</p>
  `;
}

// Opções de Vinter
btnVinterAceitar.addEventListener("click", () => {
  mostrarMensagem(`
    <p><strong>Penelope:</strong> Aceita o pano e o coloca no pescoço na ferida</p>
    <p><strong>Vinter:</strong> "Então escolha viver."</p>
  `);
  vinterCena.style.display = "none";
   document.getElementById("continuar").style.display = "block";
});

btnVinterPerguntar.addEventListener("click", () => {
  mostrarMensagem(`
    <p><strong>Penelope:</strong> "O que é este pano... mágica?"</p>
    <p><strong>Vinter:</strong> "Algo muito antigo. Não é para todos."</p>
  `);
  vinterCena.style.display = "none";
});

btnVinterIgnorar.addEventListener("click", () => {
  mostrarMensagem(`
    <p><strong>Vinter:</strong> "Recuse sua salvação e aceite sua consequência."</p>
    <p><em>Mesmo assim, ele coloca o pano sobre uma pedra próxima. Então desaparece.</em></p>
  `);
  vinterCena.style.display = "none";
});
