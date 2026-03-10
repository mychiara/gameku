function renderHealthyPlateGame() {
  const foods = [
    { name: "Nasi", emj: "🍚", category: "karbo" },
    { name: "Ayam", emj: "🍗", category: "protein" },
    { name: "Bayam", emj: "🥬", category: "sayur" },
    { name: "Pisang", emj: "🍌", category: "buah" },
    { name: "Roti", emj: "🍞", category: "karbo" },
    { name: "Telur", emj: "🥚", category: "protein" },
    { name: "Wortel", emj: "🥕", category: "sayur" },
    { name: "Apel", emj: "🍎", category: "buah" },
    { name: "Donat", emj: "🍩", category: "junk" },
    { name: "Permen", emj: "🍬", category: "junk" },
  ];

  let selected = [];

  let html = `
        <h3 style="color: var(--primary)">Bekal Sehat 🍱</h3>
        <p>Pilih 4 makanan berbeda agar gizi bekalmu seimbang!</p>
        
        <div id="plate-target" style="width: 280px; height: 180px; margin: 0 auto; background: #fffde7; border: 8px solid #fff176; border-radius: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 15px;">
            <div id="slot-0" style="border: 2px dashed #ffe082; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 3rem;"></div>
            <div id="slot-1" style="border: 2px dashed #ffe082; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 3rem;"></div>
            <div id="slot-2" style="border: 2px dashed #ffe082; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 3rem;"></div>
            <div id="slot-3" style="border: 2px dashed #ffe082; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 3rem;"></div>
        </div>

        <div id="food-menu" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-top: 25px; padding: 10px; background: white; border-radius: 20px;">
            ${foods
              .map(
                (food, i) => `
                <div class="food-card" onclick="selectHealthyFood(this, ${i})"
                     style="text-align: center; cursor: pointer; padding: 5px; border: 2px solid #eee; border-radius: 15px; transition: 0.3s;">
                    <span style="font-size: 2.5rem; display: block;">${food.emj}</span>
                    <small style="font-size: 0.6rem;">${food.name}</small>
                </div>
            `,
              )
              .join("")}
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <button class="btn-choice" style="background: var(--success); color: white;" onclick="checkHealthyPlate()">Tutup Kotak Bekal! 🍱</button>
            <button class="btn-choice" style="background: #ccc;" onclick="resetHealthyPlate()">Ulangi 🔄</button>
        </div>
    `;

  updateContainer(html);
  speak("Yuk siapkan bekal sehat! Pilih nasi, lauk, sayur, dan buah ya.");

  window.selectHealthyFood = (el, idx) => {
    if (selected.length >= 4 || selected.includes(idx)) return;

    selected.push(idx);
    el.style.borderColor = "var(--primary)";
    el.style.background = "#fff8f8";

    const slot = document.getElementById(`slot-${selected.length - 1}`);
    slot.innerText = foods[idx].emj;
    slot.style.border = "none";

    speak(foods[idx].name);
  };

  window.resetHealthyPlate = () => renderHealthyPlateGame();

  window.checkHealthyPlate = () => {
    if (selected.length < 4) {
      alert("Kotak bekalnya masih kosong, isi 4 makanan ya! 😊");
      return;
    }

    const categories = selected.map((idx) => foods[idx].category);
    const hasJunk = categories.includes("junk");
    const uniqueCats = new Set(categories);

    if (hasJunk) {
      alert(
        "Waduh, ada makanan yang kurang sehat di kotak bekalmu. Ganti dengan sayur atau buah ya! 🍎",
      );
    } else if (uniqueCats.size < 3) {
      alert(
        "Bekalnya belum seimbang. Pastikan ada banyak jenis makanan ya (Karbo, Lauk, Sayur/Buah). 🥦",
      );
    } else {
      currentState.score += 40;
      showSuccess(() => renderHealthyPlateGame());
    }
  };
}
