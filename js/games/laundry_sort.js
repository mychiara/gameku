function renderLaundryGame() {
  const items = [
    { emj: "👕", type: "warna" },
    { emj: "👚", type: "warna" },
    { emj: "🧦", type: "putih" },
    { emj: "👕", type: "putih" },
    { emj: "👗", type: "warna" },
    { emj: "👔", type: "putih" },
  ];

  let pool = [...items].sort(() => Math.random() - 0.5);
  let score = 0;

  let html = `
        <h3 style="color: var(--primary)">Laundri Cilik 🧺</h3>
        <p>Pisahkan baju <b>Putih</b> dan <b>Berwarna</b> ke mesin yang benar!</p>
        
        <div style="display: flex; justify-content: center; gap: 30px; margin-top: 20px;">
            <div id="wash-white" ondragover="event.preventDefault()" ondrop="dropLaundry(event, 'putih')"
                 style="width: 130px; height: 160px; background: #e3f2fd; border: 4px solid #90caf9; border-radius: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 3rem;">⚪</span>
                <small>Baju Putih</small>
            </div>
            
            <div id="wash-color" ondragover="event.preventDefault()" ondrop="dropLaundry(event, 'warna')"
                 style="width: 130px; height: 160px; background: #fce4ec; border: 4px solid #f48fb1; border-radius: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 3rem;">🌈</span>
                <small>Berwarna</small>
            </div>
        </div>

        <div id="laundry-pool" style="display: flex; justify-content: center; gap: 15px; margin-top: 30px; flex-wrap: wrap;">
            ${pool
              .map(
                (item, i) => `
                <div id="laundry-${i}" draggable="true" ondragstart="laundryDrag(event, '${item.type}', ${i})"
                     style="font-size: 3rem; cursor: grab; background: white; border: 2px solid #eee; border-radius: 10px; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; ${item.type === "putih" ? "color: #999" : "color: #e91e63"}">
                    ${item.emj}
                </div>
            `,
              )
              .join("")}
        </div>
    `;

  updateContainer(html);
  speak(
    "Ayo bantu pisahkan jemuran! Masukkan baju putih ke mesin putih, dan baju warna ke mesin pelangi ya.",
  );

  window.laundryDrag = (e, type, idx) => {
    e.dataTransfer.setData("type", type);
    e.dataTransfer.setData("idx", idx);
  };

  window.dropLaundry = (e, targetType) => {
    const type = e.dataTransfer.getData("type");
    const idx = e.dataTransfer.getData("idx");

    if (type === targetType) {
      score++;
      document.getElementById(`laundry-${idx}`).style.display = "none";
      speak("Betul!");

      if (score === items.length) {
        setTimeout(() => {
          currentState.score += 35;
          showSuccess(() => renderLaundryGame());
        }, 800);
      }
    } else {
      alert("Eh, jangan dicampur nanti kelunturan! 🧐");
      speak("Jangan dicampur ya, pilih mesin yang benar.");
    }
  };
}
