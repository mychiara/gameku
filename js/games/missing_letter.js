function renderMissingLetterGame() {
  const data =
    CONFIG.missing_letter[
      Math.floor(Math.random() * CONFIG.missing_letter.length)
    ];

  // Search for the object image in alphabet DB if possible
  let emojiIcon = "❓";
  const searchWord = data.full.toLowerCase();
  for (const item of CONFIG.alphabet) {
    if (item.item && item.item.toLowerCase() === searchWord) {
      emojiIcon = item.emoji;
      break;
    }
  }

  const options = [...data.options].sort(() => Math.random() - 0.5);

  const html = `
        <h3>Isi Huruf Hilang ✍️</h3>
        ${addVoiceBtn(`Huruf apa yang hilang pada kata ${data.full}?`)}
        
        <div style="font-size: 6rem; margin: 20px 0; display: inline-block;">
            ${emojiIcon}
        </div>

        <div style="font-size: 4rem; margin: 20px 0; font-weight: bold; font-family: monospace; letter-spacing: 15px; background: #2f3640; color: white; padding: 20px 40px; border-radius: 20px; border: 5px solid #dcdde1; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);">
            ${data.word.replace("_", '<span style="color: #fbc531; border-bottom: 6px solid #fbc531;">_</span>')}
        </div>

        <p style="font-size: 1.2rem; margin-bottom: 20px; font-weight: bold;">Tebak huruf yang tepat:</p>
        
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 2.5rem; padding: 15px; font-weight: 800; border-radius: 20px;" onclick="checkMissingLetter('${opt}', '${data.correct}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Bantu lengkapi. Huruf apa yang hilang pada tulisan ${data.full}?`);
}

function checkMissingLetter(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderMissingLetterGame());
  } else {
    alert("Hurufnya salah! Coba eja lagi kata bendanya pelan-pelan. 🔠");
  }
}
