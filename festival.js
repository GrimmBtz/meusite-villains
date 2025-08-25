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
  mostrarMensagem("<p>Você decide não fugir. Mas sente que perdeu uma chance rara...</p> <strong>Tentar Novamente?</strong>");
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
   mostrarMensagem("<p>Você tenta ir com Reynold já que apareceu é atrapalhou seus planos de ir ao mercado de escravos para encontrar ickles, mas aparece<span class='nomederick'>Derick</span>'A onde vocês pensam que vão a está hora da noite assim? <span class='nomereynold'>Reynold</span>: A Penélope quer ir ao festival, então vou acompanhar ela com seu guarda costa. <span class='nomederick'>Derick</span>: Mas são necessário dois guarda costas, então irei junto com vocês ao festival '</p>");
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
  mostrarMensagem("<p><span class='nome-penelope'>Penelope:</span> 'Eu não preciso de babá!'</p> <p>Você tenta fugir de <span class='nome-derick'>Derrick</span>, mas ele a intercepta no corredor, a mão firme em seu braço. <em>“Acha mesmo que pode me enganar?”</em> Ele a arrasta de volta para o quarto. Três dias de castigo. E sem janta.</p>");
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
  mostrarMensagem("<p>O pânico te paralisa. Você não tem o dinheiro. O leilão continua, e <span class='nomeickles'>Ickles</span> é vendido para outro. Você falhou. Sua única chance de sobrevivência se foi.</p>");
  document.getElementById("mercadoEscravos").style.display = "none";
  document.getElementById("mensagemCentral").style.display = "block";
});

document.getElementById("cobrirPadrao").addEventListener("click", () => {
  mostrarMensagem("<p>Você cobre o lance com o valor justo. Os olhares se voltam para você, surpresos com sua ousadia.</p>");
  document.getElementById("mercadoEscravos").style.display = "none";
  document.getElementById("mensagemCentral").style.display = "block";
});

document.getElementById("negociarMercador").addEventListener("click", () => {
  mostrarMensagem("<p>Você se aproxima do mercador, tentando negociar um preço mais baixo. Ele te olha com desdém e ri. 'Você acha que eu vou vender este escravo por menos? Vaza, garota!'</p> <p>Você é expulsa do mercado. O leilão de <span class='nomeickles'>Ickles</span> continua, e ele é vendido para outro. Você falhou. </p>");
  document.getElementById("mercadoEscravos").style.display = "none";
  document.getElementById("mensagemCentral").style.display = "block";
});
