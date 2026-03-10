function renderFoodSortGame() {
  const data =
    CONFIG.food_sort[Math.floor(Math.random() * CONFIG.food_sort.length)];

  const html = `
        <h3>Buah atau Sayur? 🥦🍎</h3>
        ${addVoiceBtn(`Apakah ini termasuk sayur hijau atau buah segar?`)}
        <div style="font-size: 8rem; margin: 30px 0; filter: drop-shadow(0 10px 10px rgba(0,0,0,0.1));">
            ${data.item}
        </div>
        <p style="font-size: 1.3rem; margin-bottom: 20px; font-weight: bold;">Kelompok apakah ini?</p>
        <div class="choices" style="grid-template-columns: 1fr 1fr; gap: 20px;">
            <button class="btn-choice" style="padding: 20px; background: #e6ffed; border-color: #38d39f;" onclick="checkFoodSort('Sayur', '${data.type}')">
                <span style="font-size: 3rem; display: block; margin-bottom: 10px;">🥬</span>
                Sayur
            </button>
            <button class="btn-choice" style="padding: 20px; background: #ffe6e6; border-color: #ff6b6b;" onclick="checkFoodSort('Buah', '${data.type}')">
                <span style="font-size: 3rem; display: block; margin-bottom: 10px;">🍓</span>
                Buah
            </button>
        </div>
    `;
  updateContainer(html);
  speak(`Gambar ini termasuk bagian dari sayur sayuran atau buah buahan?`);
}

function checkFoodSort(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderFoodSortGame());
  } else {
    alert("Ups, jenis golongannya tertukar. Coba lagi sayang! 🥬🍓");
  }
}
