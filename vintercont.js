document.addEventListener("DOMContentLoaded", () => {
  let pontosVinter = parseInt(localStorage.getItem("pontosVinter")) || 0;

  const atualizarPontos = () => {
    document.getElementById("pontosVinter").innerText = "Afeição Vinter: " + pontosVinter;
  };

  const mostrarMensagem = (texto) => {
    document.getElementById("mensagemCena").innerHTML = texto;
  };

  atualizarPontos();

  const btnVerEspelho = document.getElementById("verEspelho");
  const btnRecusarVer = document.getElementById("recusarVer");

  btnVerEspelho.addEventListener("click", () => {
    pontosVinter += 2;
    localStorage.setItem("pontosVinter", pontosVinter);
    atualizarPontos();

    mostrarMensagem(`
      <p>Você encara o espelho mágico. A imagem que vê não é sua, mas da <strong>Imperatriz Penelope</strong> — olhos vermelhos, coroa negra e um sorriso gélido.</p>
      <p><strong>Vinter:</strong> "Esse é o destino que dizem que você herdará... Mas e se o destino puder ser reescrito?"</p>
      <p>Ele estende a mão: <em>"Se quiser lutar contra o que está escrito, lute comigo."</em></p>
    `);

    btnVerEspelho.style.display = "none";
    btnRecusarVer.style.display = "none";

    adicionarBotaoFinal();
  });

  btnRecusarVer.addEventListener("click", () => {
    pontosVinter -= 1;
    localStorage.setItem("pontosVinter", pontosVinter);
    atualizarPontos();

    mostrarMensagem(`
      <p>Você desvia o olhar. O espelho emite um som agudo e trinca como vidro prestes a quebrar.</p>
      <p><strong>Vinter:</strong> "Não confiar nem em si mesma pode ser mais perigoso do que o espelho."</p>
      <p>Ele caminha para longe, o silêncio crescendo entre vocês.</p>
    `);

    btnVerEspelho.style.display = "none";
    btnRecusarVer.style.display = "none";

  
  });


});
