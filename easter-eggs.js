// Easter Eggs Discretos para Rota de Vinter
document.addEventListener('DOMContentLoaded', function() {
    // Só adicionar os easter eggs após um delay para não chamar atenção imediata
    setTimeout(() => {
        // Adicionar elementos dos easter eggs
        const easterEggsHTML = `
            <div id="vinter-rabbit" class="easter-egg" title="...">
                <div class="rabbit-ear left"></div>
                <div class="rabbit-ear right"></div>
                <div class="rabbit-face">
                    <div class="rabbit-eye left"></div>
                    <div class="rabbit-eye right"></div>
                    <div class="rabbit-nose"></div>
                </div>
            </div>
            
            <div id="penelope-secret" class="easter-egg" title="...">
                <div class="penelope-symbol"></div>
            </div>
            
            <div id="secret-message" class="secret-message"></div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', easterEggsHTML);
        
        // Easter Egg do Coelho de Vinter
        document.getElementById('vinter-rabbit').addEventListener('click', function() {
            const messages = [
                "Às vezes, os coelhos sabem mais do que aparentam...",
                "O Clube do Coelho Branco está sempre observando.",
                "Vinter: 'Você me lembra alguém... mas não posso ver através da sua máscara.'",
                "A magia corre em seu sangue, assim como no meu.",
                "Coelho: 'Penelope Eckhart. A Guilda do Coelho Branco aguarda sua presença.'",
                "Assim como vinter fez penelope sorrir nos piores momentos com magica, espero te fazer sorrir neste momento que vc está passando'"
            ];
            
            showSecretMessage(messages[Math.floor(Math.random() * messages.length)]);
        });
        
        // Easter Egg da Penelope (símbolo de adaga/cruz)
        document.getElementById('penelope-secret').addEventListener('click', function() {
            const messages = [
                "Penelope Eckhart - A vilã destinada a morrer que reescreveu seu destino.",
                "Sobrevivente de um mundo que quer sua morte.",
                "Ela que deveria ser a vilã, tornou-se a heroína de sua própria história.",
                "Cada escolha muda o destino. Cada passo altera o final.",
                "A adaga que deveria matá-la tornou-se sua arma de sobrevivência.",
                "Ana Gabi, saiba que eu te amo viu, espero que goste"
            ];
            
            showSecretMessage(messages[Math.floor(Math.random() * messages.length)]);
        });
        
        // Esconder os easter eggs temporariamente se o usuário não interagir
        let inactivityTimer = setTimeout(hideEasterEggs, 10000);
        
        function resetInactivityTimer() {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(hideEasterEggs, 10000);
        }
        
        function hideEasterEggs() {
            document.getElementById('vinter-rabbit').style.opacity = '0.1';
            document.getElementById('penelope-secret').style.opacity = '0.1';
        }
        
        // Mostrar easter eggs ao mover o mouse
        document.addEventListener('mousemove', function() {
            document.getElementById('vinter-rabbit').style.opacity = '0.2';
            document.getElementById('penelope-secret').style.opacity = '0.15';
            resetInactivityTimer();
        });
    }, 3000); // Aparecer após 3 segundos

    // Função para mostrar mensagens secretas
    function showSecretMessage(message) {
        const messageElement = document.getElementById('secret-message');
        messageElement.textContent = message;
        messageElement.style.display = 'block';
        
        // Posicionar a mensagem próximo ao cursor
        document.addEventListener('mousemove', positionMessage);
        
        function positionMessage(e) {
            messageElement.style.top = (e.clientY + 15) + 'px';
            messageElement.style.left = (e.clientX - 140) + 'px';
        }
        
        setTimeout(() => {
            messageElement.style.display = 'none';
            document.removeEventListener('mousemove', positionMessage);
        }, 5000);
    }
    
    // Easter egg especial baseado no progresso (integração com seu sistema existente)
    function checkForSpecialEasterEgg() {
        // Esta é uma implementação exemplo - adapte para seu sistema de pontos
        const pontosElement = document.getElementById('pontosVinter');
        if (pontosElement) {
            const pontosText = pontosElement.textContent || pontosElement.innerText;
            const pontosMatch = pontosText.match(/\d+/);
            
            if (pontosMatch) {
                const pontos = parseInt(pontosMatch[0]);
                
                if (pontos >= 30) {
                    // Revelar mais os easter eggs conforme progresso
                    document.getElementById('vinter-rabbit').style.opacity = '0.3';
                    document.getElementById('penelope-secret').style.opacity = '0.25';
                }
                
                if (pontos >= 50) {
                    // Easter egg especial em 50 pontos
                    showSecretMessage("Vinter: 'Algumas conexões são destinadas a acontecer, mesmo em diferentes vidas.'");
                }
            }
        }
    }
    
    // Verificar periodicamente os pontos
    setInterval(checkForSpecialEasterEgg, 5000);
});
