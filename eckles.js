let pontosEckles = 0;

const display = document.getElementById("pontosEckles");
const resposta = document.getElementById("resultado");

function atualizar() {
    display.innerText = "Afeição Eckles: " + pontosEckles;
}

const btn1 = document.getElementById("opcaoEckles1");
const btn2 = document.getElementById("opcaoEckles2");
const btn3 = document.getElementById("opcaoEckles3");

btn1.addEventListener("click", () => {
    pontosEckles += 10;
    resposta.innerHTML = `
        <p><strong>Os olhos dele brilham com intensidade perigosa.</strong><br>
        'Você me salvou... agora é minha dona.'<br>
        <em>Afeto +10</em></p>
    `;
    atualizar();
});

btn2.addEventListener("click", () => {
    pontosEckles -= 5;
    resposta.innerHTML = `
        <p><strong>O sorriso no rosto dele se desfaz lentamente.</strong><br>
        Por um instante, o silêncio é esmagador. Os olhos de Eckles — antes famintos por afeto — agora queimam com algo mais sombrio.</p>

        <p>"Então é assim que quer jogar, minha lady?" — ele sussurra, com um tom cortante, mas obediente.</p>

        <p><em>Você vira as costas... mas sabe que ele vai lembrar. E esperar. Sempre sorrindo por fora, e quebrado por dentro.</em></p>

        <p><em>Afeto -5</em></p>
    `;
    atualizar();
});

btn3.addEventListener("click", () => {
    resposta.innerHTML = `
        <p><strong>Você se afasta.</strong><br>
        Mas sente o olhar dele queimando suas costas. 'Você vai se arrepender... uiui, cuidado em ana'</p>
    `;
    atualizar();
});

atualizar();
