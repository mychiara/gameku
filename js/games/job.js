// 15. Dream Jobs & Tools Game
function renderJobGame() {
  const data = CONFIG.jobs[Math.floor(Math.random() * CONFIG.jobs.length)];

  // Generate options for tools
  const options = [data.t];
  const allTools = CONFIG.jobs.map((j) => j.t);
  while (options.length < 3) {
    const rand = allTools[Math.floor(Math.random() * allTools.length)];
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Pekerjaan & Alatnya</h3>
        ${addVoiceBtn(`Apa alat yang sering dibawa oleh ${data.p}?`)}
        <p style="font-size: 1.2rem; margin-bottom: 20px">Apa alat yang sering dibawa oleh:</p>
        <div style="font-size: 4rem; padding: 20px; background: #ebfbee; border-radius: 20px; border: 4px solid var(--secondary); margin-bottom: 30px; font-weight: 800;">
            ${data.p}
        </div>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 1.1rem; padding: 15px;" onclick="checkJob('${opt}', '${data.t}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Apa alat yang sering dibawa oleh ${data.p.split(" ")[0]}?`);
}

function checkJob(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderJobGame());
  } else {
    alert("Coba ingat-ingat lagi alatnya ya! 🚒");
  }
}
