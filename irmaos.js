let pontosReynold = 0;
let pontosDerrick = 0;

const resultado = document.getElementById("resultado");
const pontosRey = document.getElementById("pontosReynold");
const pontosDer = document.getElementById("pontosDerrick");

function atualizar() {
    pontosRey.innerText = "Afeição Reynold: " + pontosReynold;
    pontosDer.innerText = "Afeição Derrick: " + pontosDerrick;
}

// Função que salva e redireciona
function salvarEPassarParaRotaReynold() {
    localStorage.setItem("pontosReynold", pontosReynold);
    localStorage.setItem("pontosDerrick", pontosDerrick);
    window.location.href = "reynold.html";
}

// Botão 1
document.getElementById("opcao1").addEventListener("click", () => {
    pontosReynold -= 4;
    pontosDerrick += 2;

    resultado.innerHTML = `
        <p><strong>Reynold franze a testa.</strong><br>
        "Hmph. pelo menos você não está chorando como sempre."</p>
        <p><strong>Derrick suspira.</strong><br>
        "Você nunca leva nada a sério."</p>
        <p><em>Afeto Reynold -5 / Derrick +10</em></p>
    `;

    atualizar();
    setTimeout(salvarEPassarParaRotaReynold, 2000); // Espera 2s antes de mudar
});

// Botão 2
document.getElementById("opcao2").addEventListener("click", () => {
    pontosReynold += 1;
    pontosDerrick -= 10;

    resultado.innerHTML = `
        <p><strong>Derrick abaixa os olhos lentamente.</strong><br>
        "Você ainda acredita que é parte desta família..."<br>
        <strong>Caio</strong><br>"que paia esse derrick"</p>
        <p><strong>Reynold revira os olhos.</strong><br>
        "Você acha que choramingar resolve algo?"</p>
        <p><em>Afeto Reynold +10 / Derrick -10</em></p>
    `;

    atualizar();
    setTimeout(salvarEPassarParaRotaReynold, 2000);
});

// Botão 3
document.getElementById("opcao3").addEventListener("click", () => {
    pontosReynold += 3;
    pontosDerrick -= 10;

    resultado.innerHTML = `
        <p><strong>Reynold arregala os olhos.</strong><br>
        "Você não vai se defender? Isso é novo."</p>
        <p><strong>Derrick endurece o rosto.</strong><br>
        "A covardia fala mais alto, como sempre."</p>
        <p><em>Afeto Reynold +10 / Derrick -10</em></p>
    `;

    atualizar();
    setTimeout(salvarEPassarParaRotaReynold, 2000);
});

atualizar();
