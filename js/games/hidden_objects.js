function renderHiddenObjectsGame() {
  const scenarios = [
    {
      name: "Halaman Belakang 🏡",
      bg: [
        "🌳",
        "🌻",
        "🌳",
        "🏠",
        "🚲",
        "🌳",
        "⚽",
        "🌳",
        "🐶",
        "🌳",
        "🍔",
        "🌻",
        "🏀",
        "🍔",
        "🌳",
      ],
      targets: [
        { emj: "🚲", name: "Sepeda" },
        { emj: "⚽", name: "Bola" },
        { emj: "🐶", name: "Anjing" },
      ],
    },
    {
      name: "Ruang Main 🧸",
      bg: [
        "🧸",
        "🧱",
        "🚗",
        "🧩",
        "⚽",
        "📚",
        "🎨",
        "🧶",
        "🚀",
        "🎸",
        "🎲",
        "🧸",
        "🥁",
        "🎮",
        "🪁",
      ],
      targets: [
        { emj: "🚀", name: "Roket" },
        { emj: "🎸", name: "Gitar" },
        { emj: "🎮", name: "Game" },
      ],
    },
  ];

  const task = scenarios[Math.floor(Math.random() * scenarios.length)];
  let found = [];

  let html = `
        <h3 style="color: var(--primary)">Cari Benda: ${task.name} 🔍</h3>
        <p>Temukan benda-benda ini di bawah!</p>
        
        <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
            ${task.targets
              .map(
                (t) => `
                <div id="target-${t.emj}" style="padding: 10px; background: white; border: 2px solid #eee; border-radius: 10px; opacity: 0.5; transition: 0.3s;">
                    <span style="font-size: 2rem;">${t.emj}</span>
                    <div style="font-size: 0.7rem;">${t.name}</div>
                </div>
            `,
              )
              .join("")}
        </div>

        <div id="hidden-area" style="position: relative; width: 320px; height: 320px; margin: 0 auto; background: #f1f8e9; border: 5px solid #aed581; border-radius: 20px; overflow: hidden; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; padding: 10px;">
            ${task.bg
              .map(
                (emj, i) => `
                <div onclick="findObject(this, '${emj}')" 
                     style="font-size: 3rem; width: 60px; height: 60px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s;">
                    ${emj}
                </div>
            `,
              )
              .join("")}
        </div>
    `;

  updateContainer(html);
  speak(
    `Ayo temukan ${task.targets.map((t) => t.name).join(", ")} di gambar ini!`,
  );

  window.findObject = (el, emj) => {
    const target = task.targets.find((t) => t.emj === emj);
    if (target && !found.includes(emj)) {
      found.push(emj);
      el.style.transform = "scale(1.5)";
      el.style.filter = "drop-shadow(0 0 10px gold)";
      document.getElementById(`target-${emj}`).style.opacity = "1";
      document.getElementById(`target-${emj}`).style.borderColor =
        "var(--success)";

      speak(`Yey! Kamu menemukan ${target.name}!`);

      if (found.length === task.targets.length) {
        setTimeout(() => {
          currentState.score += 40;
          showSuccess(() => renderHiddenObjectsGame());
        }, 1000);
      }
    } else if (!target) {
      el.style.transform = "rotate(10deg)";
      setTimeout(() => (el.style.transform = "rotate(0deg)"), 200);
    }
  };
}
