function renderWordScrambleGame() {
  const data =
    CONFIG.word_scramble[
      Math.floor(Math.random() * CONFIG.word_scramble.length)
    ];

  // Create an array of letters from the word, scrambled
  let letters = data.word.split("");
  do {
    letters.sort(() => Math.random() - 0.5);
  } while (letters.join("") === data.word && data.word.length > 1);

  // Use extra state to store the word being built
  currentState.extra.wordTarget = data.word;
  currentState.extra.wordCurrent = []; // the letters user has clicked
  currentState.extra.wordAvailable = letters; // letters left to click

  updateWordScrambleView();
  speak(`Coba susun huruf-huruf ini menjadi nama benda di gambar`);
}

function updateWordScrambleView() {
  const target = currentState.extra.wordTarget;
  const current = currentState.extra.wordCurrent;
  const available = currentState.extra.wordAvailable;

  if (current.join("") === target) {
    currentState.score += 25;
    showSuccess(() => renderWordScrambleGame());
    return;
  } else if (current.length === target.length && current.join("") !== target) {
    // Automatically reset if wrong
    alert("Wah, susunannya belum pas. Ayo coba lagi! ✏️");
    let letters = target.split("");
    letters.sort(() => Math.random() - 0.5);
    currentState.extra.wordCurrent = [];
    currentState.extra.wordAvailable = letters;
    updateWordScrambleView();
    return;
  }

  const dataObj = CONFIG.word_scramble.find((w) => w.word === target);

  const html = `
        <h3>Susun Kata ✏️</h3>
        ${addVoiceBtn("Susun huruf menjadi kata yang benar")}
        
        <div style="font-size: 6rem; margin: 20px 0; display: inline-block; animation: bounce 3s infinite ease-in-out;">
            ${dataObj.emj}
        </div>

        <div style="margin: 20px 0; background: #fff; border-radius: 15px; padding: 20px; border: 4px dashed var(--accent); min-height: 80px; display: flex; gap: 10px; justify-content: center;">
            ${Array.from({ length: target.length })
              .map(
                (_, i) => `
                <div style="width: 50px; height: 60px; border-bottom: 4px solid #333; display: flex; align-items: flex-end; justify-content: center; font-size: 2.5rem; font-weight: bold; color: var(--primary); padding-bottom: 5px;">
                    ${current[i] || ""}
                </div>
            `,
              )
              .join("")}
        </div>

        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
            ${available
              .map(
                (letter, idx) => `
                <button class="btn-choice" style="font-size: 2rem; width: 60px; height: 60px; padding: 0; display: flex; align-items: center; justify-content: center; font-weight: bold;" onclick="selectLetter('${letter}', ${idx})">
                    ${letter}
                </button>
            `,
              )
              .join("")}
        </div>
        
        ${current.length > 0 ? `<button onclick="resetScramble()" style="margin-top: 30px; background: transparent; border: none; color: red; text-decoration: underline; cursor: pointer; font-size: 1.1rem; font-weight: bold;">Ulangi Susunan 🔄</button>` : ""}
    `;
  updateContainer(html);
}

function selectLetter(letter, idx) {
  currentState.extra.wordCurrent.push(letter);
  currentState.extra.wordAvailable.splice(idx, 1);
  updateWordScrambleView();
}

function resetScramble() {
  let target = currentState.extra.wordTarget;
  let letters = target.split("");
  do {
    letters.sort(() => Math.random() - 0.5);
  } while (letters.join("") === target && target.length > 1);

  currentState.extra.wordCurrent = [];
  currentState.extra.wordAvailable = letters;
  updateWordScrambleView();
}
