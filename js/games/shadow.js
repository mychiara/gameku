// 11. Shadow Match Game
function renderShadowGame() {
  const data =
    CONFIG.shadows[Math.floor(Math.random() * CONFIG.shadows.length)];

  // Generate options
  const options = [data.name];
  const allNames = CONFIG.shadows.map((s) => s.name);
  while (options.length < 3) {
    const rand = allNames[Math.floor(Math.random() * allNames.length)];
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Tebak Bayanganku!</h3>
        <div class="shadow-container" style="margin-bottom: 30px;">
            <div style="font-size: 10rem; filter: brightness(0); opacity: 0.9; animation: pulse 2s infinite ease-in-out;">
                ${data.char}
            </div>
        </div>
        <p style="font-size: 1.5rem; margin-bottom: 20px">Siapakah aku?</p>
        <div class="choices">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" onclick="checkShadow('${opt}', '${data.name}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
}

function checkShadow(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderShadowGame());
  } else {
    alert("Lihat bentuknya baik-baik ya! 👤");
  }
}
