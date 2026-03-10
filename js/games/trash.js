// 18. Trash Sorting Game
function renderTrashGame() {
  const data = CONFIG.trash[Math.floor(Math.random() * CONFIG.trash.length)];
  const types = ["Organik", "Plastik", "Kertas"];

  const html = `
        <h3>Pilah Sampah ♻️</h3>
        ${addVoiceBtn(`${data.item} harus dibuang ke tempat sampah mana?`)}
        <div style="font-size: 6rem; margin: 30px 0; animation: pulse 2s infinite;">
            ${data.item}
        </div>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Masukkan ke tempat sampah yang benar:</p>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${types
              .map(
                (t) => `
                <button class="btn-choice" style="padding: 15px; font-weight: bold; border: 3px solid #ddd;" onclick="checkTrash('${t}', '${data.type}')">
                    ${t === "Organik" ? "🥬" : t === "Plastik" ? "🧴" : "📄"}<br>${t}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`${data.item.split(" ")[0]} harus dibuang ke mana?`);
}

function checkTrash(selected, correct) {
  if (selected === correct) {
    currentState.score += 25;
    showSuccess(() => renderTrashGame());
  } else {
    alert("Eits, itu bukan tempatnya! Coba lagi ya! ♻️");
  }
}
