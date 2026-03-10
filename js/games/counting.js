// 9. Counting Game
function renderCountingGame() {
  const data =
    CONFIG.counting[Math.floor(Math.random() * CONFIG.counting.length)];

  // Generate 3 unique options including the correct one
  const options = [data.count];
  while (options.length < 3) {
    const rand = Math.floor(Math.random() * 10) + 1;
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Ayo Berhitung!</h3>
        ${addVoiceBtn(`Ada berapa jumlah benda di kotak?`)}
        <div class="object-display" style="min-height: 200px; padding: 20px; background: #f0f7ff; border-radius: 20px; margin-bottom: 30px;">
            ${Array(data.count)
              .fill(0)
              .map(
                () =>
                  `<span style="font-size: 3rem; margin: 5px;">${data.emoji}</span>`,
              )
              .join("")}
        </div>
        <p style="font-size: 1.5rem; margin-bottom: 20px">Ada berapa jumlah benda di atas?</p>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 2.5rem; padding: 20px;" onclick="checkCounting(${opt}, ${data.count})">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Ada berapa jumlah benda dalam kotak?`);
}

function checkCounting(selected, correct) {
  if (selected === correct) {
    currentState.score += 15;
    showSuccess(() => renderCountingGame());
  } else {
    alert("Coba hitung sekali lagi! 🧮");
  }
}
