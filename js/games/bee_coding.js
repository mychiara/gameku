function renderBeeCodingGame() {
  const gridSize = 5;
  let beePos = { x: 0, y: 0 };
  let goal = { x: 4, y: 4 };

  // Randomize positions, but keep distance
  do {
    beePos = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    goal = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
  } while (Math.abs(beePos.x - goal.x) + Math.abs(beePos.y - goal.y) < 3);

  let commands = [];

  let html = `
        <h3 style="color: var(--primary)">Jalan Pulang Lebah 🐝</h3>
        <p>Susun perintah panah untuk membantu Lebah ke Bunga!</p>
        
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
            <div id="bee-grid" style="display: grid; grid-template-columns: repeat(${gridSize}, 60px); gap: 5px; background: #f0f0f0; padding: 10px; border-radius: 10px; border: 4px solid #ffd54f;">
                ${Array.from({ length: gridSize * gridSize })
                  .map((_, i) => {
                    const x = i % gridSize;
                    const y = Math.floor(i / gridSize);
                    let content = "";
                    if (x === beePos.x && y === beePos.y) content = "🐝";
                    else if (x === goal.x && y === goal.y) content = "🌻";
                    return `<div id="cell-${x}-${y}" style="width: 60px; height: 60px; background: white; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">${content}</div>`;
                  })
                  .join("")}
            </div>

            <div style="width: 200px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                    <button class="btn-choice" style="padding: 10px;" onclick="addBeeCommand('⬆️')">⬆️</button>
                    <button class="btn-choice" style="padding: 10px;" onclick="addBeeCommand('⬇️')">⬇️</button>
                    <button class="btn-choice" style="padding: 10px;" onclick="addBeeCommand('⬅️')">⬅️</button>
                    <button class="btn-choice" style="padding: 10px;" onclick="addBeeCommand('➡️')">➡️</button>
                </div>
                <div id="bee-commands" style="min-height: 50px; background: #eee; padding: 10px; border-radius: 10px; display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 10px;">
                </div>
                <button class="btn-choice" style="width: 100%; background: var(--success); color: white;" onclick="runBeeCoding()">Jalankan! 🚀</button>
                <button class="btn-choice" style="width: 100%; margin-top: 5px; background: #ccc;" onclick="resetBeeCommands()">Hapus 🗑️</button>
            </div>
        </div>
    `;

  updateContainer(html);
  speak(
    "Ayo bantu lebah cantik ini pulang ke bunganya. Susun perintah jalanmu ya!",
  );

  window.addBeeCommand = (cmd) => {
    if (commands.length >= 10) return;
    commands.push(cmd);
    renderBeeCommandList();
  };

  window.resetBeeCommands = () => {
    commands = [];
    renderBeeCommandList();
  };

  function renderBeeCommandList() {
    document.getElementById("bee-commands").innerHTML = commands
      .map((c) => `<span style="font-size: 1.5rem;">${c}</span>`)
      .join("");
  }

  window.runBeeCoding = async () => {
    if (commands.length === 0) return;
    let tempPos = { ...beePos };

    for (let cmd of commands) {
      // Visualize step by step
      if (cmd === "⬆️") tempPos.y--;
      if (cmd === "⬇️") tempPos.y++;
      if (cmd === "⬅️") tempPos.x--;
      if (cmd === "➡️") tempPos.x++;

      // Bounds check
      if (
        tempPos.x < 0 ||
        tempPos.x >= gridSize ||
        tempPos.y < 0 ||
        tempPos.y >= gridSize
      ) {
        alert("Waduh, lebahnya nabrak pagar! 🐝💥");
        return;
      }

      // Temporary visual (could be better with real delay, but keeping it simple for now)
    }

    if (tempPos.x === goal.x && tempPos.y === goal.y) {
      currentState.score += 50;
      showSuccess(() => renderBeeCodingGame());
    } else {
      alert("Lebahnya belum sampai ke bunga. Coba lagi ya! 🐝");
      speak("Lebahnya belum sampai ke bunga.");
    }
  };
}
