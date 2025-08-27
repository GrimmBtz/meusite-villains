// Função para mostrar mensagens temporárias
const mostrarMensagem = (texto) => {
    document.getElementById("mensagemCentral").innerHTML = texto;
    document.getElementById("mensagemCentral").style.display = "block";
};

// Funções para esconder todas as cenas
const esconderTodasCenas = () => {
    document.getElementById("inicioFestival").style.display = "none";
    document.getElementById("fugaJanela").style.display = "none";
    document.getElementById("missaoFestival").style.display = "none";
    document.getElementById("encontroDerrick").style.display = "none";
    document.getElementById("perdaIrmãos").style.display = "none";
    document.getElementById("mercadoEscravos").style.display = "none";
    document.getElementById("conclusaoLeilao").style.display = "none";
    document.getElementById("retornoMansao").style.display = "none";
    document.getElementById("treinamentoIckles").style.display = "none";
    document.getElementById("mensagemCentral").style.display = "none";
};

// --- Início das Transições de Fuga ---
document.getElementById("usuarcortina").addEventListener("click", () => {
    esconderTodasCenas();
    document.getElementById("fugaJanela").style.display = "block";
});

document.getElementById("buracomuro").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p>Você escapa pelo jardim silenciosamente. Mas uma patrulha te encontra. <strong>GAME OVER.</strong></p>");
});

document.getElementById("naofugir").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p>Você decide não fugir. Mas sente que perdeu uma chance rara...</p> <strong>Tentar Novamente?</strong>");
});

// Encontro com Reynold
document.getElementById("pularReynold").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> te segura nos braços, como um herói. <em>“Viu só? Eu disse que pegava você.”</em></p>");
    document.getElementById("missaoFestival").style.display = "block";
});

document.getElementById("ficarcorda").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p>Você escorrega e <span class='nomereynold'>Reynold</span> te agarra no ar, rindo como se fosse tudo uma brincadeira. <em>“Você não tem jeito mesmo.”</em></p>");
    document.getElementById("missaoFestival").style.display = "block";
});

// Festival
document.getElementById("aceitarfestival").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p>Você tenta ir com Reynold já que apareceu é atrapalhou seus planos de ir ao mercado de escravos para encontrar ickles, mas aparece<span class='nomederick'>Derick</span>'A onde vocês pensam que vão a está hora da noite assim? <span class='nomereynold'>Reynold</span>: A Penélope quer ir ao festival, então vou acompanhar ela com seu guarda costa. <span class='nomederick'>Derick</span>: Mas são necessário dois guarda costas, então irei junto com vocês ao festival '</p>");
    document.getElementById("encontroDerrick").style.display = "block";
});

document.getElementById("recusarfestival").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p><span class='nomereynold'>Reynold</span> cruza os braços, frustrado. <em>“Você realmente não tem espírito algum. Vai passar a vida trancada nesse castelo?”</em></p>");
});

// Encontro com Derrick
document.getElementById("aceitarDerick").addEventListener("click", () => {
    esconderTodasCenas();
    document.getElementById("perdaIrmãos").style.display = "block";
});

document.getElementById("recusarDerick").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p><span class='nome-penelope'>Penelope:</span> 'Eu não preciso de babá!'</p> <p>Você tenta fugir de <span class='nome-derick'>Derrick</span>, mas ele a intercepta no corredor, a mão firme em seu braço. <em>“Acha mesmo que pode me enganar?”</em> Ele a arrasta de volta para o quarto. Três dias de castigo. E sem janta.</p>");
});

// Missão Ickles
document.getElementById("aceitarIckles").addEventListener("click", () => {
    esconderTodasCenas();
    document.getElementById("mercadoEscravos").style.display = "block";
});

document.getElementById("recusarIckles").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p><strong class='nome-sistema'>Sistema:</strong> Missão crítica ignorada. O destino de <span class='nomeickles'>Ickles</span> agora está selado nas mãos de estranhos.</p>");
});

// --- Leilão: Apenas um event listener para cada botão ---
document.getElementById("cobrir10x").addEventListener("click", () => {
    esconderTodasCenas();
    document.getElementById("conclusaoLeilao").style.display = "block";
});

document.getElementById("naoLance").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p>O pânico te paralisa. Você não tem o dinheiro. O leilão continua, e <span class='nomeickles'>Ickles</span> é vendido para outro. Você falhou. Sua única chance de sobrevivência se foi.</p>");
});

document.getElementById("cobrirPadrao").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p>Você cobre o lance com o valor justo. Os olhares se voltam para você, surpresos com sua ousadia.</p><p><strong class='nome-penelope'>Penelope:</strong> <em>'Ainda não é o suficiente...'</em> Você cobre o lance com o valor justo, mas a oferta de um nobre é maior. O olhar dele sobre você é de desprezo. Você é expulsa do mercado. Falhou.</p>");
});

document.getElementById("negociarMercador").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem("<p>Você se aproxima do mercador, tentando negociar um preço mais baixo. Ele te olha com desdém e ri. 'Você acha que eu vou vender este escravo por menos? Vaza, garota!'</p> <p>Você é expulsa do mercado. O leilão de <span class='nomeickles'>Ickles</span> continua, e ele é vendido para outro. Você falhou. </p>");
});

// --- Continuação da História ---
// O botão da cena "conclusaoLeilao" agora tem seu próprio evento.
document.getElementById("aceitarMissaoIckles").addEventListener("click", () => {
    esconderTodasCenas();
    document.getElementById("retornoMansao").style.display = "block";
});

// Retorno à mansão
document.getElementById("explicarAto").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem(`<p><strong class="nome-penelope">Penelope:</strong> <em>"Eu... Eu o comprei. Ele será meu cavaleiro pessoal. Meu futuro protetor."</em></p>
        <p>A frase, dita com a frieza de uma vilã, é suficiente para chocar a todos. O <span class="nomeduque">Duque</span> fica parado, processando suas palavras, enquanto <span class="nomederick">Derrick</span> e <span class="nomereynold">Reynold</span> não escondem o desprezo em seus rostos. Você sente que a situação é delicada, mas conseguiu uma vitória. Por enquanto.</p>
        <button id="continuarPosExplicacao" class="novel">Continuar</button>`);
    
    // Adicionar o evento do botão "Continuar" após ele ser criado
    document.getElementById("continuarPosExplicacao").addEventListener("click", () => {
        esconderTodasCenas();
        document.getElementById("treinamentoIckles").style.display = "block";
    });
});

document.getElementById("naoMentir").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem(`<p><strong class="nome-penelope">Penelope:</strong> <em>"Eu o encontrei... machucado na rua. Pensei que pudesse ajudá-lo."</em></p>
        <p>A mentira sai de sua boca, mas ninguém acredita. O <span class="nomeduque">Duque</span> a encara com mais raiva ainda. <em>"Você não tem vergonha?! Trouxe um vira-lata para a minha casa?! Desfaça-se dele agora!"</em></p>
        <p>Você falhou. O nível de afeto de Eclise diminui, e sua vida continua em perigo. <strong>GAME OVER.</strong></p>`);
});

// Treinamento
document.getElementById("cuidarFerimentos").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem(`<p>Você se aproxima de <span class="nomeickles">Ickles</span>. Ele se encolhe, esperando o pior. Você se abaixa, ignorando a sujeira e o sangue, e começa a tratar de seus ferimentos, como se ele fosse um animal ferido. </p>
        <p><strong class="nome-penelope">Penelope:</strong> <em>"Não precisa ter medo. Ninguém vai te machucar mais. Você é meu agora."</em></p>
        <p>Os olhos de <span class="nomeickles">Ickles</span>, antes vazios, brilham com uma nova luz. Ele começa a te olhar com devoção.</p>
        <p><strong class="nome-sistema">Sistema:</strong> O nível de afeto de Ickles aumentou para 20%. </p>
        <p><strong>Fim do Capítulo 3.</strong></p>`);
});

document.getElementById("darInstrucoes").addEventListener("click", () => {
    esconderTodasCenas();
    mostrarMensagem(`<p><strong class="nome-penelope">Penelope:</strong> <em>"Pegue aquela espada. Você vai treinar todos os dias, até virar o meu cavaleiro perfeito."</em></p>
        <p>O olhar de <span class="nomeickles">Ickles</span> se enche de medo e desconfiança. Ele mal se aguenta de pé, mas a ameaça de <span class="nomederick">Derrick</span> ainda o assombra. A confiança não será conquistada tão facilmente. </p>
        <p>O nível de afeto de Ickles aumentou para 12%. Continue o treino para aumentá-lo.</p>
        <p><strong>Fim do Capítulo 3.</strong></p>`);
});