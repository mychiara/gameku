// 5. Puzzle Game (Simplified 3x3 Slide)
function renderPuzzleGame() {
  // Filter to available images in assets folder to avoid broken icons
  const availablePuzzles = CONFIG.puzzles.filter((p) =>
    [
      "Singa",
      "Gajah",
      "Panda",
      "Kucing",
      "Apel",
      "Bola",
      "Monyet",
      "Katak",
    ].includes(p.name),
  );
  const puzzle =
    availablePuzzles[Math.floor(Math.random() * availablePuzzles.length)];
  const imgSrc = `assets/${puzzle.file}`;
  currentState.extra.currentPuzzle = puzzle;
  const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5);
  currentState.extra.tiles = tiles;
  renderPuzzleGameContent();
  speak(`Ayo susun gambar ${puzzle.name}! Klik kotak untuk menukar posisi.`);
}

function renderPuzzleGameContent() {
  const puzzle = currentState.extra.currentPuzzle;
  const tiles = currentState.extra.tiles;
  // Strictly use assets folder
  const imgSrc = `assets/${puzzle.file}`;

  const html = `
        <h3>Susun Gambarnya!</h3>
        ${addVoiceBtn(`Susun gambar ${puzzle.name} dengan benar!`)}
        <p style="margin-bottom: 10px">Teka-teki: <b>${puzzle.name}</b></p>
        <div class="puzzle-grid" style="position: relative;">
            ${tiles
              .map((t, i) => {
                return `
                <div class="puzzle-tile" 
                     id="tile-${i}"
                     style="background-image: url('${imgSrc}'); 
                            background-size: 300px 300px;
                            background-position: ${-(t % 3) * 100}px ${-Math.floor(t / 3) * 100}px;
                            display: flex; align-items: center; justify-content: center;"
                     onclick="swapPuzzle(${i})">
                </div>
                `;
              })
              .join("")}
            
            <!-- Hidden image detector to check if file exists -->
            <img src="${imgSrc}" style="display:none" onerror="handleMissingPuzzleImage(this)">
        </div>
        <p id="puzzle-error" style="color: #ff4757; font-size: 0.9rem; margin-top: 10px; display: none;">
            ⚠️ Gambar <b>${puzzle.file}</b> belum ada di folder assets.
        </p>
        <p style="margin-top: 15px">Klik kotak untuk menukar posisi!</p>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 10px;">
            <button class="btn-choice" onclick="checkPuzzle()">Selesai!</button>
            <button class="btn-choice" style="background: #ddd;" onclick="renderPuzzleGame()">Ganti Gambar</button>
        </div>
    `;
  updateContainer(html);
}

function handleMissingPuzzleImage(img) {
  document.getElementById("puzzle-error").style.display = "block";
  const tiles = document.querySelectorAll(".puzzle-tile");
  tiles.forEach((t) => {
    t.style.backgroundImage = "none";
    t.style.backgroundColor = "#f1f2f6";
    t.innerHTML = '<span style="font-size: 2rem">🖼️</span>';
  });
}

function swapPuzzle(idx) {
  if (currentState.extra.lastIdx !== undefined) {
    const t1 = currentState.extra.tiles[currentState.extra.lastIdx];
    const t2 = currentState.extra.tiles[idx];
    currentState.extra.tiles[currentState.extra.lastIdx] = t2;
    currentState.extra.tiles[idx] = t1;
    currentState.extra.lastIdx = undefined;
    renderPuzzleGameContent(); // Call the unified render function
  } else {
    currentState.extra.lastIdx = idx;
    const tilesDom = document.querySelectorAll(".puzzle-tile");
    tilesDom.forEach(
      (t) => (t.style.border = "1px solid rgba(255,255,255,0.2)"),
    );
    tilesDom[idx].style.border = "4px solid var(--accent)";
  }
}

function checkPuzzle() {
  const correct = currentState.extra.tiles.every((t, i) => t === i);
  if (correct) {
    currentState.score += 50;
    showSuccess(() => renderPuzzleGame());
  } else {
    alert("Masih belum pas, ayo coba lagi!");
  }
}
