// 3. Math Game
function renderMathGame() {
  // Range 1-5 for young children to keep it simple and visual
  const num1 = Math.floor(Math.random() * 5) + 1;
  const num2 = Math.floor(Math.random() * 5) + 1;
  const correct = num1 + num2;

  const emoji =
    CONFIG.mathEmojis[Math.floor(Math.random() * CONFIG.mathEmojis.length)] ||
    "🍎";

  // Generate dynamic choices centered around the correct answer
  let options = [correct];
  while (options.length < 6) {
    let random = correct + Math.floor(Math.random() * 10) - 4; // Wider range
    if (random < 1) random = Math.floor(Math.random() * 15) + 1; // Fallback to avoid negatives/zeros
    if (!options.includes(random)) options.push(random);
  }
  options.sort((a, b) => a - b);

  const html = `
        <h3>Ayo Berhitung!</h3>
        ${addVoiceBtn(`Berapakah hasil dari ${num1} ditambah ${num2}?`)}
        <div class="math-display" style="font-size: 4rem; margin: 20px; font-weight: 800; color: var(--primary);">
            ${num1} + ${num2} = ?
        </div>
        <div class="object-display" style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-bottom: 30px;">
            <div class="group" style="display: flex; gap: 5px; background: #fff5f5; padding: 10px; border-radius: 15px;">
                ${Array(num1).fill(`<span style="font-size: 2.5rem">${emoji}</span>`).join("")}
            </div>
            <div style="font-size: 3rem; align-self: center;">+</div>
            <div class="group" style="display: flex; gap: 5px; background: #f0f7ff; padding: 10px; border-radius: 15px;">
                ${Array(num2).fill(`<span style="font-size: 2.5rem">${emoji}</span>`).join("")}
            </div>
        </div>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${options.map((opt) => `<button class="btn-choice" style="font-size: 2rem; padding: 15px;" onclick="checkMath(${opt}, ${correct})">${opt}</button>`).join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Berapakah hasil dari ${num1} ditambah ${num2}?`);
}

function checkMath(selected, correct) {
  if (selected === correct) {
    currentState.score += 10;
    showSuccess(() => renderMathGame());
  } else {
    alert("Yah, kurang tepat. Coba hitung lagi ya! 🧮");
  }
}
