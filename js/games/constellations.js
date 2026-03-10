function renderConstellationGame() {
  const stars_data = [
    {
      name: "Kucing 🐱",
      points: [
        { x: 50, y: 100 },
        { x: 100, y: 50 },
        { x: 200, y: 50 },
        { x: 250, y: 100 },
        { x: 200, y: 200 },
        { x: 100, y: 200 },
      ],
    },
    {
      name: "Ikan 🐟",
      points: [
        { x: 50, y: 150 },
        { x: 150, y: 50 },
        { x: 250, y: 150 },
        { x: 150, y: 250 },
      ],
    },
  ];

  const task = stars_data[Math.floor(Math.random() * stars_data.length)];
  let connected = [];

  let html = `
        <h3 style="color: var(--primary)">Teropong Bintang: ${task.name} 🌑</h3>
        <p>Hubungkan semua bintang untuk membentuk Rasi Bintang!</p>
        
        <div id="sky-canvas" style="position: relative; width: 300px; height: 300px; margin: 0 auto; background: #1a237e; border-radius: 50%; border: 8px solid #303f9f; overflow: hidden; box-shadow: inset 0 0 50px rgba(0,0,0,0.5);">
            <svg id="const-svg" style="position:absolute; width:100%; height:100%; pointer-events:none;">
                <path id="const-path" d="" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3" stroke-dasharray="5,5" />
            </svg>
            ${task.points
              .map(
                (p, i) => `
                <div class="star" onclick="connectStar(this, ${i})"
                     style="position: absolute; left: ${p.x}px; top: ${p.y}px; width: 20px; height: 20px; background: white; border-radius: 50%; transform: translate(-50%, -50%); cursor: pointer; box-shadow: 0 0 10px white; transition: 0.3s;">
                </div>
            `,
              )
              .join("")}
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <button class="btn-choice" style="background: #ccc;" onclick="resetConstellation()">Ulangi ✨</button>
        </div>
    `;

  updateContainer(html);
  speak(
    `Hubungkan bintang-bintang di langit untuk membuat rasi bintang ${task.name}!`,
  );

  window.connectStar = (el, idx) => {
    if (connected.includes(idx)) return;

    connected.push(idx);
    el.style.background = "gold";
    el.style.boxShadow = "0 0 20px gold";

    updateConstLine();

    if (connected.length === task.points.length) {
      setTimeout(() => {
        speak(`Wah, indah sekali! Ini adalah rasi bintang ${task.name}!`);
        currentState.score += 50;
        showSuccess(() => renderConstellationGame());
      }, 500);
    }
  };

  function updateConstLine() {
    if (connected.length < 2) return;
    let d =
      "M " + task.points[connected[0]].x + " " + task.points[connected[0]].y;
    for (let i = 1; i < connected.length; i++) {
      d +=
        " L " + task.points[connected[i]].x + " " + task.points[connected[i]].y;
    }
    document.getElementById("const-path").setAttribute("d", d);
    document.getElementById("const-path").setAttribute("stroke", "white");
    document
      .getElementById("const-path")
      .setAttribute("stroke-dasharray", "none");
  }

  window.resetConstellation = () => renderConstellationGame();
}
