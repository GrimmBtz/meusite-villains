let pontosCallisto = 0;


const resultado = document.getElementById("resultado");
const displayPontos = document.getElementById("pontosCallisto");

const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");
const opcao3 = document.getElementById("opcao3");


function atualizarPontos() {
    displayPontos.innerHTML = "Afeição Callisto:" + pontosCallisto;
}

function mostrarResultado(texto) {
    resultado.innerHTML = texto;
    atualizarPontos();
}

opcao1.addEventListener("click", () => {
    pontosCallisto += 2;
    mostrarResultado("<p><strong>Callisto sorri largo, intrigado.</strong><br>‘Você é ousada. Espero que continue viva por mais alguns dias.’<br><em>Afeto +10</em></p>");
    localStorage.setItem("callistoPontos", pontosCallisto); // salva os pontos
    setTimeout(() => {
        window.location.href = "kallisto2.html";
    }, 2000);
});

opcao2.addEventListener("click", () => {
    pontosCallisto -= 5;
    mostrarResultado("<p><strong>Callisto bufa, entediado.</strong><br>‘Tão previsível. Que decepção.’<br><em>Afeto -5</em></p>");
});

opcao3.addEventListener("click", () => {
    mostrarResultado("<p><strong>Callisto inclina a cabeça, curioso.</strong><br>‘Está com medo? Hm... gosto disso.’<br><em>Afeto neutro</em></p>");
});

atualizarPontos();

