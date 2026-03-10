function renderBalloonPopGame() {
    let score = 0;
    let playing = true;
    let balloons = [];

    const html = `
        <h3>Balon Pop 🎈</h3>
        <p style="text-align: center; margin-bottom: 20px;">Balon Meletus: <span id="bp-score">0</span>/6</p>
        <div id="bp-area" style="position: relative; width: 100%; height: 350px; background: #e3f2fd; border-radius: 10px; border: 3px solid #64b5f6; overflow: hidden; margin: 0 auto;">
        </div>
    `;
    updateContainer(html);
    speak("Pecahkan 6 balon yang terbang menyentuh langit!");

    const area = document.getElementById('bp-area');
    const scoreDisplay = document.getElementById('bp-score');
    const colors = ["🎈", "🎈", "🎃", "🫧", "🪁"];

    function spawnBalloon() {
        if (!playing) return;
        const b = document.createElement('div');
        b.innerHTML = colors[Math.floor(Math.random() * colors.length)];
        b.style.position = 'absolute';
        b.style.fontSize = (Math.random() * 2 + 3) + 'rem';
        b.style.left = \`\${Math.random() * 80 + 10}%\`;
        b.style.bottom = '-80px';
        b.style.cursor = 'pointer';
        b.style.transition = 'bottom 0.05s linear';
        area.appendChild(b);

        let bottomPos = -80;
        let speed = Math.random() * 2 + 1;

        b.onmousedown = b.ontouchstart = () => {
            if (!playing) return;
            b.innerHTML = "💥";
            score++;
            scoreDisplay.innerText = score;
            clearInterval(b.interval);
            setTimeout(() => b.remove(), 200);

            if (score >= 6) {
                playing = false;
                currentState.score += 20;
                showSuccess(() => renderBalloonPopGame());
            }
        };

        b.interval = setInterval(() => {
            if (!playing) {
                clearInterval(b.interval);
                return;
            }
            bottomPos += speed;
            b.style.bottom = \`\${bottomPos}px\`;
            
            if (bottomPos > area.offsetHeight) {
                clearInterval(b.interval);
                b.remove();
            }
        }, 30);
        
        balloons.push(b);
    }

    let spawnInterval = setInterval(() => {
        if (playing) spawnBalloon();
        else clearInterval(spawnInterval);
    }, 1200);

    currentState.extra.cleanup = () => {
        playing = false;
        clearInterval(spawnInterval);
        balloons.forEach(b => clearInterval(b.interval));
    };
}
