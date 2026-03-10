function renderColoringGame() {
  let html = `
        <h3>Mewarnai 🎨</h3>
        <p style="text-align: center; margin-bottom: 20px;">Pilih warna lalu ketuk gambar untuk mewarnai!</p>
        
        <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
            <button class="color-btn" style="background: #f44336; width: 40px; height: 40px; border-radius: 50%; border: 2px solid #ccc; cursor: pointer;" onclick="selectColor('#f44336', this)"></button>
            <button class="color-btn" style="background: #4caf50; width: 40px; height: 40px; border-radius: 50%; border: 2px solid #ccc; cursor: pointer;" onclick="selectColor('#4caf50', this)"></button>
            <button class="color-btn" style="background: #2196f3; width: 40px; height: 40px; border-radius: 50%; border: 2px solid #ccc; cursor: pointer;" onclick="selectColor('#2196f3', this)"></button>
            <button class="color-btn" style="background: #ffeb3b; width: 40px; height: 40px; border-radius: 50%; border: 2px solid #ccc; cursor: pointer;" onclick="selectColor('#ffeb3b', this)"></button>
            <button class="color-btn" style="background: #9c27b0; width: 40px; height: 40px; border-radius: 50%; border: 2px solid #ccc; cursor: pointer;" onclick="selectColor('#9c27b0', this)"></button>
            <button class="color-btn" style="background: #ff9800; width: 40px; height: 40px; border-radius: 50%; border: 2px solid #ccc; cursor: pointer;" onclick="selectColor('#ff9800', this)"></button>
        </div>

        <div id="cg-area" style="position: relative; width: 300px; height: 300px; margin: 0 auto; background: white; border: 3px solid #ddd; border-radius: 10px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 2px; padding: 2px;">
            <div class="cg-part" style="background: #fff; border: 2px solid #000; border-radius: 10px; cursor: pointer;" onclick="fillColor(this)"></div>
            <div class="cg-part" style="background: #fff; border: 2px solid #000; border-radius: 10px 50px 10px 10px; cursor: pointer;" onclick="fillColor(this)"></div>
            <div class="cg-part" style="background: #fff; border: 2px solid #000; border-radius: 10px; cursor: pointer;" onclick="fillColor(this)"></div>
            <div class="cg-part" style="background: #fff; border: 2px solid #000; border-radius: 10px; cursor: pointer;" onclick="fillColor(this)"></div>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
             <button class="btn-choice" style="background: #e91e63; color: white;" onclick="checkColoring()">Selesai Mewarnai ✨</button>
        </div>
    `;
  updateContainer(html);
  speak("Pilih warnanya di atas, lalu sentuh kotak gambarnya untuk mewarnai!");

  let currentColor = null;

  window.selectColor = (color, btn) => {
    currentColor = color;
    // visual selection
    document
      .querySelectorAll(".color-btn")
      .forEach((b) => (b.style.transform = "scale(1)"));
    btn.style.transform = "scale(1.2)";
  };

  window.fillColor = (el) => {
    if (!currentColor) {
      alert("Pilih warna dulu ya!");
      return;
    }
    el.style.background = currentColor;
  };

  window.checkColoring = () => {
    const parts = document.querySelectorAll(".cg-part");
    let colored = 0;
    parts.forEach((p) => {
      if (
        p.style.background !== "rgb(255, 255, 255)" &&
        p.style.background !== "white" &&
        p.style.background !== ""
      ) {
        colored++;
      }
    });

    if (colored >= 4) {
      currentState.score += 20;
      showSuccess(() => renderColoringGame());
    } else {
      alert("Warnai semua bagian gambarnya ya biar bagus! 🎨");
    }
  };

  // Auto select first color
  setTimeout(() => {
    const firstBtn = document.querySelector(".color-btn");
    if (firstBtn) selectColor("#f44336", firstBtn);
  }, 100);
}
