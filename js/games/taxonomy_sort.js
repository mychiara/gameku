function renderTaxonomyGame() {
  const categories = [
    {
      name: "Hewan Bertelur 🥚",
      type: "ovipar",
      members: ["🐔", "🦜", "🐢", "🐸", "🦆", "🐍", "🐧", "🦉"],
    },
    {
      name: "Hewan Melahirkan 🤱",
      type: "vivipar",
      members: ["🐕", "🐈", "🐘", "🐄", "🐒", "🐎", "🐖", "🦓"],
    },
    {
      name: "Bisa Terbang 🦅",
      type: "fly",
      members: ["🦅", "🕊️", "🦇", "🐝", "🦋", "🦜", "🦉", "🦆"],
    },
    {
      name: "Hidup di Air 🌊",
      type: "water",
      members: ["🐟", "🐋", "🐙", "🦀", "🐬", "🦈", "🐊", "🦐"],
    },
    {
      name: "Makan Rumput 🌿",
      type: "herbi",
      members: ["🐄", "🐎", "🐏", "🐐", "🐘", "🦒", "🦓", "🐰"],
    },
    {
      name: "Hewan Buas 🦁",
      type: "buas",
      members: ["🦁", "🐯", "🐺", "🐊", "🦈", "🐆", "🐻", "🦖"],
    },
    {
      name: "Punya Kaki Dua 👣",
      type: "two_legs",
      members: ["🐔", "🦆", "🦜", "🐧", "🦘", "🦉", "🦅", "🦢"],
    },
    {
      name: "Punya Kaki Empat 🐾",
      type: "four_legs",
      members: ["🐶", "🐈", "🐘", "🐄", "🐖", "🐎", "🦁", "🦒"],
    },
  ];

  const currentCat = categories[Math.floor(Math.random() * categories.length)];
  const others = categories.filter((c) => c.type !== currentCat.type);

  // Mix target members and generic others
  let pool = [...currentCat.members.slice(0, 3)];
  others.forEach((o) => pool.push(...o.members.slice(0, 2)));
  pool = pool.sort(() => Math.random() - 0.5);

  let found = [];

  let html = `
        <h3 style="color: var(--primary)">Kelompokkan Hewan 🐈</h3>
        <p style="text-align: center; font-size: 1.2rem; margin-bottom: 20px;">Pilih mana saja yang termasuk: <b>${currentCat.name}</b></p>
        
        <div id="taxonomy-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; padding: 10px;">
            ${pool
              .map(
                (emj, i) => `
                <div class="tax-card" onclick="toggleTax(this, '${emj}')"
                     style="background: white; border: 3px solid #eee; border-radius: 15px; padding: 20px; font-size: 4rem; text-align: center; cursor: pointer; transition: 0.3s;">
                    ${emj}
                </div>
            `,
              )
              .join("")}
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <button class="btn-choice" style="background: var(--success); color: white;" onclick="checkTaxonomy()">Cek Jawaban! ✅</button>
        </div>
    `;

  updateContainer(html);
  speak(
    `Pilih hewan mana saja yang termasuk ${currentCat.name.split(" ")[0]}?`,
  );

  window.toggleTax = (el, emj) => {
    if (found.includes(emj)) {
      found = found.filter((v) => v !== emj);
      el.style.borderColor = "#eee";
      el.style.background = "white";
    } else {
      found.push(emj);
      el.style.borderColor = "var(--primary)";
      el.style.background = "#fff0f0";
    }
  };

  window.checkTaxonomy = () => {
    const correctOnes = found.filter((emj) => currentCat.members.includes(emj));
    const wrongOnes = found.filter((emj) => !currentCat.members.includes(emj));
    const missing = currentCat.members.filter(
      (emj) => pool.includes(emj) && !found.includes(emj),
    );

    if (wrongOnes.length === 0 && missing.length === 0 && found.length > 0) {
      currentState.score += 35;
      showSuccess(() => renderTaxonomyGame());
    } else {
      alert(
        "Hm, masih ada yang salah atau ada yang tertinggal. Periksa lagi ya! 🧐",
      );
      speak("Periksa lagi ya, kelompokkan dengan teliti.");
    }
  };
}
