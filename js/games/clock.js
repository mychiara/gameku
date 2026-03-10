// 20. Clock Game
function renderClockGame() {
  const data = CONFIG.clocks[Math.floor(Math.random() * CONFIG.clocks.length)];

  // Simple Analog Clock simulation using CSS
  const [hrs, mins] = data.time.split(":").map(Number);
  const hrDeg = (hrs % 12) * 30 + mins * 0.5;
  const minDeg = mins * 6;

  const html = `
        <h3>Belajar Jam ⏰</h3>
        ${addVoiceBtn(`Jam berapakah ini?`)}
        <div class="clock-face" style="width: 200px; height: 200px; border: 8px solid #333; border-radius: 50%; margin: 20px auto; position: relative; background: white;">
            <div class="hand hour" style="width: 6px; height: 50px; background: #333; position: absolute; bottom: 50%; left: calc(50% - 3px); transform-origin: bottom; transform: rotate(${hrDeg}deg); border-radius: 3px;"></div>
            <div class="hand minute" style="width: 4px; height: 80px; background: #ff4757; position: absolute; bottom: 50%; left: calc(50% - 2px); transform-origin: bottom; transform: rotate(${minDeg}deg); border-radius: 2px;"></div>
            <div class="center-dot" style="width: 12px; height: 12px; background: #333; border-radius: 50%; position: absolute; top: calc(50% - 6px); left: calc(50% - 6px);"></div>
            ${[3, 6, 9, 12].map((n) => `<span style="position: absolute; font-weight: bold; ${n === 12 ? "top:5px;left:45%" : n === 3 ? "right:5px;top:45%" : n === 6 ? "bottom:5px;left:47%" : "left:5px;top:45%"}">${n}</span>`).join("")}
        </div>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Pilih waktu yang tepat:</p>
        <div class="choices">
            ${generateClockOptions(data.text)
              .map(
                (opt) => `
                <button class="btn-choice" onclick="checkClock('${opt}', '${data.text}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Jam berapakah ini?`);
}

function generateClockOptions(correct) {
  const opts = [correct];
  while (opts.length < 3) {
    const rand =
      CONFIG.clocks[Math.floor(Math.random() * CONFIG.clocks.length)].text;
    if (!opts.includes(rand)) opts.push(rand);
  }
  return opts.sort(() => Math.random() - 0.5);
}

function checkClock(selected, correct) {
  if (selected === correct) {
    currentState.score += 30;
    showSuccess(() => renderClockGame());
  } else {
    alert("Lihat jarum jamnya baik-baik ya! ⏰");
  }
}
