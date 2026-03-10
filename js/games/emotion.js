// 12. Emotion Explorer Game
function renderEmotionGame() {
  const data =
    CONFIG.emotions[Math.floor(Math.random() * CONFIG.emotions.length)];

  // Generate options
  const options = [data.name];
  const allNames = CONFIG.emotions.map((e) => e.name);
  while (options.length < 3) {
    const rand = allNames[Math.floor(Math.random() * allNames.length)];
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Mengenal Emosi</h3>
        ${addVoiceBtn(`Wajah ini sedang merasa apa?`)}
        <div class="emotion-display" style="font-size: 10rem; margin-bottom: 30px; animation: pulse 2s infinite ease-in-out;">
            ${data.emoji}
        </div>
        <p style="font-size: 1.5rem; margin-bottom: 20px">Dia merasa <b>...</b></p>
        <div class="choices">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" onclick="checkEmotion('${opt}', '${data.name}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Wajah ini sedang merasa apa?`);
}

function checkEmotion(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderEmotionGame());
  } else {
    alert("Coba perhatikan ekspresinya lagi ya! 😊");
  }
}
