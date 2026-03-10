function renderMazeGame() {
  const data = CONFIG.maze[Math.floor(Math.random() * CONFIG.maze.length)];

  const options = [...data.paths].sort(() => Math.random() - 0.5);

  const html = `
        <h3>Labirin Edukasi 🌀</h3>
        ${addVoiceBtn(data.q)}
        
        <p style="font-size: 1.3rem; margin-bottom: 20px; font-weight: bold;">${data.q}</p>
        
        <div style="font-size: 5rem; margin: 20px 0; position: relative;">
            <div style="display: inline-block; animation: pulse 2s infinite;">${data.icon}</div>
            <div style="font-size: 3rem; margin: 10px 0;">⬇️</div>
        </div>

        <div class="choices" style="grid-template-columns: repeat(1, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 1.5rem; padding: 15px;" onclick="checkMaze('${opt}', '${data.ans}', ${data.isTrap ? "true" : "false"})">
                    Maju ke Arah: ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(data.q);
}

function checkMaze(selected, correct, isTrap) {
  if (selected === correct) {
    if (isTrap) {
      // Special trap case
      alert("Oh tidak! Kamu masuk perangkap! 💥");
    } else {
      currentState.score += 30;
      showSuccess(() => renderMazeGame());
    }
  } else {
    alert("Jalan buntu! Pilih arah jalan yang lain ya! 🚧");
  }
}
