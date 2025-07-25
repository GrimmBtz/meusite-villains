let pontosCallisto = 0;

const botaoarFesco = document.getElementById("arFesco");
const botaoarficarFesta = document.getElementById("ficarFesta");

function atualizarPontos() {
    document.getElementById("pontosCallisto").innerText = "Afeição Callisto Regulos: " + pontosCallisto;
}

function mostrarMensagem(texto) {
    document.getElementById("mensagemCena").innerHTML = texto;
}

botaoarFesco.addEventListener("click", () => {
    pontosCallisto += 0;
    mostrarMensagem("Você começa a caminhar pelo LABIRINTO DO JARDIM REAL, quando de repente <strong>Callisto</strong> aparece:<br> 'Me perguntava que tipo de rata veio espreitar neste lugar...'<br> 'Por acaso, não é a cachorra louca da FAMÍLIA ECKHART?'<br> <em>Você sente o frio do aço em sua garganta. Ele segura uma espada curta, o olhar cruel e curioso</em>");
    atualizarPontos();
    document.getElementById("fugaNortunar").style.display = "block";
    document.getElementById("opcoesJardim").style.display = "block";
});

botaoarficarFesta.addEventListener("click", () => {
    pontosCallisto += 0;
    mostrarMensagem("<p>Você permanece na festa, tentando se manter invisível. Nada acontece... Mas você sente que perdeu algo importante.</p>");
    atualizarPontos();
    document.getElementById("fugaNortunar").style.display = "block";
});

document.getElementById("respostaCalada").addEventListener("click", () => {
    mostrarMensagem(`
        <p><strong>Penelope</strong> permanece em silêncio, os olhos firmes nos dele.</p>
        <p>O silêncio entre vocês pesa. Callisto se aproxima lentamente, curioso.</p>
        <p><strong>Callisto:</strong> <em>"Interessante... Não vai gritar? Hahaha."</em></p>
    `);
    pontosCallisto += 5;
    atualizarPontos();
});

document.getElementById("respostaProvocacao").addEventListener("click", () => {
    mostrarMensagem(`
        <p><strong>Penelope:</strong> <em>"EU... EU-EU, EU GOSTO DE VOCÊ!"</em></p>
        <p>Callisto pisca, surpreso. Por um momento, o príncipe parece sem palavras.</p>
        <p><strong>Callisto:</strong> <em>"Você é doida... Mas talvez eu goste disso."</em></p>
    `);
    pontosCallisto += 15;
    atualizarPontos();
});

document.getElementById("respostaEducada").addEventListener("click", () => {
    pontosCallisto += 0;
    mostrarMensagem(`
        <p>Penelope: "Não foi minha intenção, Alteza... Por favor, me perdoe."</p>
        <p>Callisto te encara por longos segundos, seus olhos frios avaliam cada palavra, cada gesto.</p>
        <p><em>Finalmente, ele relaxa os ombros e abaixa a espada.</em></p>
        <p><strong>Callisto:</strong> "Fique esperta da próxima vez. O jardim não perdoa tolos."</p>
    `);
    atualizarPontos();
    document.getElementById("opcoesJardim").style.display = "none";
});

document.getElementById("respostaCalada").addEventListener("click", () => {
    pontosCallisto -= 2;
    mostrarMensagem(`
        <p>Penelope mantém silêncio absoluto, os olhos fixos nos dele, desafiadora.</p>
        <p>O silêncio é pesado, quase sufocante. Callisto sorri, um sorriso frio e cruel, se aproximando lentamente.</p>
        <p><strong>Callisto:</strong> <em>"Interessante... Não tem medo, hein? Então será sua última escolha."</em></p>
        <p><strong>Num golpe rápido e fatal, a lâmina encontra seu destino.</strong></p>
        <p><strong><em>GAME OVER</em>: Você foi degolada por Callisto.</strong></p>
    `);
    atualizarPontos();
    document.getElementById("opcoesJardim").style.display = "none";
    // Aqui você pode desabilitar botões para impedir outras escolhas
});

document.getElementById("respostaProvocacao").addEventListener("click", () => {
    pontosCallisto += 1;
    mostrarMensagem(`
        <p>Penelope: <em>"EU... EU-EU, EU GOSTO DE VOCÊ!"</em></p>
        <p>Por um momento, o rosto de Callisto fica congelado em surpresa — depois, um sorriso torto surge.</p>
        <p><strong>Callisto:</strong> <em>"Você é louca... mas talvez essa loucura seja sua força."</em></p>
        <p>Ele abaixa a espada, mas seu olhar ainda é intenso e desafiador.</p>
        <p><em>"Na próxima vez que nos encontrarmos, explique direitinho esse sentimento... Agora pode ir."</em></p>
    `);
    atualizarPontos();
    document.getElementById("opcoesJardim").style.display = "none";
});