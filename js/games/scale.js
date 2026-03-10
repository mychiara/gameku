// 13. Scale Match Game (Big vs Small)
function renderScaleGame() {
  const data = CONFIG.scale[Math.floor(Math.random() * CONFIG.scale.length)];

  const correctItem = data.items[data.ans];
  const options = [...data.items].sort(() => Math.random() - 0.5);
  const correctIdx = options.indexOf(correctItem);

  const html = `
        <h3>Besar & Kecil</h3>
        ${addVoiceBtn(data.q)}
        <p style="font-size: 1.5rem; margin-bottom: 30px"><b>${data.q}</b></p>
        <div class="choices" style="grid-template-columns: 1fr 1fr; gap: 30px; align-items: flex-end;">
            ${options
              .map(
                (item, idx) => `
                <button class="btn-choice" style="padding: 20px; display: flex; flex-direction: column; align-items: center;" onclick="checkScale(${idx}, ${correctIdx})">
                    <span style="font-size: ${item.s * 1.5}rem; margin-bottom: 15px;">${item.e}</span>
                    <span style="font-size: 1rem; opacity: 0.7;">Klik ini!</span>
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(data.q);
}

function checkScale(selected, correct) {
  if (selected === correct) {
    currentState.score += 15;
    showSuccess(() => renderScaleGame());
  } else {
    alert("Pikirkan ukurannya lagi ya! ⚖️");
  }
}
