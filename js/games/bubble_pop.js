function renderBubblePopGame() {
    let score = 0;
    let playing = true;
    let bubbles = [];

    const html = `
        <h3>Tekan Gelembung 🫧</h3>
        <p style="text-align: center; margin-bottom: 20px;">Gelembung Meletus: <span id="bu-score">0</span></p>
        <div id="bu-area" style="position: relative; width: 100%; height: 350px; background: linear-gradient(to top, #0288d1, #e1f5fe); border-radius: 10px; border: 3px solid #039be5; overflow: hidden; margin: 0 auto; cursor: crosshair;">
            <!-- Seabed -->
            <div style="position:absolute; bottom:0; left:0; width:100%; height: 30px; background: #e6c280; border-radius: 5px;"></div>
        </div>
    `;
    updateContainer(html);
    speak("Sentuh semua gelembung air yang naik ke atas!");

    const area = document.getElementById('bu-area');
    const scoreDisplay = document.getElementById('bu-score');

    function spawnBubble() {
        if (!playing) return;
        const b = document.createElement('div');
        b.innerHTML = "🫧";
        b.style.position = 'absolute';
        
        const size = Math.random() * 2 + 1; // 1-3rem
        b.style.fontSize = size + 'rem';
        
        b.style.left = \`\${Math.random() * 80 + 10}%\`;
        b.style.bottom = '10px';
        b.style.cursor = 'pointer';
        b.style.transition = 'bottom 0.05s linear, left 0.5s ease-in-out';
        area.appendChild(b);

        let bottomPos = 10;
        let speed = (4 - size) * 0.5 + Math.random(); 
        let leftBase = parseFloat(b.style.left);
        let time = 0;

        b.onmousedown = b.ontouchstart = (e) => {
            e.preventDefault();
            if (!playing) return;
            b.innerHTML = "💦";
            score++;
            scoreDisplay.innerText = score;
            clearInterval(b.interval);
            setTimeout(() => b.remove(), 150);

            if (score >= 10) {
                playing = false;
                currentState.score += 15;
                showSuccess(() => renderBubblePopGame());
            }
        };

        b.interval = setInterval(() => {
            if (!playing) {
                clearInterval(b.interval);
                return;
            }
            time += 0.1;
            bottomPos += speed;
            b.style.bottom = \`\${bottomPos}px\`;
            
            // Wobble
            b.style.left = \`\${leftBase + Math.sin(time) * 5}%\`;

            if (bottomPos > area.offsetHeight) {
                clearInterval(b.interval);
                b.remove();
            }
        }, 30);
        
        bubbles.push(b);
    }

    let spawnInterval = setInterval(() => {
        if (playing) spawnBubble();
        else clearInterval(spawnInterval);
    }, 600); // 0.6s spawn rate

    currentState.extra.cleanup = () => {
        playing = false;
        clearInterval(spawnInterval);
        bubbles.forEach(b => clearInterval(b.interval));
    };
}
