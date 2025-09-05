// Animação simples na página inicial
document.addEventListener("DOMContentLoaded", function () {
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
document.addEventListener("DOMContentLoaded", function () {
    const introText = document.querySelector(".intro p");
    introText.style.opacity = 0;
    setTimeout(() => {
        introText.style.transition = "opacity 2s";
        introText.style.opacity = 1;
    }, 1000);


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


    function mostrarMensagem(texto) {
        respostaEscolha.innerHTML = texto;
    }

 
    document.getElementById("botaoAceitar").addEventListener("click", () => {
        mostrarMensagem('<p class="nome-penelope">Penelope:</p><p><em>\'Você chama isso de comida...? Não brinque comigo!! isso são só restos! que nojo.\'</em></p><p>Mas, mesmo pensando nisso, Penelope continua comendo. No mesmo momento, entra <span class="nomereynold">Renold Eckhart</span>, o segundo filho da casa. Ele pergunta se está tudo bem, e quando percebe a comida estragada, repreende a empregada: <em>\'Como se atreve a zombar dela dessa forma?\'</em>, a punindo em seguida. Você continua a salvo por enquanto. <strong class="nome-sistema">ESPERA UM POUCO, VAMOS TE MANDAR PARA A PRÓXIMA PÁGINA OU CLIQUE NO BOTÃO ABAIXO</strong></p>');
        setTimeout(() => {
            window.location.href = "cap2.html";
        }, 25000);
        document.getElementById("botaoProximo").style.display = "block";
        document.getElementById("botaoProximo").addEventListener("click", () =>{
            window.location.href = "cap2.html";
        });
    });

    botaoirritada.addEventListener("click", function () {
        mostrarMensagem('<p class="nome-penelope">Penelope:</p> <p><em>\'Chega! Eu não vou morrer assim!\'</em></p> <p>Você levanta a mesa, fazendo a comida podre voar por todo o quarto. A empregada, tremendo, corre para o Duque para relatar sua \'birra\'. Seu irmão mais velho, <span class="nomederick">Derrick Eckhart</span>, ouve a notícia e sua fúria é imediata. <em>\'Penelope, sua conduta é inaceitável!\'</em> Ele a repreende, proibindo-a até mesmo de beber água. Você é deixada trancada no quarto, morrendo de fome e sede. <strong class="nome-sistema">FIM PREMATURO.</strong></p>'); 
    });

    botaoFugir.addEventListener("click", function () {
        mostrarMensagem('<p class="nome-penelope">Penelope:</p><p><em>\'Que tal você provar do seu próprio veneno?\'</em></p><p>Você pega a comida e força a empregada a comer, seu corpo pequeno se debatendo. É quando <span class="nomereynold">Reynold Eckhart</span> entra. Ele vê a cena e, em um acesso de raiva cega, tenta te separar dela. Em meio à confusão, uma ponta de garfo perfura seu pescoço. O sangue escorre. A tela escurece. Você morreu. <strong class="nome-sistema">FIM PREMATURO.</strong></p>');
        atualizarPontos();
    });

    atualizarPontos();
});
botaoAceitar.addEventListener("click", function () {
    botaoAceitar.style.backgroundColor = "#90ee90"; // verde claro
    botaoFugir.style.backgroundColor = "";
    // Resto do código
});
botaoFugir.addEventListener("click", function () {
    botaoFugir.style.backgroundColor = "#ec2d2dff"; // vermelho claro
    botaoAceitar.style.backgroundColor = "";
    // Resto do código
});