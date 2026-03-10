function renderWhackMoleGame() {
  let score = 0;
  let playing = true;
  let holes = [];

  let html = `
        <h3>Pukul Mole 🔨</h3>
        <p style="text-align: center; margin-bottom: 20px;">Tikus Dipukul: <span id="wm-score">0</span></p>
        <div id="wm-area" style="position: relative; width: 100%; height: 350px; background: #689f38; border-radius: 10px; border: 3px solid #33691e; overflow: hidden; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr); gap: 10px; padding: 20px; cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><text y="24" font-size="24">🔨</text></svg>') 16 16, crosshair;">
        </div>
    `;
  updateContainer(html);
  speak("Pukul tikus tanah yang muncul dari lubangnya!");

  const area = document.getElementById("wm-area");
  const scoreDisplay = document.getElementById("wm-score");

  for (let i = 0; i < 6; i++) {
    const holeContainer = document.createElement("div");
    holeContainer.style.position = "relative";
    holeContainer.style.background = "#3e2723"; // dark hole
    holeContainer.style.borderRadius = "50%";
    holeContainer.style.width = "80px";
    holeContainer.style.height = "30px";
    holeContainer.style.margin = "auto";
    holeContainer.style.marginTop = "60px"; // align bottom

    const mole = document.createElement("div");
    mole.innerHTML = "🐭";
    mole.style.fontSize = "4rem";
    mole.style.position = "absolute";
    mole.style.bottom = "-10px"; // hidden initially
    mole.style.left = "50%";
    mole.style.transform = "translateX(-50%)";
    mole.style.transition = "bottom 0.1s ease-in-out";
    mole.style.pointerEvents = "none"; // so we click on area

    holeContainer.appendChild(mole);
    area.appendChild(holeContainer);
    holes.push({
      container: holeContainer,
      mole: mole,
      up: false,
      timeout: null,
    });

    holeContainer.onmousedown = holeContainer.ontouchstart = (e) => {
      e.preventDefault();
      if (!playing) return;
      // Check if mole is up
      if (holes[i].up) {
        holes[i].mole.innerHTML = "💥";
        setTimeout(() => {
          holes[i].mole.innerHTML = "🐭";
        }, 200);

        hideMole(i);

        score++;
        scoreDisplay.innerText = score;
        if (score >= 8) {
          playing = false;
          currentState.score += 30;
          showSuccess(() => renderWhackMoleGame());
        }
      }
    };
  }

  function showMole(idx) {
    if (!playing) return;
    if (holes[idx].up) return;

    holes[idx].up = true;
    holes[idx].mole.style.bottom = "10px"; // pops up

    holes[idx].timeout = setTimeout(
      () => {
        hideMole(idx);
      },
      Math.random() * 500 + 400,
    ); // Up for 0.4-0.9s
  }

  function hideMole(idx) {
    if (!playing) return;
    holes[idx].up = false;
    holes[idx].mole.style.bottom = "-40px"; // down
    clearTimeout(holes[idx].timeout);
  }

  function gameLoop() {
    if (!playing) return;
    // randomly pick a hole
    const idx = Math.floor(Math.random() * 6);
    showMole(idx);

    setTimeout(gameLoop, Math.random() * 1000 + 300);
  }

  setTimeout(gameLoop, 1000);

  currentState.extra.cleanup = () => {
    playing = false;
    holes.forEach((h) => clearTimeout(h.timeout));
  };
}
