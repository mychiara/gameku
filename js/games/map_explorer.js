function renderMapExplorerGame() {
  const gridSize = 5;
  let playerPos = { x: 0, y: 0 };
  const goal = { x: 4, y: 4, item: "Peti Harta 💰" };

  const obstacles = [
    { x: 1, y: 1, type: "Gunung 🏔️" },
    { x: 3, y: 2, type: "Danau 🌊" },
    { x: 2, y: 4, type: "Hutan 🌳" },
  ];

  let html = `
        <h3 style="color: var(--primary)">Penjelajah Peta 🗺️</h3>
        <p>Gunakan tombol untuk menemukan <b>${goal.item}</b>!</p>
        
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
            <div id="map-grid" style="display: grid; grid-template-columns: repeat(${gridSize}, 60px); gap: 5px; background: #e0f2f1; padding: 10px; border-radius: 15px; border: 4px solid #4db6ac;">
                ${Array.from({ length: gridSize * gridSize })
                  .map((_, i) => {
                    const x = i % gridSize;
                    const y = Math.floor(i / gridSize);
                    let content = "";
                    const obs = obstacles.find((o) => o.x === x && o.y === y);
                    if (x === playerPos.x && y === playerPos.y) content = "🤠";
                    else if (x === goal.x && y === goal.y) content = "🎁";
                    else if (obs) content = obs.type.split(" ")[1];

                    return `<div id="map-${x}-${y}" style="width: 60px; height: 60px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 2rem; border: 1px solid #b2dfdb;">${content}</div>`;
                  })
                  .join("")}
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 60px); gap: 10px; align-content: center;">
                <div></div>
                <button class="btn-choice" style="width: 60px; padding: 15px;" onclick="moveExplorer(0, -1)">⬆️</button>
                <div></div>
                <button class="btn-choice" style="width: 60px; padding: 15px;" onclick="moveExplorer(-1, 0)">⬅️</button>
                <button class="btn-choice" style="width: 60px; padding: 15px;" onclick="moveExplorer(0, 1)">⬇️</button>
                <button class="btn-choice" style="width: 60px; padding: 15px;" onclick="moveExplorer(1, 0)">➡️</button>
            </div>
        </div>
    `;

  updateContainer(html);
  speak(
    "Ayo temukan peti harta karunnya! Hati-hati jangan sampai kena rintangan ya.",
  );

  window.moveExplorer = (dx, dy) => {
    const nx = playerPos.x + dx;
    const ny = playerPos.y + dy;

    if (nx < 0 || nx >= gridSize || ny < 0 || ny >= gridSize) return;

    const obs = obstacles.find((o) => o.x === nx && o.y === ny);
    if (obs) {
      alert(`Waduh, ada ${obs.type}! Cari jalan lain ya. 🏔️`);
      speak(`Ada rintangan di sana.`);
      return;
    }

    playerPos.x = nx;
    playerPos.y = ny;
    refreshMap();

    if (playerPos.x === goal.x && playerPos.y === goal.y) {
      setTimeout(() => {
        currentState.score += 50;
        showSuccess(() => renderMapExplorerGame());
      }, 300);
    }
  };

  function refreshMap() {
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const cell = document.getElementById(`map-${x}-${y}`);
        const obs = obstacles.find((o) => o.x === x && o.y === y);
        if (x === playerPos.x && y === playerPos.y) cell.innerText = "🤠";
        else if (x === goal.x && y === goal.y) cell.innerText = "🎁";
        else if (obs) cell.innerText = obs.type.split(" ")[1];
        else cell.innerText = "";
      }
    }
  }
}
