// 14. Opposites Game
function renderOppositeGame() {
  const data =
    CONFIG.opposites[Math.floor(Math.random() * CONFIG.opposites.length)];

  // Generate options
  const options = [data.b];
  const allBs = CONFIG.opposites.map((o) => o.b);
  while (options.length < 3) {
    const rand = allBs[Math.floor(Math.random() * allBs.length)];
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Lawan Kata</h3>
        ${addVoiceBtn(`Berasakah lawan kata dari ${data.a}?`)}
        <p style="font-size: 1.2rem; margin-bottom: 20px">Apa lawan kata dari:</p>
        <div style="font-size: 4rem; padding: 30px; background: #fff5f5; border-radius: 20px; border: 4px solid var(--primary); margin-bottom: 30px; font-weight: 800; color: var(--primary);">
            ${data.a}
        </div>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="padding: 15px; font-size: 1.1rem;" onclick="checkOpposite('${opt}', '${data.b}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Apa lawan kata dari ${data.a.split(" ")[0]}?`);
}

function checkOpposite(selected, correct) {
  if (selected === correct) {
    currentState.score += 25;
    showSuccess(() => renderOppositeGame());
  } else {
    alert("Pikirkan lawannya lagi ya! ↔️");
  }
}
