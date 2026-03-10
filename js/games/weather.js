// 26. Weather & Seasons Game
function renderWeatherGame() {
  const data =
    CONFIG.weather[Math.floor(Math.random() * CONFIG.weather.length)];

  // Generate options
  const options = [data.action];
  const allActions = [...new Set(CONFIG.weather.map((w) => w.action))];
  while (options.length < 3) {
    const rand = allActions[Math.floor(Math.random() * allActions.length)];
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Cuaca & Musim 🌦️</h3>
        ${addVoiceBtn(`Cuaca sedang ${data.condition}. Sebaiknya kita apa?`)}
        <div style="font-size: 8rem; margin: 30px 0;">
            ${data.condition}
        </div>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Cuaca sedang <b>${data.condition}</b>. Apa yang harus kita lakukan?</p>
        <div class="choices">
            ${options
              .map(
                (opt) => `
                <button class="btn-choice" onclick="checkWeather('${opt}', '${data.action}')">
                    ${opt}
                </button>
            `,
              )
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(
    `Cuaca sedang ${data.condition.split(" ")[0]}. Sebaiknya kita lakukan apa?`,
  );
}

function checkWeather(selected, correct) {
  if (selected === correct) {
    currentState.score += 15;
    showSuccess(() => renderWeatherGame());
  } else {
    alert(
      "Wah, kalau cuacanya begitu sepertinya itu kurang cocok. Coba yang lain! 🌦️",
    );
  }
}
