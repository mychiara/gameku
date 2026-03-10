function renderHomeSafetyGame() {
  const items = [
    {
      name: "Stopkontak",
      emj: "🔌",
      danger: true,
      text: "Hati-hati! Listrik bisa menyengat jari.",
    },
    {
      name: "Pisau",
      emj: "🔪",
      danger: true,
      text: "Tajam! Hanya boleh digunakan orang dewasa.",
    },
    {
      name: "Deterjen",
      emj: "🧪",
      danger: true,
      text: "Beracun! Jangan sampai terminum atau kena mata.",
    },
    {
      name: "Lantai Basah",
      emj: "💦",
      danger: true,
      text: "Licin! Bisa membuatmu terpelesat.",
    },
    { name: "Boneka", emj: "🧸", danger: false },
    { name: "Buku", emj: "📚", danger: false },
    { name: "Bantal", emj: "🛌", danger: false },
    { name: "Susu", emj: "🥛", danger: false },
  ];

  let pool = [...items].sort(() => Math.random() - 0.5);
  let dangersFound = 0;
  const totalDangers = items.filter((i) => i.danger).length;

  let html = `
        <h3 style="color: var(--primary)">Detektif Aman 🔌</h3>
        <p>Ketuk benda-benda yang <b>Berbahaya</b> bagi anak-anak agar kita amankan!</p>
        
        <div style="text-align:center; margin-bottom: 10px; font-weight: bold; color: var(--secondary);">
            Bahaya ditemukan: ${dangersFound} / ${totalDangers}
        </div>

        <div id="safety-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; padding: 15px; background: #fffde7; border-radius: 20px; border: 4px solid #fff59d;">
            ${pool
              .map(
                (item, i) => `
                <div id="item-${i}" onclick="checkSafetyItem(${i})"
                     style="background: white; border: 3px solid #eee; border-radius: 15px; padding: 15px; font-size: 3rem; text-align: center; cursor: pointer; transition: 0.3s; position: relative;">
                    ${item.emj}
                    <div id="mark-${i}" style="position: absolute; top:0; left:0; width:100%; height:100%; display:none; align-items:center; justify-content:center; background: rgba(255,0,0,0.2); border-radius:15px; font-size: 3rem;">🚫</div>
                </div>
            `,
              )
              .join("")}
        </div>

        <div id="safety-tip" style="margin-top: 20px; padding: 15px; background: #fbe9e7; border-radius: 15px; display: none; color: #d84315;">
        </div>
    `;

  updateContainer(html);
  speak(
    "Ayo jadi detektif! Cari benda-benda yang berbahaya jika disentuh anak kecil ya.",
  );

  window.checkSafetyItem = (idx) => {
    const item = pool[idx];
    const tipEl = document.getElementById("safety-tip");

    if (item.danger) {
      if (document.getElementById(`mark-${idx}`).style.display === "flex")
        return;

      dangersFound++;
      document.getElementById(`mark-${idx}`).style.display = "flex";
      document.getElementById(`item-${idx}`).style.borderColor = "#f44336";

      tipEl.innerHTML = `<b>${item.name}:</b> ${item.text}`;
      tipEl.style.display = "block";

      speak(item.text);

      if (dangersFound === totalDangers) {
        setTimeout(() => {
          currentState.score += 40;
          showSuccess(() => renderHomeSafetyGame());
        }, 4000);
      }
    } else {
      document.getElementById(`item-${idx}`).style.transform = "scale(0.8)";
      setTimeout(
        () =>
          (document.getElementById(`item-${idx}`).style.transform = "scale(1)"),
        200,
      );
      speak(`Kalau ${item.name} aman dimainkan.`);
      tipEl.style.display = "none";
    }
  };
}
