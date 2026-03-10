function renderFossilMatchGame() {
  const fossils = [
    { skeleton: "🦖", alive: "🦖", name: "Tyrannosaurus" },
    { skeleton: "🦴 (Sayap)", alive: "🦅", name: "Pterodactyl" },
    { skeleton: "🦴 (Cula)", alive: "🦏", name: "Triceratops" },
    { skeleton: "🦴 (Leher)", alive: "🦕", name: "Brontosaurus" },
    { skeleton: "🦴 (Gading)", alive: "🐘", name: "Gajah Mammoth" },
  ];

  const task = fossils[Math.floor(Math.random() * fossils.length)];
  const others = fossils
    .filter((f) => f.name !== task.name)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const options = [...others, task].sort(() => Math.random() - 0.5);

  let html = `
        <h3 style="color: var(--primary)">Museum Fosil: Tebak Pemiliknya 🦖</h3>
        <p>Lihat tulang belulang ini! Menurutmu hewan apa ya?</p>
        
        <div style="text-align: center; margin: 30px 0;">
            <div style="font-size: 6rem; background: #fdf5e6; border-radius: 50%; width: 150px; height: 150px; margin: 0 auto; display: flex; align-items: center; justify-content: center; border: 5px dashed #d2b48c;">
                ${task.skeleton}
            </div>
            <h4 style="color: #8d6e63; margin-top: 10px;">Tulang ${task.name}</h4>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
            ${options
              .map(
                (opt, i) => `
                <button class="btn-choice" onclick="checkFossilMatch('${opt.name}')"
                        style="height: 120px; font-size: 1.2rem; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <span style="font-size: 3rem;">${opt.alive}</span>
                    <span>${opt.name}</span>
                </button>
            `,
              )
              .join("")}
        </div>
    `;

  updateContainer(html);
  speak(`Lihat tulang ini! Hewan mana yang memiliki tulang seperti ini?`);

  window.checkFossilMatch = (name) => {
    if (name === task.name) {
      currentState.score += 35;
      showSuccess(() => renderFossilMatchGame());
    } else {
      alert("Bentuknya tidak mirip. Coba lihat lagi tulangnya ya! 🧐");
      speak("Bentuknya tidak mirip, ayo coba lagi.");
    }
  };
}
