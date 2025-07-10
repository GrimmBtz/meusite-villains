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
function escolher(opcao) {
    const resposta = document.getElementById("respostaEscolha");

    if (opcao === "aceitar") {
        resposta.innerHTML = "Você aceita o presente com um sorriso... mas sente uma pontada no coração. Era envenenado? Talvez não. Talvez seja só... amor?";
    } else if (opcao === "fugir") {
        resposta.innerHTML = "Você vira as costas e corre! Mas tropeça no seu vestido. Callisto ri... e a morte vem com um 'que pena, era só um broche'.";
    }
}