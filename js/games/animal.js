// 1. Animal Game
function renderAnimalGame() {
  const animal =
    CONFIG.animals[Math.floor(Math.random() * CONFIG.animals.length)];
  const options = [animal.name];
  while (options.length < 3) {
    const random =
      CONFIG.animals[Math.floor(Math.random() * CONFIG.animals.length)].name;
    if (!options.includes(random)) options.push(random);
  }
  options.sort(() => Math.random() - 0.5);

  // Prioritize image if it's one of the major ones, otherwise use emoji if available
  const hasImage =
    ["Singa", "Gajah", "Panda", "Kucing", "Apel", "Bola"].includes(
      animal.name,
    ) || animal.img;

  const contentHtml =
    hasImage && animal.img
      ? `<img src="${animal.img}" class="animal-img" alt="Hewan" onerror="this.parentElement.innerHTML='<div style=\'font-size: 8rem; line-height: 200px\'>${animal.emoji || "🐾"}</div>'">`
      : `<div style="font-size: 8rem; line-height: 200px">${animal.emoji || "🐾"}</div>`;

  const html = `
        <h3>Siapa aku?</h3>
        ${addVoiceBtn(`Halo, aku adalah hewan. Siapakah namaku?`)}
        <div class="animal-img-container">
            ${contentHtml}
        </div>
        <div class="choices">
            ${options.map((opt) => `<button class="btn-choice" onclick="checkAnimal('${opt}', '${animal.name}')">${opt}</button>`).join("")}
        </div>
    `;
  updateContainer(html);
  speak(`Halo, aku adalah hewan. Siapakah namaku?`);
}

function checkAnimal(selected, correct) {
  if (selected === correct) {
    currentState.score += 10;
    showSuccess(() => renderAnimalGame());
  } else {
    alert("Coba lagi ya! 💪");
  }
}
