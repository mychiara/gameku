// 6. Color Game
function renderColorGame() {
  const color = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
  const options = [color.name];
  while (options.length < 3) {
    const random =
      CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)].name;
    if (!options.includes(random)) options.push(random);
  }
  options.sort(() => Math.random() - 0.5);

  const html = `
        <h3>Warna apakah ini?</h3>
        <div class="color-splash" style="background-color: ${color.hex}"></div>
        <div class="choices">
            ${options.map((opt) => `<button class="btn-choice" onclick="checkColor('${opt}', '${color.name}')">${opt}</button>`).join("")}
        </div>
    `;
  updateContainer(html);
}

function checkColor(selected, correct) {
  if (selected === correct) {
    currentState.score += 10;
    showSuccess(() => renderColorGame());
  } else {
    alert("Warnanya bukan itu sayang, coba lagi ya! 🎨");
  }
}
