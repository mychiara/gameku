function renderSempoaGame() {
  const target = Math.floor(Math.random() * 15) + 1; // 1 to 15
  let currentVal = 0;
  let beads = [
    { id: 1, pos: "bottom" },
    { id: 2, pos: "bottom" },
    { id: 3, pos: "bottom" },
    { id: 4, pos: "bottom" },
    { id: 5, pos: "bottom" },
    { id: 6, pos: "bottom" },
    { id: 7, pos: "bottom" },
    { id: 8, pos: "bottom" },
    { id: 9, pos: "bottom" },
    { id: 10, pos: "bottom" },
    { id: 11, pos: "bottom" },
    { id: 12, pos: "bottom" },
    { id: 13, pos: "bottom" },
    { id: 14, pos: "bottom" },
    { id: 15, pos: "bottom" },
  ];

  let html = `
        <h3 style="color: var(--primary)">Sempoa Cilik 🧮</h3>
        <p>Geser manik-manik ke atas untuk menghitung sampai angka <b>${target}</b>!</p>
        
        <div id="sempoa-frame" style="width: 300px; height: 250px; background: #8d6e63; margin: 20px auto; border: 10px solid #5d4037; border-radius: 10px; position: relative; padding: 10px; display: flex; justify-content: center; gap: 15px;">
            <div id="sempoa-rod" style="width: 10px; height: 100%; background: #bdbdbd; border-radius: 5px; position: relative;">
                ${beads
                  .map(
                    (bead, i) => `
                    <div id="bead-${i}" class="bead" onclick="toggleBead(${i})"
                         style="width: 40px; height: 12px; background: #e91e63; border-radius: 6px; position: absolute; left: -15px; 
                                transition: 0.3s; cursor: pointer; border: 2px solid #ad1457;
                                ${bead.pos === "top" ? `top: ${i * 14}px` : `bottom: ${(14 - i) * 14}px`}">
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <div style="font-size: 1.5rem; color: var(--secondary); margin-bottom: 10px;">Jumlah: <span id="sempoa-count">0</span></div>
            <button class="btn-choice" style="background: var(--success); color: white;" onclick="checkSempoa()">Sudah Pas! ✅</button>
        </div>
    `;

  updateContainer(html);
  speak(`Ayo hitung sampai angka ${target} menggunakan sempoa ya.`);

  window.toggleBead = (idx) => {
    beads[idx].pos = beads[idx].pos === "bottom" ? "top" : "bottom";
    currentVal = beads.filter((b) => b.pos === "top").length;
    document.getElementById("sempoa-count").innerText = currentVal;

    const el = document.getElementById(`bead-${idx}`);
    if (beads[idx].pos === "top") {
      el.style.top = idx * 14 + "px";
      el.style.bottom = "auto";
    } else {
      el.style.top = "auto";
      el.style.bottom = (14 - idx) * 14 + "px";
    }
  };

  window.checkSempoa = () => {
    if (currentVal === target) {
      currentState.score += 35;
      showSuccess(() => renderSempoaGame());
    } else {
      alert(`Belum pas! Coba hitung lagi ya, kita mau angka ${target}. 😊`);
      speak(`Hitung lagi sampai ${target} ya.`);
    }
  };
}
