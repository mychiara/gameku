function renderPackingGame() {
  const shapes = [
    { emj: "🟥", type: "Kotak" },
    { emj: "🟡", type: "Bulat" },
    { emj: "🔺", type: "Segitiga" },
    { emj: "⭐", type: "Bintang" },
  ];

  let taskShapes = [...shapes].sort(() => Math.random() - 0.5);
  let slots = [...taskShapes].sort(() => Math.random() - 0.5);
  let matched = 0;

  let html = `
        <h3 style="color: var(--primary)">Packing Master 📦</h3>
        <p>Masukkan mainan ke lubang yang pas ya!</p>
        
        <div style="display: flex; justify-content: center; gap: 40px; margin-top: 30px;">
            <div id="toy-bag" style="display: flex; flex-direction: column; gap: 15px;">
                ${taskShapes
                  .map(
                    (s, i) => `
                    <div id="toy-${i}" class="toy-item" draggable="true" ondragstart="toyDragStart(event, '${s.type}', ${i})"
                         style="font-size: 3.5rem; cursor: grab; background: white; border: 2px solid #ddd; border-radius: 15px; padding: 10px; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center;">
                        ${s.emj}
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <div id="box-target" style="width: 150px; background: #8d6e63; border: 5px solid #5d4037; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 20px; align-items: center;">
                ${slots
                  .map(
                    (s, i) => `
                    <div class="slot" ondragover="event.preventDefault()" ondrop="toyDrop(event, '${s.type}', ${i})"
                         style="width: 70px; height: 70px; background: rgba(0,0,0,0.2); border: 3px dashed #fff; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 3.5rem; color: rgba(255,255,255,0.3);">
                        ?
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `;

  updateContainer(html);
  speak("Ayo masukkan mainan-mainan ini ke dalam koper sesuai bentuknya!");

  window.toyDragStart = (e, type, idx) => {
    e.dataTransfer.setData("type", type);
    e.dataTransfer.setData("idx", idx);
  };

  window.toyDrop = (e, targetType, slotIdx) => {
    e.preventDefault();
    const draggedType = e.dataTransfer.getData("type");
    const draggedIdx = e.dataTransfer.getData("idx");

    if (draggedType === targetType) {
      matched++;
      const toyEl = document.getElementById(`toy-${draggedIdx}`);
      const slotEl = e.target.closest(".slot");

      slotEl.innerHTML = toyEl.innerHTML;
      slotEl.style.background = "#fff";
      slotEl.style.color = "initial";
      slotEl.style.border = "2px solid var(--success)";
      toyEl.style.visibility = "hidden";

      speak("Bagus! Pas sekali.");

      if (matched === shapes.length) {
        setTimeout(() => {
          currentState.score += 45;
          showSuccess(() => renderPackingGame());
        }, 1000);
      }
    } else {
      alert("Uuuh, bentuknya tidak sama. Coba lagi ya! 🧐");
      speak("Bentuknya tidak pas.");
    }
  };
}
