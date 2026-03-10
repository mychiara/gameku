function renderRecipeGame() {
  const recipes = [
    {
      name: "Roti Selai 🥪",
      steps: [
        { emj: "🍞", label: "Ambil Roti" },
        { emj: "🍯", label: "Oles Selai" },
        { emj: "🧀", label: "Kasih Keju" },
        { emj: "🥪", label: "Tutup Roti" },
      ],
    },
    {
      name: "Susu Cokelat 🥛",
      steps: [
        { emj: "🥛", label: "Tuang Susu" },
        { emj: "🍫", label: "Kasih Cokelat" },
        { emj: "🥄", label: "Aduk Rata" },
        { emj: "😋", label: "Siap Minum" },
      ],
    },
    {
      name: "Sereal 🥣",
      steps: [
        { emj: "🥣", label: "Ambil Mangkok" },
        { emj: "🌾", label: "Tuang Sereal" },
        { emj: "🍼", label: "Tuang Susu" },
        { emj: "🥄", label: "Aduk-aduk" },
      ],
    },
  ];

  const task = recipes[Math.floor(Math.random() * recipes.length)];
  let shuffled = [...task.steps].sort(() => Math.random() - 0.5);
  let playerSteps = [];

  let html = `
        <h3 style="color: var(--primary)">Koki Cilik: Urutan Resep 🥪</h3>
        <p>Ayo bantu siapkan <b>${task.name}</b> dengan urutan yang benar!</p>
        
        <div id="recipe-pool" style="display: flex; justify-content: center; gap: 15px; margin: 20px 0; flex-wrap: wrap;">
            ${shuffled
              .map(
                (step, i) => `
                <div class="recipe-item" onclick="addRecipeStep(this, ${i})"
                     style="padding: 10px; background: white; border: 3px solid #eee; border-radius: 20px; cursor: pointer; text-align: center; transition: 0.3s; width: 100px;">
                    <div style="font-size: 3rem;">${step.emj}</div>
                    <small style="font-size: 0.8rem">${step.label}</small>
                </div>
            `,
              )
              .join("")}
        </div>

        <div id="recipe-target" style="display: flex; justify-content: center; gap: 10px; min-height: 100px; border: 2px dashed #ccc; border-radius: 20px; padding: 15px; background: #fffdf0;">
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <button class="btn-choice" style="background: var(--success); color: white;" onclick="checkRecipe()">Sajikan! 🍽️</button>
            <button class="btn-choice" style="background: #ccc;" onclick="resetRecipe()">Hapus 🗑️</button>
        </div>
    `;

  updateContainer(html);
  speak(`Bantu buat ${task.name} ya. Urutkan langkah-langkahnya.`);

  window.addRecipeStep = (el, shuffleIdx) => {
    const step = shuffled[shuffleIdx];
    if (playerSteps.includes(step)) return;

    playerSteps.push(step);
    el.style.opacity = "0.3";
    el.style.pointerEvents = "none";

    const target = document.getElementById("recipe-target");
    const node = document.createElement("div");
    node.style =
      "padding: 8px; background: white; border: 2px solid #ffa726; border-radius: 15px; text-align: center; width: 75px;";
    node.innerHTML = `<div style="font-size: 2rem;">${step.emj}</div><small style="font-size: 0.6rem">${step.label}</small>`;

    if (playerSteps.length > 1) {
      const arrow = document.createElement("div");
      arrow.innerHTML = "➜";
      arrow.style = "display: flex; align-items: center; color: #ffa726;";
      target.appendChild(arrow);
    }

    target.appendChild(node);
  };

  window.resetRecipe = () => renderRecipeGame();

  window.checkRecipe = () => {
    if (playerSteps.length !== task.steps.length) {
      alert("Selesaikan semua langkahnya ya! 😊");
      return;
    }

    const isCorrect = playerSteps.every((step, i) => step === task.steps[i]);

    if (isCorrect) {
      currentState.score += 40;
      showSuccess(() => renderRecipeGame());
    } else {
      alert("Rasanya jadi aneh kalau urutannya salah. Coba lagi ya! 🥪");
      speak("Urutannya belum benar, ayo coba lagi.");
      resetRecipe();
    }
  };
}
