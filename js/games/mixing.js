// 17. Color Mixing Game
function renderMixingGame() {
  const data = CONFIG.mixing[Math.floor(Math.random() * CONFIG.mixing.length)];

  // Generate options for results
  const options = [data.r];
  const allResults = CONFIG.mixing.map((m) => m.r);
  while (options.length < 3) {
    const rand = allResults[Math.floor(Math.random() * allResults.length)];
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Ajaibnya Warna!</h3>
        ${addVoiceBtn(`Jika dicampur, jadinya warna apa?`)}
        <p style="font-size: 1.2rem; margin-bottom: 20px">Jika dicampur, jadinya apa?</p>
        <div class="mixing-display" style="display: flex; justify-content: center; align-items: center; gap: 15px; margin-bottom: 30px; font-size: 2rem; font-weight: 800;">
            <div style="padding: 15px; background: #eee; border-radius: 15px; border: 3px solid #ccc;">${data.c1}</div>
            <span style="font-size: 3rem">+</span>
            <div style="padding: 15px; background: #eee; border-radius: 15px; border: 3px solid #ccc;">${data.c2}</div>
            <span style="font-size: 3rem">=</span>
            <div style="width: 60px; height: 60px; background: #fff; border: 4px dashed #ccc; border-radius: 15px; display: flex; align-items: center; justify-content: center;">?</div>
        </div>
        <div class="choices">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" onclick="checkMixing('${opt}', '${data.r}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(
    `${data.c1.split(" ")[0]} ditambah ${data.c2.split(" ")[0]}, jadinya apa?`,
  );
}

function checkMixing(selected, correct) {
  if (selected === correct) {
    currentState.score += 30;
    showSuccess(() => renderMixingGame());
  } else {
    alert("Warna aslinya bukan itu, coba lagi! 🌈");
  }
}
