function renderAnimalMatchingGame() {
  const data =
    CONFIG.animal_matching[
      Math.floor(Math.random() * CONFIG.animal_matching.length)
    ];

  const options = [data.child];
  while (options.length < 4) {
    const rand =
      CONFIG.animal_matching[
        Math.floor(Math.random() * CONFIG.animal_matching.length)
      ].child;
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Induk & Anak Hewan 🐔</h3>
        ${addVoiceBtn(`Tolong carikan anakku, kata si ${data.parent}`)}
        
        <div style="margin: 20px 0;">
            <p style="font-size: 1.2rem; color: #666; font-weight: bold;">Induk Hewan:</p>
            <div style="font-size: 7rem; display: inline-block; filter: drop-shadow(0 10px 10px rgba(0,0,0,0.1));">
                ${data.parent.split(" ").slice(-1)[0]}
            </div>
            <p style="font-size: 1.3rem; font-weight: bold;">${data.parent}</p>
        </div>

        <p style="font-size: 1.2rem; margin: 20px 0; color: #555;">Manakah bayinya?</p>

        <div class="choices" style="grid-template-columns: repeat(2, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 1.2rem; padding: 20px; display: flex; flex-direction: column; align-items: center;" onclick="checkAnimalMatching('${opt}', '${data.child}')">
                    <span style="font-size: 3.5rem; margin-bottom: 10px;">${opt.split(" ").slice(-1)[0]}</span>
                    <span>${opt.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji_Presentation}/gu, "")}</span>
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(
    `Manakah bayi atau anak dari ${data.parent.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji_Presentation}/gu, "")}?`,
  );
}

function checkAnimalMatching(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderAnimalMatchingGame());
  } else {
    alert("Bukan dia anakknya. Coba cari yang mirip dengan induknya! 🐾");
  }
}
