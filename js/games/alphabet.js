// 2. Alphabet Game
function renderAlphabetGame() {
  const item =
    CONFIG.alphabet[Math.floor(Math.random() * CONFIG.alphabet.length)];
  const options = [item.letter];
  while (options.length < 3) {
    const random = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    if (!options.includes(random)) options.push(random);
  }
  options.sort(() => Math.random() - 0.5);

  const content = item.img
    ? `<img src="${item.img}" style="width:150px">`
    : `<span style="font-size:5rem">${item.emoji}</span>`;

  const html = `
        <h3>Huruf apa ini?</h3>
        ${addVoiceBtn(`Manakah benda yang berawalan dari huruf ${item.letter}?`)}
        <div class="letter-display">${item.letter}</div>
        <p style="margin-bottom: 20px">Pilih benda yang berawalan huruf <b>${item.letter}</b></p>
        <div class="choices">
            ${options.map((opt) => `<button class="btn-choice" onclick="checkAlphabet('${opt}', '${item.letter}')">${opt}</button>`).join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Manakah benda yang berawalan dari huruf ${item.letter}?`);
}

function checkAlphabet(selected, correct) {
  if (selected === correct) {
    currentState.score += 10;
    showSuccess(() => renderAlphabetGame());
  } else {
    alert("Hampir benar! Coba lagi.");
  }
}
