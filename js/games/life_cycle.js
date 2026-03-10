function renderLifeCycleGame() {
  const cycles = [
    {
      name: "Kupu-kupu 🦋",
      steps: [
        { emj: "🥚", label: "Telur" },
        { emj: "🐛", label: "Ulat" },
        { emj: "🛖", label: "Kepompong" },
        { emj: "🦋", label: "Kupu-kupu" },
      ],
    },
    {
      name: "Katak 🐸",
      steps: [
        { emj: "🥚", label: "Telur" },
        { emj: "🐟", label: "Berudu" },
        { emj: "🦎", label: "Katak Kecil" },
        { emj: "🐸", label: "Katak Dewasa" },
      ],
    },
    {
      name: "Ayam 🐔",
      steps: [
        { emj: "🥚", label: "Telur" },
        { emj: "🐣", label: "Menetas" },
        { emj: "🐥", label: "Anak Ayam" },
        { emj: "🐔", label: "Ayam Dewasa" },
      ],
    },
  ];

  const task = cycles[Math.floor(Math.random() * cycles.length)];
  let shuffled = [...task.steps].sort(() => Math.random() - 0.5);
  let playerSequence = [];

  let html = `
        <h3 style="color: var(--primary)">Siklus Hidup: ${task.name} 🌱</h3>
        <p>Urutkan tahapan hidup dari yang paling awal!</p>
        
        <div id="cycle-pool" style="display: flex; justify-content: center; gap: 15px; margin: 20px 0; flex-wrap: wrap;">
            ${shuffled
              .map(
                (step, i) => `
                <div class="cycle-item" onclick="addToSequence(this, ${i})"
                     style="padding: 15px; background: white; border: 3px solid #eee; border-radius: 20px; cursor: pointer; text-align: center; transition: 0.3s; width: 100px;">
                    <div style="font-size: 3rem;">${step.emj}</div>
                    <small>${step.label}</small>
                </div>
            `,
              )
              .join("")}
        </div>

        <div id="cycle-target" style="display: flex; justify-content: center; gap: 10px; min-height: 120px; border: 2px dashed #ccc; border-radius: 20px; padding: 15px; background: #fafafa;">
            <!-- Player sequence here -->
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <button class="btn-choice" style="background: var(--success); color: white;" onclick="checkLifeCycle()">Selesai! ✨</button>
            <button class="btn-choice" style="background: #ccc;" onclick="resetLifeCycle()">Ulangi 🔄</button>
        </div>
    `;

  updateContainer(html);
  speak(`Ayo urutkan bagaimana ${task.name} tumbuh dari awal.`);

  window.addToSequence = (el, shuffleIdx) => {
    const step = shuffled[shuffleIdx];
    if (playerSequence.includes(step)) return;

    playerSequence.push(step);
    el.style.opacity = "0.3";
    el.style.pointerEvents = "none";

    const target = document.getElementById("cycle-target");
    const node = document.createElement("div");
    node.style =
      "padding: 10px; background: white; border: 2px solid var(--primary); border-radius: 15px; text-align: center; width: 80px; position:relative;";
    node.innerHTML = `<div style="font-size: 2rem;">${step.emj}</div><small style="font-size: 0.7rem">${step.label}</small>`;

    // Add arrow if not first
    if (playerSequence.length > 1) {
      const arrow = document.createElement("div");
      arrow.innerHTML = "➡️";
      arrow.style = "display: flex; align-items: center; font-size: 1.5rem;";
      target.appendChild(arrow);
    }

    target.appendChild(node);
  };

  window.resetLifeCycle = () => renderLifeCycleGame();

  window.checkLifeCycle = () => {
    if (playerSequence.length !== task.steps.length) {
      alert("Urutkan semua tahapannya ya! 😊");
      return;
    }

    const isCorrect = playerSequence.every((step, i) => step === task.steps[i]);

    if (isCorrect) {
      currentState.score += 45;
      showSuccess(() => renderLifeCycleGame());
    } else {
      alert("Oops, urutannya masih tertukar. Coba lagi ya! 🧐");
      speak("Urutannya belum tepat, ayo coba lagi.");
      resetLifeCycle();
    }
  };
}
