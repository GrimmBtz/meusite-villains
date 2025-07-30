let pontosReynold = parseInt(localStorage.getItem("pontosReynold")) || 0;
let pontosDerrick = parseInt(localStorage.getItem("pontosDerrick")) || 0;

const atualizar = () => {
  document.getElementById("pontosReynold").innerText = "Afeição Reynold: " + pontosReynold;
  document.getElementById("pontosDerrick").innerText = "Afeição Derrick: " + pontosDerrick;
};

const mostrarResultado = (html) => {
  document.getElementById("mensagemResultado").innerHTML = html;
};

document.addEventListener("DOMContentLoaded", () => {
  atualizar();

  document.getElementById("aceitarDesculpa").addEventListener("click", () => {
    pontosReynold += 20;
    mostrarResultado(`
      <p><strong>Reynold</strong> suspira e segura seu braço com suavidade.</p>
      <p>"Nunca quis fazer você sofrer… Vi que você acreditava em mim mesmo sem me conhecer."</p>
      <p><em>Afeição Reynold +20 / Afeição Derrick –5</em></p>
    `);
    finalizarContinuacao();
  });

  document.getElementById("recusarDesculpa").addEventListener("click", () => {
    pontosReynold -= 5;
    mostrarResultado(`
      <p><strong>Reynold</strong> fica firme, as sobrancelhas franzidas.</p>
      <p>"Entendo sua desconfiança. Ainda falta muito pra eu provar que mudei."</p>
      <p><em>Afeição Reynold –5 / Afeição Derrick –5</em></p>
    `);
    finalizarContinuacao();
  });

  function finalizarContinuacao() {
    localStorage.setItem("pontosReynold", pontosReynold);
    localStorage.setItem("pontosDerrick", pontosDerrick);

    const link = document.createElement("a");
    link.href = "fim-reynold.html";
    link.innerText = "Ver clímax da rota";
    link.className = "btn";
    document.getElementById("mensagemResultado").appendChild(link);

    document.getElementById("aceitarDesculpa").style.display = "none";
    document.getElementById("recusarDesculpa").style.display = "none";
  }
});
