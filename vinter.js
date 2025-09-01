const mostrarMensagem = (mensagem) => {
    const caixa = document.getElementById("finalRotaVinter");
    caixa.innerHTML = mensagem;
    caixa.style.display = "block";
};

// Funções para mostrar diferentes finais
const mostrarFinalSucesso = (mensagem) => {
    const caixa = document.getElementById("finalPurificacaoSucesso");
    caixa.innerHTML = mensagem;
    caixa.style.display = "block";
};

const mostrarFinalFalha = (mensagem) => {
    const caixa = document.getElementById("finalPurificacaoFalha");
    caixa.innerHTML = mensagem;
    caixa.style.display = "block";
};

// Convite do Coelho
document.getElementById("aceitarConviteVinter").addEventListener("click", () => {
    document.getElementById("inicioVinter").style.display = "none";
    document.getElementById("chegadaClube").style.display = "block";
});

document.getElementById("ignorarConviteVinter").addEventListener("click", () => {
    mostrarMensagem("<p>Você ignora o coelho. Mas à meia-noite, a janela explode em magia. Alguém não gostou da sua recusa.</p><p><strong>Fim Prematuro.</strong></p>");
    document.getElementById("inicioVinter").style.display = "none";
});

// Chegada ao Clube
document.getElementById("responderMisteriosa").addEventListener("click", () => {
    document.getElementById("finalRotaVinter").style.display = "none"; // Adicionado: Esconde a mensagem anterior
    document.getElementById("chegadaClube").style.display = "none";
    document.getElementById("interacaoVinter").style.display = "block";
});

document.getElementById("fugirClube").addEventListener("click", () => {
    mostrarMensagem("<p>Você tenta fugir... mas Vinter fecha a sala com gelo. <em>“Agora você me deve explicações.”</em></p>");
    document.getElementById("chegadaClube").style.display = "none";
});

// Interação que penelope tem com Vinter
document.getElementById("revelarIdentidade").addEventListener("click", () => {
    document.getElementById("finalRotaVinter").style.display = "none"; // Adicionado: Esconde a mensagem anterior
    mostrarMensagem("<p>Você retira a máscara. Vinter arregala os olhos: <em>“Penelope Eckhart... por que está aqui?”</em></p><p>Mesmo surpreso, ele parece aliviado.</p><p><strong>Afeição +10</strong></p>");
    document.getElementById("interacaoVinter").style.display = "none";
    document.getElementById("testeMagia").style.display = "block";
    atualizarPontos(10);
});

document.getElementById("manterSegredo").addEventListener("click", () => {
    document.getElementById("finalRotaVinter").style.display = "none"; // Adicionado: Esconde a mensagem anterior
    mostrarMensagem("<p>Você recusa mostrar quem é. <em>“Talvez um dia descubra...”</em></p><p>Vinter ri de leve. <strong>“Aparentemente, gosto de enigmas.”</strong></p><p><strong>Afeição +5</strong></p>");
    document.getElementById("interacaoVinter").style.display = "none";
    document.getElementById("testeMagia").style.display = "block";
    atualizarPontos(5);
});

// Lógica do Teste de Magia
document.getElementById("usarMagia").addEventListener("click", () => {
    document.getElementById("finalRotaVinter").style.display = "none"; // Adicionado: Esconde a mensagem anterior
    document.getElementById("testeMagia").style.display = "none";
    document.getElementById("revelarIdentidade").style.display = "none";
    document.getElementById("desafioPurificacao").style.display = "block";

    // Inicia o contador para o desafio
    let tempoRestante = 5;
    const contadorElemento = document.getElementById("contador");
    contadorElemento.textContent = tempoRestante;

    const contagemRegressiva = setInterval(() => {
        tempoRestante--;
        contadorElemento.textContent = tempoRestante;
        if (tempoRestante <= 0) {
            clearInterval(contagemRegressiva);
            // Chama a função de falha
            falhaPurificacao();
        }
    }, 500);

    // Evento para o botão de purificação para ficar mais interativo
    document.getElementById("iniciarPurificacao").addEventListener("click", () => {
        clearInterval(contagemRegressiva);
        // Chama a função de sucesso
        sucessoPurificacao();
    });
});

document.getElementById("mentirMagia").addEventListener("click", () => {
    document.getElementById("finalRotaVinter").style.display = "none"; // Adicionado: Esconde a mensagem anterior
    mostrarMensagem("<p>Você diz que não tem magia. Vinter te olha com desconfiança e fúria.</p><p><strong>Vinter:</strong> <em>“Parece que eu perdi meu tempo.”</em></p><p><strong>Afeição -10</strong></p>");
    document.getElementById("testeMagia").style.display = "none";
    atualizarPontos(-10);
});

// Funções para o desafio
const sucessoPurificacao = () => {
    document.getElementById("finalPurificacaoFalha").style.display = "none"; // Adicionado: Esconde a mensagem de falha
    mostrarFinalSucesso("<p>Você toca em Vinter, e uma luz forte e quente purifica o corpo dele. Ele ofega, e pela primeira vez, sorri para você, um sorriso genuíno.</p><p><strong>Vinter:</strong> <em>“Você... você me salvou.”</em></p><p><strong>Afeição +9</strong></p>");
    document.getElementById("desafioPurificacao").style.display = "none";
    atualizarPontos(9);
};

const falhaPurificacao = () => {
    document.getElementById("finalPurificacaoSucesso").style.display = "none"; // Adicionado: Esconde a mensagem de sucesso
    mostrarFinalFalha("<p>O tempo se esgota. A magia corrompida de Vinter explode, jogando-a para longe. Ele cai de joelhos, e a escuridão o consome por completo.</p><p><strong>Penelope:</strong> <em>“Não...!”</em></p><p>Você sente uma dor terrível e cai no chão. O Vinter que você conheceu agora é apenas um vilão. <strong>Corte.</strong></p><p><strong>Afeição -25</strong></p>");
    document.getElementById("desafioPurificacao").style.display = "none";
    atualizarPontos(-25);
};

// aqui é a pontuação
let afeicaoVinter = 0;
function atualizarPontos(valor) {
    afeicaoVinter += valor;
    // O texto será exibido no elemento com id="pontosVinter"
    document.getElementById("pontosVinter").textContent = `Afeição Vinter: ${afeicaoVinter}`;
}
// Adicione esta função ao seu vinter.js para melhor integração
function atualizarEasterEggs(pontos) {
    // Revelar easter eggs conforme progresso
    if (pontos >= 20) {
        document.getElementById('penelope-secret').style.opacity = '0.25';
    }
    
    if (pontos >= 40) {
        document.getElementById('vinter-rabbit').style.opacity = '0.3';
    }
    
    // Easter egg especial em 50 pontos
    if (pontos === 50) {
        const messageElement = document.getElementById('secret-message');
        if (messageElement) {
            messageElement.textContent = "Parabéns! Você alcançou o coração de Vinter. 'Eu não me importo se o mundo me odeia, contanto que você esteja ao meu lado.'";
            messageElement.style.display = 'block';
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 7000);
        }
    }
}

// Modifique sua função de atualizar pontos para incluir:
function atualizarPontos(novosPontos) {
    // Sua lógica existente aqui...
    
    // Adicione esta linha:
    atualizarEasterEggs(novosPontos);
}