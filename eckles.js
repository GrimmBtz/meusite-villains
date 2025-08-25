let pontosEckles = 0;

// Atualiza o contador de afeição. Agora também atualiza o ponto na seção de resposta.
const atualizarPontos = () => {
    document.getElementById("pontosEckles").innerText = "Afeição Eckles: " + pontosEckles;
    document.getElementById("pontosEcklesResposta").innerText = "Afeição Eckles: " + pontosEckles;
}

// Mostra o texto da cena atual na caixa de resposta
const mostrarMensagem = (texto) => {
    document.getElementById("respostaTexto").innerHTML = texto;
}

// Seleciona todas as seções
const parte1 = document.getElementById('parte1');
const parte2 = document.getElementById('parte2');
const parte3 = document.getElementById('parte3');
const parte4 = document.getElementById('parte4');
const parte5 = document.getElementById('parte5');
const finalSection = document.getElementById('final-eckles');
const respostaCena = document.getElementById('respostaCena');
const finalNarrativa = document.getElementById('final-narrativa');

// Seleciona todos os botões
const btn1 = document.getElementById("opcaoEckles1");
const btn2 = document.getElementById("opcaoEckles2");
const btn3 = document.getElementById("opcaoEckles3");
const btn4 = document.getElementById("opcaoEckles4");
const btn5 = document.getElementById("opcaoEckles5");
const btn6 = document.getElementById("opcaoEckles6");
const btn7 = document.getElementById("opcaoEckles7");
const btn8 = document.getElementById("opcaoEckles8");
const btn9 = document.getElementById("opcaoEckles9");
const btn10 = document.getElementById("opcaoEckles10");
const btn11 = document.getElementById("opcaoEckles11");

// Função para avançar para a próxima cena
const avancarCena = (cenaAtual, proximaCena) => {
    cenaAtual.style.display = "none";
    proximaCena.style.display = "block";
    mostrarMensagem(""); // Limpa a mensagem anterior
}

// === Lógica para as escolhas da Parte 1 (Mercado) ===
btn1.addEventListener("click", () => {
    pontosEckles += 10;
    atualizarPontos();
    mostrarMensagem(`
        <p><strong>Você compra o escravo.</strong><br>'Você me salvou... agora é minha dona.'<br><em>Afeto +10</em></p>
    `);
    avancarCena(parte1, parte2);
});

btn2.addEventListener("click", () => {
    pontosEckles -= 5;
    atualizarPontos();
    mostrarMensagem(`
        <p><strong>Você decide ir embora.</strong><br>Ele nota seu olhar. Por um instante, o silêncio é esmagador.<br><em>Afeto -5</em></p>
    `);
    avancarCena(parte1, parte2);
});

btn3.addEventListener("click", () => {
    pontosEckles += 0;
    atualizarPontos();
    mostrarMensagem(`
        <p><strong>Você se afasta, apavorada.</strong><br>Afeição dele continua no 0, e seu futuro em Modo Difícil parece mais sombrio do que nunca.</p>
    `);
    parte1.style.display = 'none';
});

// === Lógica para as escolhas da Parte 2 (Jardim) ===
btn4.addEventListener("click", () => {
    pontosEckles -= 10;
    atualizarPontos();
    mostrarMensagem(`
        <p>Ele hesita, mas obedece. Seu olhar de ressentimento é palpável.<br><em>Afeto -10</em>.</p>
    `);
    avancarCena(parte2, parte3);
});

btn5.addEventListener("click", () => {
    pontosEckles += 10;
    atualizarPontos();
    mostrarMensagem(`
        <p>Ele sorri. Ele é inteiramente seu.<br><em>Afeto +10</em>.</p>
    `);
    avancarCena(parte2, parte3);
});

// === Lógica para as escolhas da Parte 3 (Caça) ===
btn6.addEventListener("click", () => {
    pontosEckles += 20;
    atualizarPontos();
    mostrarMensagem(`
        <p>Ele sorri. "Minha lady..."<br><em>Afeto +20</em>. A dependência dele por você se torna perigosamente alta.</p>
    `);
    avancarCena(parte3, parte4);
});

btn7.addEventListener("click", () => {
    pontosEckles -= 10;
    atualizarPontos();
    mostrarMensagem(`
        <p>Ele te olha com o coração quebrado. "Eu... só queria te salvar..."<br><em>Afeto -10</em>.</p>
    `);
    avancarCena(parte3, parte4);
});

// === Lógica para as escolhas da Parte 4 (Ciúme) ===
btn8.addEventListener("click", () => {
    pontosEckles -= 10;
    atualizarPontos();
    mostrarMensagem(`
        <p>O sorriso dele desaparece. Ele te dá as costas e se afasta lentamente.<br><em>Afeto -10</em>.</p>
    `);
    avancarCena(parte4, parte5);
});

btn9.addEventListener("click", () => {
    pontosEckles += 10;
    atualizarPontos();
    mostrarMensagem(`
        <p>Ele sorri, os olhos ainda fixos em Callisto. Você o tem nas suas mãos. Por enquanto.<br><em>Afeto +10</em>.</p>
    `);
    avancarCena(parte4, parte5);
});

// === Lógica para as escolhas da Parte 5 (O Final) ===
btn10.addEventListener("click", () => {
    mostrarMensagem("");
    finalNarrativa.innerHTML = `
        <p>A afeição dele é alta, mas a manipulação de Yvonne é maior. Em um confronto final, ele se joga na frente de um ataque fatal para te salvar.</p>
        <p><strong>"Obrigado... por me salvar..."</strong> - ele sussurra, com um sorriso, antes de fechar os olhos. O final da sua história com ele é o início do seu fim.</p>
    `;
    avancarCena(parte5, finalSection);
});

btn11.addEventListener("click", () => {
    mostrarMensagem("");
    finalNarrativa.innerHTML = `
        <p>Você tenta libertá-lo, mas ele não quer. Ele se sente traído.</p>
        <p><strong>"Você me salvou só para me jogar fora?"</strong> - ele se vira contra você, seus olhos vazios. Ele se torna a arma de Yvonne, e a sua morte se torna inevitável.</p>
    `;
    avancarCena(parte5, finalSection);
});

// Inicia o jogo
atualizarPontos();
parte1.style.display = "block";