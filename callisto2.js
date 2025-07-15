let pontosCallisto = parseInt(localStorage.getItem("callistoPontos")) || 0;

const respostaEscolha = document.getElementById("respostaEscolha");
const displayPontos = document.getElementById("pontosCallisto");

function atualizarPontos() {
    displayPontos.innerText = "Afeição Callisto: " + pontosCallisto;
}

atualizarPontos();

document.getElementById("aceitarBebida").addEventListener("click", () => {
    pontosCallisto += 5;
    localStorage.setItem("callistoPontos", pontosCallisto);
    respostaEscolha.innerText = "Você aceita e sorri... mas sente seu coração acelerar. Amor ou veneno?";
    atualizarPontos();
});

document.getElementById("recusarBebida").addEventListener("click", () => {
    pontosCallisto -= 3;
    localStorage.setItem("callistoPontos", pontosCallisto);
    respostaEscolha.innerText = "Você observa... e percebe um brilho suspeito no cálice. Boa escolha?";
    atualizarPontos();
});
