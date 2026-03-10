// 23. Space Explorer Game
function renderSpaceGame() {
  const data = CONFIG.space[Math.floor(Math.random() * CONFIG.space.length)];

  // Generate options
  const options = [data.name];
  while (options.length < 3) {
    const rand =
      CONFIG.space[Math.floor(Math.random() * CONFIG.space.length)].name;
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Jelajah Tata Surya 🪐</h3>
        ${addVoiceBtn(data.desc)}
        <div style="font-size: 8rem; margin: 30px 0; animation: float 3s infinite ease-in-out;">
            ${data.name.split(" ")[1] || data.name}
        </div>
        <p style="font-size: 1.3rem; margin-bottom: 20px; padding: 0 20px;">${data.desc}</p>
        <p style="font-weight: bold; color: var(--primary);">Benda apakah ini?</p>
        <div class="choices">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" onclick="checkSpace('${opt}', '${data.name}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(data.desc);
}

function checkSpace(selected, correct) {
  if (selected === correct) {
    currentState.score += 25;
    showSuccess(() => renderSpaceGame());
  } else {
    alert("Bukan itu, ayo cari tahu lagi tentang bintang! 🚀");
  }
}
