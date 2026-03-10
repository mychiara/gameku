function renderDirectionGame() {
  const directions = [
    { id: "atas", text: "Atas ⬆️", icon: "⬆️" },
    { id: "bawah", text: "Bawah ⬇️", icon: "⬇️" },
    { id: "kiri", text: "Kiri ⬅️", icon: "⬅️" },
    { id: "kanan", text: "Kanan ➡️", icon: "➡️" },
  ];

  const targetDir = directions[Math.floor(Math.random() * directions.length)];
  const options = [...directions].sort(() => Math.random() - 0.5);

  const html = `
        <h3>Belajar Arah 🧭</h3>
        ${addVoiceBtn(`Manakah panah yang menunjuk ke arah ${targetDir.text.split(" ")[0]}?`)}
        
        <div style="font-size: 8rem; margin: 30px 0; background: #f1f2f6; width: 150px; height: 150px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: auto; margin-right: auto; box-shadow: inset 0 5px 15px rgba(0,0,0,0.1);">
            🧸
        </div>

        <p style="font-size: 1.4rem; font-weight: bold; margin-bottom: 20px;">Beruang ingin pergi ke: <span style="color: var(--primary);">${targetDir.text.split(" ")[0].toUpperCase()}</span></p>
        
        <div class="choices" style="grid-template-columns: repeat(2, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 1.2rem; padding: 25px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: white; border: 4px solid #ced6e0;" onclick="checkDirection('${opt.id}', '${targetDir.id}')">
                    <span style="font-size: 3rem; margin-bottom: 10px;">${opt.icon}</span>
                    <span>${opt.text.split(" ")[0]}</span>
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(
    `Bantu Beruang! Manakah panah yang menunjuk ke arah ${targetDir.text.split(" ")[0]}?`,
  );
}

function checkDirection(selected, correct) {
  if (selected === correct) {
    currentState.score += 15;
    showSuccess(() => renderDirectionGame());
  } else {
    alert("Ops, salah belok! Ayo cari arah yang benar! 🧭");
  }
}
