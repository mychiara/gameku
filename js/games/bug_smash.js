function renderBugSmashGame() {
  let score = 0;
  let playing = true;
  let bugs = [];

  const html = `
        <h3>Klik Serangga 🐞</h3>
        <p style="text-align: center; margin-bottom: 20px;">Tangkap Serangga: <span id="bgs-score">0</span></p>
        <div id="bgs-area" style="position: relative; width: 100%; height: 350px; background: #dcedc8; border-radius: 10px; border: 3px solid #7cb342; overflow: hidden; margin: 0 auto; cursor: crosshair;">
            <div style="position:absolute; bottom:0; width:100%; height: 20px; background: #558b2f;"></div>
        </div>
    `;
  updateContainer(html);
  speak("Ayo tangkap serangga yang nakal!");

  const area = document.getElementById("bgs-area");
  const scoreDisplay = document.getElementById("bgs-score");

  function spawnBug() {
    if (!playing) return;
    const bug = document.createElement("div");
    const types = ["🪲", "🐞", "🐛", "🐜", "🦗"];
    bug.innerHTML = types[Math.floor(Math.random() * types.length)];
    bug.style.position = "absolute";
    bug.style.fontSize = "3rem";
    bug.style.left = `${Math.random() * 80 + 10}%`;
    bug.style.top = `${Math.random() * 80 + 10}%`;
    bug.style.cursor = "pointer";
    bug.style.transition = "top 0.4s linear, left 0.4s linear, transform 0.2s";

    area.appendChild(bug);

    let moveInterval = setInterval(
      () => {
        if (!playing) {
          clearInterval(moveInterval);
          return;
        }
        let nx = Math.random() * 80 + 10;
        let ny = Math.random() * 80 + 10;
        bug.style.left = nx + "%";
        bug.style.top = ny + "%";

        // Random rotation
        bug.style.transform = `rotate(${Math.random() * 180}deg)`;
      },
      Math.random() * 500 + 400,
    ); // erratic movement

    bug.onmousedown = bug.ontouchstart = (e) => {
      e.preventDefault();
      if (!playing) return;
      bug.innerHTML = "💦"; // splash
      bug.style.transform = "scale(0.5)";
      score++;
      scoreDisplay.innerText = score;
      clearInterval(moveInterval);
      setTimeout(() => bug.remove(), 300);

      if (score >= 8) {
        playing = false;
        currentState.score += 25;
        showSuccess(() => renderBugSmashGame());
      } else {
        // Spawn a new one to replace the dead one quickly
        setTimeout(spawnBug, 200);
      }
    };

    bugs.push({ el: bug, int: moveInterval });
  }

  // Spawn 3 initial bugs
  setTimeout(() => {
    if (playing) spawnBug();
  }, 200);
  setTimeout(() => {
    if (playing) spawnBug();
  }, 500);
  setTimeout(() => {
    if (playing) spawnBug();
  }, 900);

  currentState.extra.cleanup = () => {
    playing = false;
    bugs.forEach((b) => clearInterval(b.int));
  };
}
