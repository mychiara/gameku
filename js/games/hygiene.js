function renderHygieneGame() {
  const data =
    CONFIG.hygiene[Math.floor(Math.random() * CONFIG.hygiene.length)];

  const options = [data.ans];
  while (options.length < 3) {
    const rand =
      CONFIG.hygiene[Math.floor(Math.random() * CONFIG.hygiene.length)].ans;
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Kebersihan Diri 🧽</h3>
        ${addVoiceBtn("Dengarkan masalah ini")}
        <div style="font-size: 6rem; margin: 20px 0; filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1)); display: inline-block;">
            🛁
        </div>
        <p style="font-size: 1.4rem; line-height: 1.5; padding: 20px; background: #e0fbfc; border-radius: 15px; border: 3px solid #98c1d9; margin: 10px 0 30px; font-weight: bold; color: #293241;">
            "${data.case}"
        </p>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Kamu harus pakai benda apa nih?</p>
        <div class="choices" style="grid-template-columns: repeat(1, 1fr); gap: 12px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 1.3rem; padding: 15px;" onclick="checkHygiene('${opt}', '${data.ans}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(data.case);
}

function checkHygiene(selected, correct) {
  if (selected === correct) {
    currentState.score += 15;
    showSuccess(() => renderHygieneGame());
  } else {
    alert("Yah, kurang tepat. Alatnya bukan itu sayang! 🧽");
  }
}
