// 8. Odd One Out Game
function renderOddGame() {
  const data =
    CONFIG.oddOneOut[Math.floor(Math.random() * CONFIG.oddOneOut.length)];

  const correctItem = data.items[data.correct];
  const options = [...data.items].sort(() => Math.random() - 0.5);
  const correctIdx = options.indexOf(correctItem);

  const html = `
        <h3>Cari yang Berbeda!</h3>
        <p style="margin-bottom: 20px">Manakah yang <b>${data.name}</b>?</p>
        <div class="choices" style="grid-template-columns: repeat(2, 1fr); gap: 20px;">
            ${options
              .map(
                (item, idx) => `
                <button class="btn-choice" style="font-size: 4rem; padding: 30px;" onclick="checkOdd(${idx}, ${correctIdx})">
                    ${item}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
}

function checkOdd(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderOddGame());
  } else {
    alert("Coba cari lagi ya! 🧐");
  }
}
