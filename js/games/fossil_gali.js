function renderFossilGaliGame() {
  const fossils = [
    { name: "T-Rex", icon: "🦖", color: "#8d6e63" },
    { name: "Triceratops", icon: "🦏", color: "#5d4037" },
    { name: "Pterodactyl", icon: "🦅", color: "#795548" },
    { name: "Brontosaurus", icon: "🦕", color: "#4e342e" },
    { name: "Stegosaurus", icon: "🐊", color: "#3e2723" },
    { name: "Gajah Purba", icon: "🐘", color: "#5d4037" },
    { name: "Siput Purba", icon: "🐚", color: "#3e2723" },
  ];
  const fossil = fossils[Math.floor(Math.random() * fossils.length)];
  let cleanedPercent = 0;
  const totalPixels = 400; // grid of 20x20
  let cleanedGrid = new Set();

  let html = `
        <h3 style="color: var(--primary)">Arkeolog Cilik: Gali Fosil 🦖</h3>
        <p>Gunakan kuasmu (sentuh/geser) untuk membersihkan pasir dari fosil ${fossil.name}!</p>
        
        <div id="dig-site" style="position: relative; width: 300px; height: 300px; margin: 0 auto; background: #e0ac69; border: 8px solid #c68642; border-radius: 15px; cursor: crosshair; user-select: none; overflow: hidden;"
             onmousemove="scrubSand(event)" ontouchmove="scrubSand(event)">
            
            <div id="fossil-under" style="position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 10rem; opacity: 0.2; color: ${fossil.color}">
                ${fossil.icon}
            </div>
            
            <div id="sand-layer" style="position: absolute; width: 100%; height: 100%; display: grid; grid-template-columns: repeat(10, 1fr); grid-template-rows: repeat(10, 1fr);">
                ${Array.from({ length: 100 })
                  .map(
                    (_, i) =>
                      `<div class="sand-block" data-idx="${i}" style="background: #e0ac69; border: 0.5px solid #d4a373;"></div>`,
                  )
                  .join("")}
            </div>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <div id="dig-progress" style="font-weight: bold; color: var(--secondary)">Kebersihan: 0%</div>
            <button id="fossil-btn" class="btn-choice" style="display:none; background: var(--success); color: white; margin-top: 10px;" onclick="finishFossil()">Simpan ke Museum! 🏛️</button>
        </div>
    `;

  updateContainer(html);
  speak(
    `Ayo cari fosil ${fossil.name} di bawah pasir ini! Sapu pasirnya pelan-pelan ya.`,
  );

  window.scrubSand = (e) => {
    e.preventDefault();
    const site = document.getElementById("dig-site");
    const rect = site.getBoundingClientRect();
    let clientX = e.clientX || (e.touches && e.touches[0].clientX);
    let clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const col = Math.floor(x / (rect.width / 10));
    const row = Math.floor(y / (rect.height / 10));
    const idx = row * 10 + col;

    if (idx >= 0 && idx < 100) {
      const block = document.querySelector(`.sand-block[data-idx="${idx}"]`);
      if (block && block.style.opacity !== "0") {
        block.style.opacity = "0";
        cleanedGrid.add(idx);
        const progress = Math.min(
          100,
          Math.floor((cleanedGrid.size / 70) * 100),
        ); // 70% enough to see
        document.getElementById("dig-progress").innerText =
          `Kebersihan: ${progress}%`;
        document.getElementById("fossil-under").style.opacity =
          cleanedGrid.size / 100;

        if (progress >= 100) {
          document.getElementById("fossil-btn").style.display = "inline-block";
        }
      }
    }
  };

  window.finishFossil = () => {
    currentState.score += 40;
    showSuccess(() => renderFossilGaliGame());
  };
}
