// 10. Pattern Logic Game
function renderPatternGame() {
  const data =
    CONFIG.patterns[Math.floor(Math.random() * CONFIG.patterns.length)];

  // Find unique emojis from the sequence to use as options
  const uniqueItems = [...new Set(data.seq)];
  const options = [...uniqueItems];

  // Add extra random option if less than 3
  const allEmojis = [
    "🍎",
    "🍌",
    "🍇",
    "🐶",
    "🐱",
    "🚗",
    "⭐",
    "🌙",
    "🔴",
    "🔵",
    "🟢",
  ];
  while (options.length < 3) {
    const rand = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Lengkapi Pola!</h3>
        <p style="margin-bottom: 20px">Apa yang muncul selanjutnya?</p>
        <div class="pattern-display" style="display: flex; justify-content: center; gap: 10px; margin-bottom: 40px; background: #fff9db; padding: 20px; border-radius: 20px; border: 4px dashed #fab005;">
            ${data.seq.map((item) => `<span style="font-size: 3rem;">${item}</span>`).join(' <span style="font-size: 2rem; color: #fab005; align-self: center;">→</span> ')}
            <span style="font-size: 3rem; background: #fff; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 10px; border: 3px solid #fab005; color: #fab005;">?</span>
        </div>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 3rem; padding: 15px;" onclick="checkPattern('${opt}', '${data.ans}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
}

function checkPattern(selected, correct) {
  if (selected === correct) {
    currentState.score += 25;
    showSuccess(() => renderPatternGame());
  } else {
    alert("Pikirkan lagi polanya ya! 🧩");
  }
}
