function renderDigitalClockGame() {
  const data = CONFIG.clocks[Math.floor(Math.random() * CONFIG.clocks.length)];

  const html = `
        <h3>Jam Digital ⌚</h3>
        ${addVoiceBtn(`Jam berapakah ini?`)}
        
        <div style="display: flex; justify-content: center; margin: 30px 0;">
            <div style="background: #333; color: #00ff00; font-family: 'Courier New', Courier, monospace; font-size: 4rem; padding: 20px 40px; border-radius: 15px; border: 5px solid #555; box-shadow: 0 0 20px rgba(0,255,0,0.2); letter-spacing: 5px;">
                ${data.time}
            </div>
        </div>

        <p style="font-size: 1.2rem; margin-bottom: 20px; text-align: center;">Pilih cara membacanya:</p>
        
        <div class="choices">
            ${generateDigitalClockOptions(data.text)
              .map(
                (opt) => `
                <button class="btn-choice" onclick="checkDigitalClock('${opt}', '${data.text}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Jam ${data.time}. Jam berapakah ini dalam kata-kata?`);
}

function generateDigitalClockOptions(correct) {
  const opts = [correct];
  while (opts.length < 3) {
    const rand =
      CONFIG.clocks[Math.floor(Math.random() * CONFIG.clocks.length)].text;
    if (!opts.includes(rand)) opts.push(rand);
  }
  return opts.sort(() => Math.random() - 0.5);
}

function checkDigitalClock(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderDigitalClockGame());
  } else {
    alert("Coba perhatikan angka jamnya lagi ya! ⌚");
    speak("Coba perhatikan angka jamnya lagi ya");
  }
}
