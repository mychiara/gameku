function renderSchoolGame() {
  const data = CONFIG.school[Math.floor(Math.random() * CONFIG.school.length)];

  const options = [data]; // store object to get fallback emoji easily
  while (options.length < 4) {
    const rand =
      CONFIG.school[Math.floor(Math.random() * CONFIG.school.length)];
    if (!options.find((r) => r.ans === rand.ans)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Alat Sekolah 🏫</h3>
        ${addVoiceBtn("Benda apakah yang diceritakan?")}
        <p style="font-size: 1.4rem; line-height: 1.5; padding: 25px; background: #fefae0; border-radius: 15px; border: 3px solid #dda15e; margin: 30px 0; font-weight: bold; color: #283618;">
            "${data.case}"
        </p>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Coba tebak, siapakah aku?</p>
        <div class="choices" style="grid-template-columns: repeat(2, 1fr); gap: 15px;">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" style="font-size: 1.2rem; padding: 15px; display: flex; flex-direction: column; align-items: center;" onclick="checkSchool('${opt.ans}', '${data.ans}')">
                    <span style="font-size: 3rem; margin-bottom: 15px;">${opt.fallback}</span>
                    <span>${opt.ans.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji_Presentation}/gu, "")}</span>
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(data.case + " Siapakah aku?");
}

function checkSchool(selected, correct) {
  if (selected === correct) {
    currentState.score += 20;
    showSuccess(() => renderSchoolGame());
  } else {
    alert("Bukan aku alatnya, ayo coba cari di keranjang pensilmu lagi ya! 🎒");
  }
}
