document.addEventListener("DOMContentLoaded", () => {
  const inicioJantar = document.getElementById("inicioJantar");
  const mensagemCentral = document.getElementById("mensagemCentral");
  const mensagemTexto = document.getElementById("mensagemTexto");
  const botoesMensagem = document.getElementById("botoesMensagem");

  let afeicao = 0;

  // Função para mostrar mensagem central
  const mostrarMensagem = (mensagem, botoes = []) => {
    mensagemTexto.innerHTML = mensagem;
    botoesMensagem.innerHTML = "";

    botoes.forEach(({ texto, onClick }) => {
      const botao = document.createElement("button");
      botao.textContent = texto;
      botao.className = "novel";
      botao.addEventListener("click", onClick);
      botoesMensagem.appendChild(botao);
    });

    mensagemCentral.style.display = "block";
  };

  // Respostas iniciais
  document.getElementById("resposta1").addEventListener("click", () => {
    inicioJantar.style.display = "none";
    afeicao += 5;
    mostrarMensagem(
      "<strong>Derrick:</strong> “Ainda se faz de santa? Não é à toa que foi abandonada. Pobre alma... ou seria uma mentirosa?”<br><em>Afeição Derrick: +5</em>",
      [{
        texto: "“...”",
        onClick: () => {
          mensagemCentral.style.display = "none";
          document.getElementById("confrontoJantar").style.display = "block";
        },
      }]
    );
  });

  document.getElementById("resposta2").addEventListener("click", () => {
    inicioJantar.style.display = "none";
    afeicao -= 10;
    mostrarMensagem(
      "<strong>Derrick:</strong> “Você realmente tem a audácia de falar assim comigo, sua... intrusa.”<br><em>Afeição Derrick: -10</em>",
      [{
        texto: "“...”",
        onClick: () => {
          mensagemCentral.style.display = "none";
          document.getElementById("confrontoJantar").style.display = "block";
        },
      }]
    );
  });

  document.getElementById("resposta3").addEventListener("click", () => {
    inicioJantar.style.display = "none";
    mostrarMensagem(
      "<strong>Derrick:</strong> “Para de me olhar com esses olhos de cachorrinho. Você acha que me engana com essas atitudes?”<br><em>Afeição Derrick: 0</em>",
      [{
        texto: "“...”",
        onClick: () => {
          mensagemCentral.style.display = "none";
          document.getElementById("confrontoJantar").style.display = "block";
        },
      }]
    );
  });

  // Segunda rodada de escolhas
  document.getElementById("resposta4").addEventListener("click", () => {
    document.getElementById("confrontoJantar").style.display = "none";
    afeicao += 10;
    mostrarMensagem(
      "<strong>Derrick:</strong> “Isso não te faz parte da família.”<br><em>Afeição Derrick: +10</em>"
    );
  });

  document.getElementById("resposta5").addEventListener("click", () => {
    document.getElementById("confrontoJantar").style.display = "none";
    afeicao -= 5;
    mostrarMensagem(
      "<strong>Derrick:</strong> “Você é uma mentirosa.”<br><em>Afeição Derrick: -5</em>"
    );
  });

  document.getElementById("resposta6").addEventListener("click", () => {
    document.getElementById("confrontoJantar").style.display = "none";
    afeicao += 15;
    mostrarMensagem(
      "<strong>Derrick:</strong> “... Você... Você é diferente.”<br><em>Afeição Derrick: +15</em>"
    );
  });
});
