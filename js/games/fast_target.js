function renderFastTargetGame() {
    let score = 0;
    let playing = true;
    let currentTarget = null;
    let gameTimer;
    
    const html = `
        <h3>Klik Target Cepat 🎯</h3>
        <p style="text-align: center; margin-bottom: 20px;">Dapatkan 5 target!</p>
        <div id="ft-area" style="position: relative; width: 100%; height: 350px; background: #fdf5e6; border-radius: 10px; border: 3px solid #ffbc00; overflow: hidden; margin: 0 auto; cursor: crosshair;">
        </div>
    `;
    updateContainer(html);
    speak("Sentuh lingkaran target dengan cepat saat ia muncul!");

    const area = document.getElementById('ft-area');

    function spawnTarget() {
        if (!playing) return;
        if (currentTarget) currentTarget.remove();

        const x = Math.random() * 80 + 10;
        const y = Math.random() * 80 + 10;

        const target = document.createElement('div');
        target.innerHTML = "🎯";
        target.style.position = 'absolute';
        target.style.left = \`\${x}%\`;
        target.style.top = \`\${y}%\`;
        target.style.fontSize = '3rem';
        target.style.transform = 'translate(-50%, -50%) scale(0)';
        target.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        target.style.cursor = 'pointer';

        target.onclick = () => {
            if (!playing) return;
            score++;
            target.remove();
            if (score >= 5) {
                playing = false;
                clearTimeout(gameTimer);
                currentState.score += 25;
                showSuccess(() => renderFastTargetGame());
            } else {
                gameTimer = setTimeout(spawnTarget, Math.random() * 500 + 300);
            }
        };

        area.appendChild(target);
        currentTarget = target;

        // Animate pop in
        setTimeout(() => { if (target) target.style.transform = 'translate(-50%, -50%) scale(1)'; }, 50);

        gameTimer = setTimeout(() => {
            if (playing && currentTarget === target) {
                spawnTarget(); // Missed it, spawn new one
            }
        }, 1500); // Time to click before it disappears
    }

    setTimeout(spawnTarget, 1000);

    currentState.extra.cleanup = () => {
        playing = false;
        clearTimeout(gameTimer);
    };
}
