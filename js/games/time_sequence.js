function renderTimeSequenceGame() {
  const data =
    CONFIG.time_sequence[
      Math.floor(Math.random() * CONFIG.time_sequence.length)
    ];

  const html = `
        <h3>Hari & Bulan 📅</h3>
        ${addVoiceBtn(`Manakah urutan yang benar selanjutnya setelah ${data.seq[2]}?`)}
        <div class="pattern-display" style="display: flex; justify-content: center; gap: 10px; margin-top: 20px; margin-bottom: 40px; background: #fff9db; padding: 20px; border-radius: 20px; border: 4px dashed #fab005;">
            ${data.seq
              .map((item) => {
                if (item === "?") {
                  return `<span style="font-size: 1.5rem; font-weight: bold; background: #fff; width: 80px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 10px; border: 3px solid #fab005; color: #fab005;">?</span>`;
                }
                return `<span style="font-size: 1.2rem; font-weight: bold; padding: 15px 10px; background: white; border-radius: 10px; border: 2px solid #eee;">${item}</span>`;
              })
              .join(
                ' <span style="font-size: 1.5rem; color: #fab005; align-self: center;">→</span> ',
              )}
        </div>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Pilih jawaban yang benar:</p>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${data.options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 1.2rem; padding: 15px;" onclick="checkTimeSequence('${opt}', '${data.correct}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(
    `Manakah hari atau bulan yang benar selanjutnya setelah ${data.seq[2]}?`,
  );
}

function checkTimeSequence(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderTimeSequenceGame());
  } else {
    alert("Coba ingat-ingat lagi urutan waktunya ya! 📅");
  }
}
