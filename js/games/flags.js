// 25. Flag Master Game
function renderFlagsGame() {
  const data = CONFIG.flags[Math.floor(Math.random() * CONFIG.flags.length)];

  const options = [data.name];
  while (options.length < 3) {
    const rand =
      CONFIG.flags[Math.floor(Math.random() * CONFIG.flags.length)].name;
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const flagEmoji = data.country.split(" ").pop();
  let imgHtml = "";
  try {
    const countryCode = [...flagEmoji]
      .map((c) => String.fromCharCode(c.codePointAt(0) - 127397).toLowerCase())
      .join("");
    if (countryCode.length === 2 && /^[a-z]{2}$/.test(countryCode)) {
      imgHtml = `<img src="https://flagcdn.com/w160/${countryCode}.png" style="width: 200px; border-radius: 10px; margin: 20px 0; border: 3px solid #eee; box-shadow: 0 10px 20px rgba(0,0,0,0.1);" alt="Flag">`;
    } else {
      imgHtml = `<div style="font-size: 10rem; margin: 20px 0; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));">${flagEmoji}</div>`;
    }
  } catch {
    imgHtml = `<div style="font-size: 10rem; margin: 20px 0;">${flagEmoji}</div>`;
  }

  const html = `
        <h3>Bendera Dunia 🏁</h3>
        ${addVoiceBtn(`Ini adalah bendera negara mana?`)}
        ${imgHtml}
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Ini adalah bendera dari negara:</p>
        <div class="choices">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" onclick="checkFlags('${opt}', '${data.name}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Ini adalah bendera dari negara mana?`);
}

function checkFlags(selected, correct) {
  if (selected === correct) {
    currentState.score += 30;
    showSuccess(() => renderFlagsGame());
  } else {
    alert("Bukan, itu bendera negara lain. Coba lagi! 🌏");
  }
}
