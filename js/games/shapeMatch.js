// 19. Shape Matching Game
function renderShapeGame() {
  const data =
    CONFIG.shapeMatch[Math.floor(Math.random() * CONFIG.shapeMatch.length)];
  const shapes = ["Segitiga", "Lingkaran", "Kotak"];

  const html = `
        <h3>Mengenal Bentuk 📐</h3>
        ${addVoiceBtn(`Benda ${data.item} ini berbentuk apa?`)}
        <div style="font-size: 8rem; margin: 20px 0;">
            ${data.item}
        </div>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Apa bentuk dasarnya?</p>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${shapes
              .map(
                (s) => `
                <button class="btn-choice" style="padding: 15px;" onclick="checkShape('${s}', '${data.shape}')">
                    ${s === "Segitiga" ? "🔺" : s === "Lingkaran" ? "🔴" : "🟦"}<br>${s}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`${data.item.split(" ")[0]} ini berbentuk apa?`);
}

function checkShape(selected, correct) {
  if (selected === correct) {
    currentState.score += 15;
    showSuccess(() => renderShapeGame());
  } else {
    alert("Bentuknya bukan itu, ayo perhatikan lagi! 📐");
  }
}
