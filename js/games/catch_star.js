function renderCatchStarGame() {
  let score = 0;
  let playing = true;
  let charPos = 50;

  const html = `
        <h3>Tangkap Bintang ⭐</h3>
        <p style="text-align: center; margin-bottom: 20px;">Bintang Ditangkap: <span id="cs-score">0</span></p>
        <div id="cs-area" style="position: relative; width: 100%; height: 350px; background: #282c34; border-radius: 10px; overflow: hidden; border: 3px solid #ffbc00; margin: 0 auto; display: flex; align-items: flex-end;">
            <div id="cs-char" style="position: absolute; bottom: 10px; left: 50%; font-size: 3.5rem; transform: translateX(-50%); transition: left 0.1s linear;">🚀</div>
            <div style="width: 100%; display: flex; justify-content: space-between; position: absolute; bottom: 0; padding: 10px; z-index: 10;">
                <button onmousedown="moveChar(-15)" ontouchstart="moveChar(-15)" style="background: rgba(255,255,255,0.2); border: none; padding: 15px 30px; border-radius: 10px; color: white; font-weight: bold; font-size: 1.5rem;">⬅️</button>
                <button onmousedown="moveChar(15)" ontouchstart="moveChar(15)" style="background: rgba(255,255,255,0.2); border: none; padding: 15px 30px; border-radius: 10px; color: white; font-weight: bold; font-size: 1.5rem;">➡️</button>
            </div>
        </div>
    `;
  updateContainer(html);
  speak("Geser roket untuk menangkap semua bintang yang jatuh!");

  const char = document.getElementById("cs-char");
  const area = document.getElementById("cs-area");
  const scoreDisplay = document.getElementById("cs-score");

  window.moveChar = (step) => {
    if (!playing) return;
    charPos += step;
    charPos = Math.max(5, Math.min(95, charPos));
    char.style.left = `${charPos}%`;
  };

  function spawnStar() {
    if (!playing) return;
    const star = document.createElement("div");
    star.innerHTML = "⭐";
    star.style.position = "absolute";
    star.style.fontSize = "2.5rem";
    star.style.left = `${Math.random() * 80 + 10}%`;
    star.style.top = "-50px";
    star.style.transition = "top 0.05s linear";
    area.appendChild(star);

    let topPos = -50;
    let fallSpeed = Math.random() * 3 + 2;

    const fallInterval = setInterval(() => {
      if (!playing) {
        clearInterval(fallInterval);
        return;
      }
      topPos += fallSpeed;
      star.style.top = `${topPos}px`;

      // Check collision
      const starRect = star.getBoundingClientRect();
      const charRect = char.getBoundingClientRect();

      if (
        starRect.bottom >= charRect.top + 20 &&
        starRect.top <= charRect.bottom &&
        starRect.right >= charRect.left &&
        starRect.left <= charRect.right
      ) {
        score++;
        scoreDisplay.innerText = score;
        clearInterval(fallInterval);
        star.remove();

        // Show particle
        const p = document.createElement("div");
        p.innerHTML = "✨";
        p.style.position = "absolute";
        p.style.left = char.style.left;
        p.style.bottom = "50px";
        p.style.fontSize = "2rem";
        p.style.transition = "all 0.5s";
        area.appendChild(p);
        setTimeout(() => {
          p.style.bottom = "80px";
          p.style.opacity = "0";
        }, 10);
        setTimeout(() => p.remove(), 500);

        if (score >= 7) {
          playing = false;
          currentState.score += 30;
          showSuccess(() => renderCatchStarGame());
        }
      } else if (topPos > area.offsetHeight) {
        clearInterval(fallInterval);
        star.remove();
      }
    }, 30);
  }

  let spawnInterval = setInterval(() => {
    if (playing) spawnStar();
    else clearInterval(spawnInterval);
  }, 1200);

  currentState.extra.cleanup = () => {
    playing = false;
    clearInterval(spawnInterval);
  };
}
