// 16. Animal Habitat Game
function renderHabitatGame() {
  const data =
    CONFIG.habitats[Math.floor(Math.random() * CONFIG.habitats.length)];

  // Generate options for habitats
  const options = [data.h];
  const allHabitats = CONFIG.habitats.map((h) => h.h);
  while (options.length < 3) {
    const rand = allHabitats[Math.floor(Math.random() * allHabitats.length)];
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Gak Mau Salah Rumah!</h3>
        ${addVoiceBtn(`Dimanakah tempat tinggal ${data.a}?`)}
        <p style="font-size: 1.2rem; margin-bottom: 20px">Dimanakah tempat tinggal:</p>
        <div style="font-size: 8rem; margin-bottom: 20px; animation: bounce 3s infinite ease-in-out;">
            ${data.a}
        </div>
        <div class="choices" style="grid-template-columns: repeat(1, 1fr); gap: 12px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" onclick="checkHabitat('${opt}', '${data.h}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Dimanakah tempat tinggal ${data.a.split(" ")[0]}?`);
}

function checkHabitat(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderHabitatGame());
  } else {
    alert("Wah, ke sasar! Cari rumah yang benar ya! 🏠");
  }
}
