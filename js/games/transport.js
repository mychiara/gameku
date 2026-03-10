function renderTransportGame() {
  const data =
    CONFIG.transport[Math.floor(Math.random() * CONFIG.transport.length)];
  const options = ["Darat", "Laut", "Udara"].sort(() => Math.random() - 0.5);

  const html = `
        <h3>Transportasi ✈️</h3>
        ${addVoiceBtn(`Alat transportasi ${data.item.split(" ")[0]} ini bergerak di mana?`)}
        <div style="font-size: 8rem; margin: 30px 0; display: inline-block; animation: bounce 3s infinite;">
            ${data.item.split(" ").slice(-1)[0]} <!-- Take just the emoji -->
        </div>
        <p style="font-size: 1.5rem; margin-bottom: 10px; font-weight: bold;">${data.item.replace(/ .$/, "")}</p>
        <p style="font-size: 1.2rem; margin-bottom: 20px; color: #666;">Kendaraan ini biasanya dijumpai di mana?</p>
        <div class="choices" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${options
              .map((opt) => {
                let icon =
                  opt === "Darat" ? "🛣️" : opt === "Laut" ? "🌊" : "☁️";
                return `
                <button class="btn-choice" style="padding: 15px;" onclick="checkTransport('${opt}', '${data.answer}')">
                    <span style="font-size: 3rem; display: block; margin-bottom: 10px;">${icon}</span>
                    ${opt}
                </button>
                `;
              })
              .join("")}
        </div>
    `;
  updateContainer(html);
  speak(
    `Kendaraan ${data.item.replace(/ .$/, "")} ini biasanya bergerak di mana?`,
  );
}

function checkTransport(selected, correct) {
  if (selected === correct) {
    currentState.score += 15;
    showSuccess(() => renderTransportGame());
  } else {
    alert("Bukan di situ jalurnya, ayo coba cari jalur yang benar! 🚧");
  }
}
