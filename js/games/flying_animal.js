function renderFlyingAnimalGame() {
  const flyingDB = CONFIG.flying_animal;
  const target = flyingDB[Math.floor(Math.random() * flyingDB.length)];

  // Pick non-flying
  const nonFlyingOpts = [
    "Kucing 🐈",
    "Anjing 🐶",
    "Gajah 🐘",
    "Harimau 🐅",
    "Sapi 🐄",
    "Kuda 🐎",
    "Ikan 🐟",
    "Babi 🐖",
    "Ular 🐍",
    "Katak 🐸",
    "Singa 🦁",
    "Tikus 🐭",
  ]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const options = [...nonFlyingOpts, target].sort(() => Math.random() - 0.5);

  const html = `
        <h3>Hewan Terbang 🦅</h3>
        ${addVoiceBtn(`Dapatkah kamu menemukan hewan yang memiliki sayap dan bisa terbang?`)}
        
        <p style="font-size: 1.5rem; line-height: 1.5; padding: 20px; background: #e6f2ff; border-radius: 15px; border: 3px dashed #4dabf7; margin: 30px 0; font-weight: bold; color: #1864ab;">
            "Siapakah di antara kami yang pandai terbang tinggi di angkasa?"
        </p>

        <div class="choices" style="grid-template-columns: repeat(2, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 1.3rem; padding: 20px; display: flex; flex-direction: column; align-items: center;" onclick="checkFlyingAnimal('${opt}', '${target}')">
                    <span style="font-size: 4rem; margin-bottom: 15px;">${opt.split(" ").slice(-1)[0]}</span>
                    <span>${opt.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji_Presentation}/gu, "")}</span>
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Manakah hewan yang memiliki sayap dan pandai terbang?`);
}

function checkFlyingAnimal(selected, correct) {
  if (selected === correct) {
    currentState.score += 15;
    showSuccess(() => renderFlyingAnimalGame());
  } else {
    alert("Hewan ini tidak terbang. Coba cari yang bersayap besar! 🦋");
  }
}
