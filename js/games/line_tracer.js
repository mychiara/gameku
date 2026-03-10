function renderLineTracerGame() {
  const canvasSize = 300;
  let isDrawing = false;
  let pathPoints = [];
  const targetPath = [
    { x: 50, y: 150 },
    { x: 100, y: 50 },
    { x: 200, y: 50 },
    { x: 250, y: 150 },
    { x: 200, y: 250 },
    { x: 100, y: 250 },
    { x: 50, y: 150 },
  ];

  let html = `
        <h3 style="color: var(--primary)">Jejak Tali 🧶</h3>
        <p>Ikuti garis putus-putus dengan jarimu!</p>
        
        <div id="tracer-container" style="position: relative; width: ${canvasSize}px; height: ${canvasSize}px; margin: 0 auto; background: white; border: 5px solid #ffccbc; border-radius: 20px; touch-action: none;">
            <svg style="position:absolute; width:100%; height:100%; pointer-events:none;">
                <polyline points="${targetPath.map((p) => `${p.x},${p.y}`).join(" ")}" fill="none" stroke="#eee" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
                <polyline points="${targetPath.map((p) => `${p.x},${p.y}`).join(" ")}" fill="none" stroke="#ddd" stroke-width="2" stroke-dasharray="5,5" />
                <polyline id="player-line" points="" fill="none" stroke="var(--primary)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div id="ant-cursor" style="position: absolute; left: ${targetPath[0].x}px; top: ${targetPath[0].y}px; font-size: 2rem; transform: translate(-50%, -50%); pointer-events: none;">🐜</div>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <button class="btn-choice" style="background: #ccc;" onclick="resetLineTracer()">Hapus 🗑️</button>
        </div>
    `;

  updateContainer(html);
  speak("Ikuti garisnya pelan-pelan ya untuk membantu semut berjalan.");

  const container = document.getElementById("tracer-container");
  const playerLine = document.getElementById("player-line");
  const ant = document.getElementById("ant-cursor");

  container.onpointerdown = (e) => {
    isDrawing = true;
    pathPoints = [];
    addPoint(e);
  };

  container.onpointermove = (e) => {
    if (!isDrawing) return;
    addPoint(e);
  };

  container.onpointerup = () => {
    isDrawing = false;
    checkTracingSuccess();
  };

  function addPoint(e) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Simple proximity check to target path
    if (isNearPath(x, y)) {
      pathPoints.push({ x, y });
      playerLine.setAttribute(
        "points",
        pathPoints.map((p) => `${p.x},${p.y}`).join(" "),
      );
      ant.style.left = x + "px";
      ant.style.top = y + "px";
    } else {
      isDrawing = false;
      alert("Keluar jalur! Ayo coba lebih teliti lagi ya. 😊");
      resetLineTracer();
    }
  }

  function isNearPath(x, y) {
    return targetPath.some((p) => {
      const dist = Math.sqrt((x - p.x) ** 2 + (y - p.y) ** 2);
      return dist < 40; // corridor width
    });
  }

  function checkTracingSuccess() {
    if (pathPoints.length > 50) {
      // Enough points to consider it drawn
      currentState.score += 40;
      showSuccess(() => renderLineTracerGame());
    }
  }

  window.resetLineTracer = () => renderLineTracerGame();
}
