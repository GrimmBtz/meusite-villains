// Função para mostrar mensagens finais
const mostrarMensagem = (mensagem) => {
  const caixa = document.getElementById("finalRotaVinter");
  caixa.innerHTML = mensagem;
  caixa.style.display = "block";
};

// Convite do Coelho
document.getElementById("aceitarConviteVinter").addEventListener("click", () => {
  document.getElementById("inicioVinter").style.display = "none";
  document.getElementById("chegadaClube").style.display = "block";
});

document.getElementById("ignorarConviteVinter").addEventListener("click", () => {
  mostrarMensagem("<p>Você ignora o coelho. Mas à meia-noite, a janela explode em magia. Alguém não gostou da sua recusa.</p><p><strong>Fim Prematuro.</strong></p>");
  document.getElementById("inicioVinter").style.display = "none";
});

// Chegada ao Clube
document.getElementById("responderMisteriosa").addEventListener("click", () => {
  document.getElementById("chegadaClube").style.display = "none";
  document.getElementById("interacaoVinter").style.display = "block";
});

document.getElementById("fugirClube").addEventListener("click", () => {
  mostrarMensagem("<p>Você tenta fugir... mas Vinter fecha a sala com gelo. <em>“Agora você me deve explicações.”</em></p>");
  document.getElementById("chegadaClube").style.display = "none";
});

// Interação com Vinter
document.getElementById("revelarIdentidade").addEventListener("click", () => {
  mostrarMensagem("<p>Você retira a máscara. Vinter arregala os olhos: <em>“Penelope Eckhart... por que está aqui?”</em></p><p>Mesmo surpreso, ele parece aliviado.</p><p><strong>Afeição +10</strong></p>");
  document.getElementById("interacaoVinter").style.display = "none";
  atualizarPontos(10);
});

document.getElementById("manterSegredo").addEventListener("click", () => {
  mostrarMensagem("<p>Você recusa mostrar quem é. <em>“Talvez um dia descubra...”</em></p><p>Vinter ri de leve. <strong>“Aparentemente, gosto de enigmas.”</strong></p><p><strong>Afeição +5</strong></p>");
  document.getElementById("interacaoVinter").style.display = "none";
  atualizarPontos(5);
});

// Pontuação de afeição
let afeicaoVinter = 0;
function atualizarPontos(valor) {
  afeicaoVinter += valor;
  document.getElementById("pontosVinter").textContent = `Afeição Vinter: ${afeicaoVinter}`;
}
