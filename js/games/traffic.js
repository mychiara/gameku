// 22. Traffic Signs Game
function renderTrafficGame() {
  const data =
    CONFIG.trafficSigns[Math.floor(Math.random() * CONFIG.trafficSigns.length)];

  // Generate options
  const options = [data.desc];
  while (options.length < 3) {
    const rand =
      CONFIG.trafficSigns[
        Math.floor(Math.random() * CONFIG.trafficSigns.length)
      ].desc;
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Rambu Jalan 🚦</h3>
        ${addVoiceBtn(`Apa arti dari rambu ini?`)}
        <div style="font-size: 8rem; margin: 30px 0; background: #fffbe6; display: inline-block; padding: 20px; border-radius: 20px; border: 5px solid #ffcc00; animation: pulse 2s infinite;">
            ${data.sign}
        </div>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Apa arti dari rambu di atas?</p>
        <div class="choices">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" onclick="checkTraffic('${opt}', '${data.desc}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Apa arti dari tanda ini?`);
}

function checkTraffic(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderTrafficGame());
  } else {
    alert("Bukan itu artinya, ayo ingat lagi! 🚦");
  }
}
