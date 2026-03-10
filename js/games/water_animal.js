function renderWaterAnimalGame() {
  const waterDB = CONFIG.water_animal;
  const target = waterDB[Math.floor(Math.random() * waterDB.length)];

  // Pick non-water
  const nonWaterOpts = [
    "Burung 🐦",
    "Ayam 🐔",
    "Sapi 🐄",
    "Singa 🦁",
    "Gajah 🐘",
    "Kambing 🐐",
    "Kucing 🐈",
    "Harimau 🐅",
    "Zebra 🦓",
    "Jerapah 🦒",
    "Monyet 🐒",
    "Unta 🐪",
  ]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const options = [...nonWaterOpts, target].sort(() => Math.random() - 0.5);

  const html = `
        <h3>Hewan Air 🐟</h3>
        ${addVoiceBtn(`Dapatkah kamu menemukan hewan yang berenang dan hidup di dalam air?`)}
        
        <p style="font-size: 1.5rem; line-height: 1.5; padding: 20px; background: #e3fafa; border-radius: 15px; border: 3px dashed #20c997; margin: 30px 0; font-weight: bold; color: #087f5b;">
            "Siapakah di antara kami yang hidup, berenang, dan bernapas di dalam lautan atau sungai?"
        </p>

        <div class="choices" style="grid-template-columns: repeat(2, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 1.3rem; padding: 20px; display: flex; flex-direction: column; align-items: center; border-color: #96f2d7; box-shadow: 0 4px 0 #96f2d7;" onclick="checkWaterAnimal('${opt}', '${target}')">
                    <span style="font-size: 4rem; margin-bottom: 15px;">${opt.split(" ").slice(-1)[0]}</span>
                    <span>${opt.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji_Presentation}/gu, "")}</span>
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Manakah hewan yang pandai berenang dan hidupnya di dalam air?`);
}

function checkWaterAnimal(selected, correct) {
  if (selected === correct) {
    currentState.score += 15;
    showSuccess(() => renderWaterAnimalGame());
  } else {
    alert("Bukan dia! Hewan yang kamu pilih belum tentu kuat menyelam. 🌊");
  }
}
