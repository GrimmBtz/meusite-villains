// Animação simples na página inicial
document.addEventListener("DOMContentLoaded", function() {
    const introText = document.querySelector(".intro p");
    introText.style.opacity = 0;
    setTimeout(() => {
        introText.style.transition = "opacity 2s";
        introText.style.opacity = 1;
    }, 1000);
});

const btn = document.querySelector(".btn");
if (btn) {
    btn.addEventListener("mouseenter", () => {
        btn.style.backgroundColor = "#8A2BE2";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.backgroundColor = "";
    });
}
let pontosAfeicao = {
    callisto: 0,
    eckles: 0,
    reynald: 0
};
// Animação simples na página inicial
document.addEventListener("DOMContentLoaded", function() {
    const introText = document.querySelector(".intro p");
    introText.style.opacity = 0;
    setTimeout(() => {
        introText.style.transition = "opacity 2s";
        introText.style.opacity = 1;
    }, 1000);

    // Variável para guardar os pontos de afeição do Kallisto
    let pontosCallisto = 0;

    // Pega os elementos do DOM
    const botaoAceitar = document.getElementById("botaoAceitar");
    const botaoFugir = document.getElementById("botaoFugir");
    const respostaEscolha = document.getElementById("respostaEscolha");
    const pontosCallistoDisplay = document.getElementById("pontosCallisto");

    // Função para atualizar a pontuação na tela
    function atualizarPontos() {
        pontosCallistoDisplay.innerText = "Afeição Callisto Regulus: " + pontosCallisto;
    }

    // Função para mostrar resposta
    function mostrarMensagem(texto) {
        respostaEscolha.innerText = texto;
    }

    // Eventos dos botões
    botaoAceitar.addEventListener("click", function() {
        pontosCallisto += 10;
        mostrarMensagem("Você aceita o presente com um sorriso... mas sente uma pontada no coração. Era envenenado? Talvez não.Talvez seja só... amor?");
        atualizarPontos();
    });

    botaoFugir.addEventListener("click", function() {
        pontosCallisto -= 5;
        mostrarMensagem("Você vira as costas e corre! Mas tropeça no seu vestido. Callisto ri... e a morte vem com um 'que pena, era só um broche");
        atualizarPontos();
    });

    // Atualiza os pontos inicialmente
    atualizarPontos();
});
botaoAceitar.addEventListener("click", function() {
    botaoAceitar.style.backgroundColor = "#90ee90"; // verde claro
    botaoFugir.style.backgroundColor = "";
    // Resto do código
});
botaoFugir.addEventListener("click", function() {
    botaoFugir.style.backgroundColor = "#ec2d2dff"; // vermelho claro
    botaoAceitar.style.backgroundColor = "";
    // Resto do código
});