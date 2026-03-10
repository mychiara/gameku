function renderRecycleGame() {
  const trashItems = [
    { name: "Botol", emj: "🍼", type: "plastik" },
    { name: "Kardus", emj: "📦", type: "kertas" },
    { name: "Kaleng", emj: "🥫", type: "logam" },
    { name: "Gelas Plastik", emj: "🥤", type: "plastik" },
    { name: "Koran", emj: "📰", type: "kertas" },
    { name: "Sendok", emj: "🥄", type: "logam" },
  ];

  let pool = [...trashItems].sort(() => Math.random() - 0.5);
  let sorted = 0;

  let html = `
        <h3 style="color: var(--primary)">Pabrik Daur Ulang ♻️</h3>
        <p>Ayo buang sampah ke tempat yang benar sesuai jenisnya!</p>
        
        <div style="display: flex; justify-content: center; gap: 15px; margin-top: 20px;">
            <div id="bin-plastik" ondragover="event.preventDefault()" ondrop="dropTrash(event, 'plastik')"
                 style="width: 100px; height: 140px; background: #e8f5e9; border: 4px solid #81c784; border-radius: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 2.5rem;">🥤</span>
                <small>Plastik</small>
            </div>
            
            <div id="bin-kertas" ondragover="event.preventDefault()" ondrop="dropTrash(event, 'kertas')"
                 style="width: 100px; height: 140px; background: #fff3e0; border: 4px solid #ffb74d; border-radius: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 2.5rem;">📦</span>
                <small>Kertas</small>
            </div>

            <div id="bin-logam" ondragover="event.preventDefault()" ondrop="dropTrash(event, 'logam')"
                 style="width: 100px; height: 140px; background: #f5f5f5; border: 4px solid #bdbdbd; border-radius: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 2.5rem;">🥫</span>
                <small>Logam</small>
            </div>
        </div>

        <div id="trash-pool" style="display: flex; justify-content: center; gap: 15px; margin-top: 30px; flex-wrap: wrap;">
            ${pool
              .map(
                (item, i) => `
                <div id="trash-${i}" draggable="true" ondragstart="trashDrag(event, '${item.type}', ${i})"
                     style="font-size: 3rem; cursor: grab; background: white; border: 2px solid #eee; border-radius: 10px; width: 65px; height: 65px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    ${item.emj}
                </div>
            `,
              )
              .join("")}
        </div>
    `;

  updateContainer(html);
  speak("Ayo lestarikan bumi! Masukkan sampah ke kotak sampah yang benar ya.");

  window.trashDrag = (e, type, idx) => {
    e.dataTransfer.setData("type", type);
    e.dataTransfer.setData("idx", idx);
  };

  window.dropTrash = (e, targetType) => {
    const type = e.dataTransfer.getData("type");
    const idx = e.dataTransfer.getData("idx");

    if (type === targetType) {
      sorted++;
      document.getElementById(`trash-${idx}`).style.display = "none";
      speak("Yeay! Sampah terbuang.");

      if (sorted === trashItems.length) {
        setTimeout(() => {
          currentState.score += 40;
          showSuccess(() => renderRecycleGame());
        }, 800);
      }
    } else {
      alert("Oops! Itu bukan tempatnya. Masukkan ke kotak lain ya! 🧐");
      speak("Gunakan kotak sampah yang sesuai jenisnya ya.");
    }
  };
}
