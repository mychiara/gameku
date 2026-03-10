function renderAimGame() {
  let shots = 5;
  let hits = 0;
  let targetPos = { x: 50, y: 50 };

  let html = `
        <h3 style="color: var(--primary)">Panah Target 🏹</h3>
        <p>Ketuk pada target yang bergerak untuk memanah!</p>
        <div style="text-align:center; font-weight:bold; color: var(--secondary); margin-bottom:10px;">
            Sisa Panah: <span id="shots-count">5</span> | Skor: <span id="hits-count">0</span>
        </div>
        
        <div id="aim-area" style="position: relative; width: 320px; height: 320px; margin: 0 auto; background: #e3f2fd; border: 5px solid #64b5f6; border-radius: 20px; overflow: hidden; cursor: crosshair;">
            <div id="aim-target" onclick="hitTarget(event)"
                 style="position: absolute; width: 60px; height: 60px; background: radial-gradient(circle, red 20%, white 20%, white 40%, red 40%, red 60%, white 60%, white 80%, red 80%); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: 0.5s ease-out; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                 🎯
            </div>
            <div id="arrow-anim" style="position: absolute; font-size: 2rem; display:none; pointer-events:none;">🏹</div>
        </div>
    `;

  updateContainer(html);
  speak("Ayo bidik targetnya! Ketuk tepat di tengah target ya.");

  const targetEl = document.getElementById("aim-target");
  let moveInterval = setInterval(moveTarget, 1000);

  function moveTarget() {
    const area = document.getElementById("aim-area");
    if (!area) return clearInterval(moveInterval);

    targetPos.x = Math.random() * (area.clientWidth - 70);
    targetPos.y = Math.random() * (area.clientHeight - 70);

    targetEl.style.left = targetPos.x + "px";
    targetEl.style.top = targetPos.y + "px";
  }

  window.hitTarget = (e) => {
    if (shots <= 0) return;

    hits++;
    shots--;
    updateStats();

    targetEl.style.transform = "scale(1.2)";
    setTimeout(() => (targetEl.style.transform = "scale(1)"), 200);
    speak("Tepat sasaran!");

    moveTarget(); // Move immediately after hit
    checkGameOver();
  };

  // Also handle misses
  document.getElementById("aim-area").onclick = (e) => {
    if (e.target.id === "aim-area") {
      if (shots <= 0) return;
      shots--;
      updateStats();
      speak("Yah, melesat!");
      checkGameOver();
    }
  };

  function updateStats() {
    document.getElementById("shots-count").innerText = shots;
    document.getElementById("hits-count").innerText = hits;
  }

  function checkGameOver() {
    if (shots === 0) {
      clearInterval(moveInterval);
      setTimeout(() => {
        if (hits >= 3) {
          currentState.score += hits * 10;
          showSuccess(() => renderAimGame());
        } else {
          alert(`Yah, cuma kena ${hits}. Coba lagi ya agar lebih jago! 🏹`);
          renderAimGame();
        }
      }, 1000);
    }
  }
}
