function renderCatchBallGame() {
    let score = 0;
    let playing = true;
    let basketPos = 50;

    const html = `
        <h3>Tangkap Bola 🏀</h3>
        <p style="text-align: center; margin-bottom: 20px;">Skor: <span id="cb-score">0</span></p>
        <div id="cb-area" style="position: relative; width: 100%; height: 350px; background: #e0f7fa; border-radius: 10px; overflow: hidden; border: 3px solid #00acc1; margin: 0 auto;">
            <div id="cb-basket" style="position: absolute; bottom: 10px; left: 50%; width: 80px; height: 50px; background: #ff9800; border-radius: 10px 10px 30px 30px; transform: translateX(-50%); text-align: center; font-size: 2rem; display: flex; align-items: center; justify-content: center;">🧺</div>
        </div>
        <div style="display: flex; justify-content: space-around; margin-top: 20px;">
            <button class="btn-choice" style="width: 45%; padding: 20px; font-size: 2rem;" onmousedown="moveBasket(-15)" ontouchstart="moveBasket(-15)">⬅️ Kiri</button>
            <button class="btn-choice" style="width: 45%; padding: 20px; font-size: 2rem;" onmousedown="moveBasket(15)" ontouchstart="moveBasket(15)">Kanan ➡️</button>
        </div>
    `;
    updateContainer(html);
    speak("Ayo tangkap bolanya menggunakan keranjang!");

    const basket = document.getElementById('cb-basket');
    const area = document.getElementById('cb-area');
    const scoreDisplay = document.getElementById('cb-score');

    window.moveBasket = (step) => {
        if (!playing) return;
        basketPos += step;
        basketPos = Math.max(5, Math.min(95, basketPos));
        basket.style.left = \`\${basketPos}%\`;
    };

    function spawnBall() {
        if (!playing) return;
        const ball = document.createElement('div');
        ball.innerHTML = "🏀";
        ball.style.position = 'absolute';
        ball.style.fontSize = '2rem';
        ball.style.left = \`\${Math.random() * 80 + 10}%\`;
        ball.style.top = '-50px';
        ball.style.transition = 'top 0.05s linear';
        area.appendChild(ball);

        let topPos = -50;
        let fallSpeed = Math.random() * 2 + 2;

        const fallInterval = setInterval(() => {
            if (!playing) {
                clearInterval(fallInterval);
                return;
            }
            topPos += fallSpeed;
            ball.style.top = \`\${topPos}px\`;

            // Check collision
            const ballRect = ball.getBoundingClientRect();
            const basketRect = basket.getBoundingClientRect();

            if (ballRect.bottom >= basketRect.top &&
                ballRect.top <= basketRect.bottom &&
                ballRect.right >= basketRect.left &&
                ballRect.left <= basketRect.right) {
                    
                score++;
                scoreDisplay.innerText = score;
                clearInterval(fallInterval);
                ball.remove();
                if (score >= 5) {
                    playing = false;
                    currentState.score += 30;
                    showSuccess(() => renderCatchBallGame());
                }
            } else if (topPos > area.offsetHeight) {
                clearInterval(fallInterval);
                ball.remove();
            }
        }, 30);
    }

    let spawnInterval = setInterval(() => {
        if (playing) spawnBall();
        else clearInterval(spawnInterval);
    }, 1500);

    // Stop game nicely if user exits
    currentState.extra.cleanup = () => {
        playing = false;
        clearInterval(spawnInterval);
    };
}
