let afeicao = 0;
const pontos = document.getElementById("pontosVinter");

// Atualiza o valor da afeição na tela
function atualizarAfeicao(valor) {
  afeicao += valor;
  pontos.innerText = "Afeição Vinter: " + afeicao;
}

// Esconde todas as seções com a classe historia-texto
function esconderTodas() {
  document.querySelectorAll("section.historia-texto").forEach(sec => sec.style.display = "none");
}

// Cena 1 botões
document.getElementById("verEspelho").addEventListener("click", () => {
  atualizarAfeicao(10);
  esconderTodas();
  document.getElementById("olharEspelho").style.display = "block";
});

document.getElementById("recusarVer").addEventListener("click", () => {
  atualizarAfeicao(-5);
  esconderTodas();
  document.getElementById("recusarEspelho").style.display = "block";
});

// Cena 2 botão continuar
document.getElementById("seguirDepoisOlhar").addEventListener("click", () => {
  esconderTodas();
  document.getElementById("posOlhar").style.display = "block";
});

// Cena 3 botão continuar
document.getElementById("seguirDepoisRecusar").addEventListener("click", () => {
  esconderTodas();
  document.getElementById("posRecusar").style.display = "block";
});

// Cena 4 botões
document.getElementById("aceitarSantuário").addEventListener("click", () => {
  atualizarAfeicao(20);
  esconderTodas();
  document.getElementById("fimAceito").style.display = "block";
});

document.getElementById("recusarSantuário").addEventListener("click", () => {
  atualizarAfeicao(-10);
  esconderTodas();
  document.getElementById("fimRecusado").style.display = "block";
});

// Cena 5 botões
document.getElementById("tentarNovamente").addEventListener("click", () => {
  atualizarAfeicao(5);
  esconderTodas();
  document.getElementById("olharEspelho").style.display = "block";
});

document.getElementById("fugirSantuário").addEventListener("click", () => {
  esconderTodas();
  document.getElementById("fimFugir").style.display = "block";
});
