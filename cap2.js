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
    document.getElementById("Callisto").style.display = "block";
});

botaoarficarFesta.addEventListener("click", () => {
    pontosCallisto += 0;
    mostrarMensagem("<p>Você permanece na festa, tentando se manter invisível. Nada acontece... Mas você sente que perdeu algo importante.</p>");
    atualizarPontos();
    document.getElementById("fugaNortunar").style.display = "block";
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

    // Aqui chamamos a função correta
    mostrarCenaVinter();
});

function mostrarCenaVinter() {
    document.getElementById("encontroVinter").style.display = "block";
    document.getElementById("textoVinter").innerHTML = `
        <p><em>Você avança pelo labirinto, a dor lateja como lembrança constante.</em></p>
        <p>De repente, uma figura surge entre a névoa branca.</p>
        <p><strong>Vinter:</strong> "Isso parece pior do que posso tratar sem ajuda, vou chamar os médicos para você."</p>
        <p><strong>Penelope:</strong> "Não precisa de médico."</p>
        <p><em>Vinter: "Então aceite esse lenço mágico pelo menos."</em></p>
        <p><em>Ele estende um pano fino, levemente luminoso.</em></p>
        <p><strong>Vinter:</strong> "Use isso. Cura rápida, mas só se você não questionar demais."</p>
    `;
    document.getElementById("opcoesJardim").style.display = "none";
}

document.getElementById("vinterAceitar").addEventListener("click", () => {
    mostrarMensagem(`
        <p><strong>Penelope:</strong> <em>*aceita o pano e o enrola no pescoço*</em></p>
        <p><em>A dor cede lentamente. O pano parece pulsar com vida.</em></p>
        <p><strong>Vinter:</strong> "Então escolha viver."</p>
    `);
    document.getElementById("encontroVinter").style.display = "none";
});

document.getElementById("vinterPerguntar").addEventListener("click", () => {
    mostrarMensagem(`
        <p><strong>Penelope:</strong> "O que é este pano... mágica?"</p>
        <p><strong>Vinter:</strong> "Algo muito antigo. Não é para todos."</p>
        <p><em>Ele observa sua expressão, silencioso. Então se afasta, deixando o pano para trás.</em></p>
    `);
    document.getElementById("encontroVinter").style.display = "none";
});

document.getElementById("vinterIgnorar").addEventListener("click", () => {
    mostrarMensagem(`
        <p><em>Penelope balança a cabeça, tentando tomar impulso.</em></p>
        <p><strong>Vinter:</strong> "Recuse sua salvação e aceite sua consequência."</p>
        <p><em>Mesmo assim, ele coloca o pano sobre uma pedra próxima. Então desaparece.</em></p>
    `);
    document.getElementById("encontroVinter").style.display = "none";
});
