// 24. Music Maestro Game
function renderMusicGame() {
  const data = CONFIG.music[Math.floor(Math.random() * CONFIG.music.length)];
  const types = ["Petik", "Tiup", "Pukul", "Gesek", "Tuts", "Kocok", "Goyang"];

  // Ensure the correct type is in the options and add some randoms
  let options = [data.type];
  const availableTypes = [...new Set(CONFIG.music.map((m) => m.type))];
  while (options.length < 3) {
    const rand =
      availableTypes[Math.floor(Math.random() * availableTypes.length)];
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Alat Musik 🎻</h3>
        ${addVoiceBtn(`Bagaimana cara memainkan alat musik ${data.name}?`)}
        <div style="font-size: 8rem; margin: 30px 0;">
            ${data.name}
        </div>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Bagaimana cara memainkan alat musik di atas?</p>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="padding: 15px;" onclick="checkMusic('${opt}', '${data.type}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Bagaimana cara memainkan alat musik ${data.name.split(" ")[0]}?`);
}

function checkMusic(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderMusicGame());
  } else {
    alert("Caranya bukan itu, coba ingat-ingat lagi! 🎼");
  }
}
