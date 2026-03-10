function renderFamilyGame() {
  const data = CONFIG.family[Math.floor(Math.random() * CONFIG.family.length)];

  const options = [data.ans];
  while (options.length < 3) {
    const rand =
      CONFIG.family[Math.floor(Math.random() * CONFIG.family.length)].ans;
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Keluarga Kita 👪</h3>
        ${addVoiceBtn(data.q)}
        <p style="font-size: 1.5rem; line-height: 1.5; padding: 20px; background: #fff5f5; border-radius: 15px; border: 3px solid var(--primary); margin: 30px 0; font-weight: bold; color: var(--primary);">
            ${data.q}
        </p>
        <div class="choices" style="grid-template-columns: repeat(1, 1fr); gap: 12px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 1.3rem; padding: 15px;" onclick="checkFamily('${opt}', '${data.ans}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(data.q);
}

function checkFamily(selected, correct) {
  if (selected === correct) {
    currentState.score += 25;
    showSuccess(() => renderFamilyGame());
  } else {
    alert("Wah, tebakanmu kurang pas. Ingat-ingat silsilah keluarganya ya! 👪");
  }
}
