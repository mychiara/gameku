// 3. Math Game
function renderMathGame() {
  // Range 1-10 for better variety
  const num = Math.floor(Math.random() * 10) + 1;
  const emoji =
    CONFIG.mathEmojis[Math.floor(Math.random() * CONFIG.mathEmojis.length)];

  // Generate dynamic choices centered around the correct answer
  let options = [correct];
  while (options.length < 6) {
    let random = Math.max(1, correct + Math.floor(Math.random() * 7) - 3);
    if (!options.includes(random)) options.push(random);
  }
  options.sort((a, b) => a - b);

  const html = `
        <h3>Ayo Berhitung!</h3>
        ${addVoiceBtn(`Berapakah hasil dari ${num1} ditambah ${num2}?`)}
        <div class="math-display" style="font-size: 4rem; margin: 20px; font-weight: 800; color: var(--primary);">
            ${num1} + ${num2} = ?
        </div>
        <div class="object-display">
            ${Array(num1).fill(`<div class="math-object">${emoji}</div>`).join("")}
            <div style="font-size: 3rem; align-self: center; margin: 0 10px">+</div>
            ${Array(num2).fill(`<div class="math-object">${emoji}</div>`).join("")}
        </div>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr)">
            ${options.map((opt) => `<button class="btn-choice" onclick="checkMath(${opt}, ${correct})">${opt}</button>`).join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Berapakah hasil dari ${num1} ditambah ${num2}?`);
}

function checkMath(selected, correct) {
  if (selected === correct) {
    currentState.score += 10;
    showSuccess(() => renderMathGame());
  }
}
