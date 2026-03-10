function renderSymmetryGame() {
  const grids = [
    {
      name: "Kupu-kupu 🦋",
      left: [
        [0, 0, 1, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1],
      ],
    },
    {
      name: "Wajah 🤡",
      left: [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
      ],
    },
    {
      name: "Rumah 🏠",
      left: [
        [0, 0, 1, 0],
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
    },
  ];

  const task = grids[Math.floor(Math.random() * grids.length)];
  const size = task.left.length;
  let playerRight = Array.from({ length: size }, () => Array(size).fill(0));

  let html = `
        <h3 style="color: var(--primary)">Cermin Ajaib: ${task.name} 🪞</h3>
        <p>Warnai sisi kanan agar sama persis dengan sisi kiri!</p>
        
        <div style="display: flex; justify-content: center; gap: 5px; margin: 20px 0;">
            <div id="sym-left" style="display: grid; grid-template-columns: repeat(${size}, 50px); border-right: 4px solid var(--secondary);">
                ${task.left
                  .map((row, r) =>
                    row
                      .map(
                        (cell, c) => `
                    <div style="width: 50px; height: 50px; border: 1px solid #ddd; background: ${cell ? "var(--primary)" : "white"};"></div>
                `,
                      )
                      .join(""),
                  )
                  .join("")}
            </div>
            <div id="sym-right" style="display: grid; grid-template-columns: repeat(${size}, 50px);">
                ${playerRight
                  .map((row, r) =>
                    row
                      .map(
                        (cell, c) => `
                    <div class="sym-cell" data-r="${r}" data-c="${c}" onclick="toggleSymCell(this, ${r}, ${size - 1 - c})"
                         style="width: 50px; height: 50px; border: 1px solid #ddd; background: white; cursor: pointer; transition: 0.2s;"></div>
                `,
                      )
                      .join(""),
                  )
                  .join("")}
            </div>
        </div>

        <div style="text-align: center;">
            <button class="btn-choice" style="background: var(--success); color: white;" onclick="checkSymmetry()">Cek Cermin! ✨</button>
        </div>
    `;

  updateContainer(html);
  speak("Lengkapi sisi kanan agar sama seperti sisi kiri ya.");

  window.toggleSymCell = (el, r, c) => {
    // Correcting index to match symmetry logic
    const realC = size - 1 - c;
    playerRight[r][realC] = playerRight[r][realC] ? 0 : 1;
    el.style.background = playerRight[r][realC] ? "var(--primary)" : "white";
    el.style.transform = "scale(0.9)";
    setTimeout(() => (el.style.transform = "scale(1)"), 100);
  };

  window.checkSymmetry = () => {
    let isMatch = true;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (task.left[r][c] !== playerRight[r][c]) {
          isMatch = false;
          break;
        }
      }
    }

    if (isMatch) {
      currentState.score += 40;
      showSuccess(() => renderSymmetryGame());
    } else {
      alert("Hm, cerminnya belum pas. Periksa lagi ya! 🧐");
      speak("Periksa lagi ya, buatlah sisi kanan sama dengan sisi kiri.");
    }
  };
}
