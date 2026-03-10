// 2. Alphabet Game
function renderAlphabetGame() {
  const item =
    CONFIG.alphabet[Math.floor(Math.random() * CONFIG.alphabet.length)];
  const options = [item.letter];
  while (options.length < 4) {
    // Increase variety to 4 options
    const random = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    if (!options.includes(random)) options.push(random);
  }
  options.sort(() => Math.random() - 0.5);

  const content = item.img
    ? `<img src="${item.img}" class="animal-img" style="width:200px; height:200px; object-fit: contain;" onerror="this.parentElement.innerHTML='<span style=\'font-size: 8rem\'>${item.emoji}</span>'">`
    : `<span style="font-size: 8rem">${item.emoji}</span>`;

  const html = `
        <h3>Huruf Awalan</h3>
        ${addVoiceBtn(`Benda ini adalah ${item.item}. Huruf apakah awalannya?`)}
        <div class="letter-display" style="min-height: 200px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
            ${content}
        </div>
        <p style="margin-bottom: 20px; font-size: 1.2rem;">Ini adalah <b>${item.item}</b>. Huruf apakah awalannya?</p>
        <div class="choices" style="grid-template-columns: repeat(2, 1fr); gap: 15px;">
            ${options.map((opt) => `<button class="btn-choice" style="font-size: 2.5rem; padding: 20px;" onclick="checkAlphabet('${opt}', '${item.letter}')">${opt}</button>`).join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Benda ini adalah ${item.item}. Huruf apakah awalannya?`);
}

function checkAlphabet(selected, correct) {
  if (selected === correct) {
    currentState.score += 10;
    showSuccess(() => renderAlphabetGame());
  } else {
    alert("Hampir benar! Coba lagi.");
  }
}
