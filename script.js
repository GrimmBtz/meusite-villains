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
    const botaoirritada = document.getElementById("botaoirritada");
    const botaoFugir = document.getElementById("botaoFugir");
    const botaoAceitar = document.getElementById("botaoAceitar");
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
        mostrarMensagem("'Você chama isso de comida...? Não brinque comigo!! isso são só restos! que nojo' Penélope continua comendo mesmo assim, no mesmo momento entra o Renold(Irmão do meio de Penélope) Renold Pegunta se está tudo bem, quando percebe a comida estragada, reprendendo a empregada 'como se atreva a zombar dela dessa forma?' a punindo logo após");
        atualizarPontos();
    });

    botaoirritada.addEventListener("click", function() {
        pontosCallisto += 10;
        mostrarMensagem("A empregada foi ate o Duque para conta sobre a sua birra. Seu irmão mais velho ouviu, te reprendeu  sua conduta é a proibindo até mesmo de beber água, morendo de fome nesta sala");
        atualizarPontos();
    });

    botaoFugir.addEventListener("click", function() {
        pontosCallisto -= 5;
        mostrarMensagem("Quando você pega a comida é força a empregada comer, o seu irmão do meio passou no mesmo instante, e acabou vendo a cena. Equanto ele tenta te separar da empregada, ele te antigi com um garfo no pescoço, acabando morrendo ali mesma");
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