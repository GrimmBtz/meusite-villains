// Atualiza mensagem da cena atual
const mostrarMensagem = (texto) => {
  document.getElementById("mensagemCentral").innerHTML = texto;
};

document.getElementById("usuarcortina").addEventListener("click", () => {
  document.getElementById("inicioFestival").style.display = "none";
  document.getElementById("fugaJanela").style.display = "block";
});

document.getElementById("buracomuro").addEventListener("click", () => {
  mostrarMensagem("<p>Você escapa pelo jardim silenciosamente. Mas uma patrulha te encontra. <strong>GAME OVER.</strong></p>");
});

document.getElementById("naofugir").addEventListener("click", () => {
  mostrarMensagem("<p>Você decide não fugir. Mas sente que perdeu uma chance rara...</p>");
});

// agora quando aparece o reynold
document.getElementById("pularReynold").addEventListener("click", () => {
  mostrarMensagem("<p><span class='nomereynold'>Reynold</span> te segura nos braços, como um herói. <em>“Viu só? Eu disse que pegava você.”</em></p>");
  document.getElementById("fugaJanela").style.display = "none";
  document.getElementById("missaoFestival").style.display = "block";
});

document.getElementById("ficarcorda").addEventListener("click", () => {
  mostrarMensagem("<p>Você escorrega e <span class='nomereynold'>Reynold</span> te agarra no ar, rindo como se fosse tudo uma brincadeira. <em>“Você não tem jeito mesmo.”</em></p>");
  document.getElementById("fugaJanela").style.display = "none";
  document.getElementById("missaoFestival").style.display = "block";
});

// aqui já é outra parte

document.getElementById("aceitarfestival").addEventListener("click", () => {
   mostrarMensagem("<p>Você tenta ir com Reynold já que apareceu é atrapalhou seus planos, mas aparece<span class='nomederick'>Derick</span>'A onde vocês pensam que vão a está hora da noite assim? <span class='nomereynold'>Reynold</span>: A Penélope quer ir ao festival, então vou acompanhar ela com seu guarda costa. <span class='nomederick'>Derick</span>: Mas são necessário dois guarda costas, então irei junto com vocês ao festival '</p>");
  document.getElementById("missaoFestival").style.display = "none";
  document.getElementById("encontroDerrick").style.display = "block";
});

document.getElementById("recusarfestival").addEventListener("click", () => {
  mostrarMensagem("<p><span class='nomereynold'>Reynold</span> cruza os braços, frustrado. <em>“Você realmente não tem espírito algum. Vai passar a vida trancada nesse castelo?”</em></p>");
  document.getElementById("missaoFestival").style.display = "none";
});

// Derick missão
document.getElementById("aceitarDerick").addEventListener("click", () => {
  document.getElementById("encontroDerrick").style.display = "none";
  document.getElementById("mensagemCentral").style.display = "none";
  document.getElementById("perdaIrmãos").style.display = "block";
});

document.getElementById("recusarDerick").addEventListener("click", () => {
  mostrarMensagem("<p>Você tenta fugir de <span class='nomederick'>Derick</span>, mas ele a intercepta no corredor. <em>“Acha mesmo que pode me enganar?”</em> Três dias de castigo. E sem janta.</p>");
  document.getElementById("encontroDerrick").style.display = "none";
});

// Missão Ickles
document.getElementById("aceitarIckles").addEventListener("click", () => {
  document.getElementById("perdaIrmãos").style.display = "none";
  document.getElementById("mercadoEscravos").style.display = "block";
});

document.getElementById("recusarIckles").addEventListener("click", () => {
  mostrarMensagem("<p><strong class='sistema'>Sistema:</strong> Missão crítica ignorada. O destino de <span class='nomeickles'>Ickles</span> agora está selado nas mãos de estranhos.</p>");
  document.getElementById("perdaIrmãos").style.display = "none";
  document.getElementById("mensagemCentral").style.display = "block";

});

// Leilão
document.getElementById("cobrir10x").addEventListener("click", () => {
  mostrarMensagem("<p>Você cobre o lance com dez vezes o valor. O salão silencia, surpreso com sua ousadia. <span class='nomeickles'>Ickles</span> olha para você, incrédulo, enquanto lágrimas surgem em seus olhos.</p>");
  document.getElementById("mercadoEscravos").style.display = "none";
  document.getElementById("mensagemCentral").style.display = "block";
});

document.getElementById("naoLance").addEventListener("click", () => {
  mostrarMensagem("<p><span class='nomeickles'>Ickles</span> é vendido para um estranho de olhar cruel. Missão falhou.</p>");
  document.getElementById("mercadoEscravos").style.display = "none";
  document.getElementById("mensagemCentral").style.display = "block";
});

document.getElementById("cobrirPadrao").addEventListener("click", () => {
  mostrarMensagem("<p>Você cobre o lance com o valor justo. Os olhares se voltam para você, surpresos com sua ousadia.</p>");
  document.getElementById("mercadoEscravos").style.display = "none";
  document.getElementById("mensagemCentral").style.display = "block";
});

document.getElementById("negociarMercador").addEventListener("click", () => {
  mostrarMensagem("<p>Você tenta negociar com o mercador. Ele cruza os braços e diz friamente: <em>“15 milhões, ou nada feito.”</em> Missão pendente...</p>");
  document.getElementById("mercadoEscravos").style.display = "none";
  document.getElementById("mensagemCentral").style.display = "block";
});
