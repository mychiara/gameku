// 21. Body Parts Game
function renderBodyGame() {
  const data =
    CONFIG.bodyParts[Math.floor(Math.random() * CONFIG.bodyParts.length)];

  const correctItem = data.items[data.ans];
  const options = [...data.items].sort(() => Math.random() - 0.5);
  const correctIdx = options.indexOf(correctItem);

  const html = `
        <h3>Anggota Tubuh 👃</h3>
        ${addVoiceBtn(data.q)}
        <p style="font-size: 1.5rem; margin: 30px 0; font-weight: bold; color: var(--primary);">
            ${data.q}
        </p>
        <div class="choices">
            ${options
              .map(
                (item, idx) => `
                <button class="btn-choice" style="font-size: 1.5rem; padding: 20px;" onclick="checkBody(${idx}, ${correctIdx})">
                    ${item}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(data.q);
}

function checkBody(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderBodyGame());
  } else {
    alert("Pikirkan lagi gunanya bagian tubuh itu! 👃");
  }
}
