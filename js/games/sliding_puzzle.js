function renderSlidingPuzzleGame() {
  let score = 0;
  const size = 3; // 3x3 puzzle
  let emptyIdx = 8;
  let tiles = [];

  const html = `
        <h3>Puzzle Geser 🧩</h3>
        <p style="text-align: center; margin-bottom: 20px;">Lengkapi gambar dengan menggeser kotak!</p>
        <div id="sp-area" style="position: relative; width: 300px; height: 300px; background: #e0e0e0; border-radius: 10px; border: 4px solid #ff9800; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr); gap: 2px;">
        </div>
    `;
  updateContainer(html);
  speak("Geser kotak ke ruang kosong untuk menyusun gambarnya!");

  const area = document.getElementById("sp-area");

  // Abstract emoji puzzle parts instead of image mapping to keep it lightweight.
  // 0-8 flat map -> 0 is top left, 8 is empty bottom right
  const solution = ["🐘", "🦒", "🦓", "🐒", "🦁", "🐅", "🐰", "🦊", ""];
  let currentTiles = [...solution];

  const shuffle = () => {
    // simple shuffle that might be unsolvable sometimes if true random, so we make random valid moves
    for (let i = 0; i < 50; i++) {
      const neighbors = getNeighbors(emptyIdx);
      const swapIdx = neighbors[Math.floor(Math.random() * neighbors.length)];
      currentTiles[emptyIdx] = currentTiles[swapIdx];
      currentTiles[swapIdx] = "";
      emptyIdx = swapIdx;
    }
  };

  function getNeighbors(idx) {
    let n = [];
    const row = Math.floor(idx / 3);
    const col = idx % 3;
    if (row > 0) n.push(idx - 3); // top
    if (row < 2) n.push(idx + 3); // bottom
    if (col > 0) n.push(idx - 1); // left
    if (col < 2) n.push(idx + 1); // right
    return n;
  }

  shuffle();
  renderGrid();

  function renderGrid() {
    area.innerHTML = "";
    currentTiles.forEach((tile, index) => {
      const d = document.createElement("div");
      d.style.display = "flex";
      d.style.alignItems = "center";
      d.style.justifyContent = "center";
      d.style.fontSize = "3rem";
      d.style.background = tile === "" ? "#e0e0e0" : "#4caf50";
      d.style.color = "white";
      d.style.cursor = tile === "" ? "default" : "pointer";
      d.style.borderRadius = "5px";
      d.style.transition = "all 0.2s";

      d.innerHTML = tile;

      d.onclick = () => {
        const neighbors = getNeighbors(emptyIdx);
        if (neighbors.includes(index)) {
          // Swap
          currentTiles[emptyIdx] = currentTiles[index];
          currentTiles[index] = "";
          emptyIdx = index;
          renderGrid();

          if (checkWin()) {
            setTimeout(() => {
              currentState.score += 50;
              showSuccess(() => renderSlidingPuzzleGame());
            }, 500);
          }
        }
      };
      area.appendChild(d);
    });
  }

  function checkWin() {
    for (let i = 0; i < solution.length; i++) {
      if (currentTiles[i] !== solution[i]) return false;
    }
    return true;
  }
}
