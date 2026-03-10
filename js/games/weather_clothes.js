function renderWeatherClothesGame() {
  const scenarios = [
    {
      weather: "Hujan 🌧️",
      text: "Diluar sedang HUJAN! Pakai apa ya agar tidak basah?",
      correct: ["Payung ☂️", "Jas Hujan 🧥"],
      options: [
        "Payung ☂️",
        "Kacamata Hitam 🕶️",
        "Topi Pantai 👒",
        "Jas Hujan 🧥",
      ],
    },
    {
      weather: "Panas Terik ☀️",
      text: "Matahari sangat TERIK! Lindungi matamu dan kepalamu!",
      correct: ["Topi Pantai 👒", "Kacamata Hitam 🕶️"],
      options: [
        "Topi Pantai 👒",
        "Kacamata Hitam 🕶️",
        "Jaket Tebal 🧥",
        "Sandal Jepit 🩴",
      ],
    },
    {
      weather: "Salju Dingin ❄️",
      text: "Dingin sekali! Pakai baju yang hangat ya!",
      correct: ["Jaket Tebal 🧥", "Syall 🧣"],
      options: [
        "Jaket Tebal 🧥",
        "Sandal Jepit 🩴",
        "Kaos Singlet 🎽",
        "Syall 🧣",
      ],
    },
    {
      weather: "Berangin 🌬️",
      text: "Angin kencang! Pakai jaket agar tidak masuk angin ya!",
      correct: ["Jaket 🧥"],
      options: ["Jaket 🧥", "Kaos Singlet 🎽", "Kacamata Hitam 🕶️"],
    },
    {
      weather: "Pantai 🏖️",
      text: "Ayo bermain ke pantai! Pakai baju renangmu!",
      correct: ["Baju Renang 🩱", "Kacamata Hitam 🕶️"],
      options: [
        "Baju Renang 🩱",
        "Jaket Tebal 🧥",
        "Kacamata Hitam 🕶️",
        "Syall 🧣",
      ],
    },
    {
      weather: "Tidur 🌙",
      text: "Sudah malam, waktunya tidur! Pakai piyamamu ya.",
      correct: ["Piyama 👘"],
      options: ["Piyama 👘", "Sepatu 👟", "Topi 🧢"],
    },
  ];

  const task = scenarios[Math.floor(Math.random() * scenarios.length)];
  let selected = [];

  let html = `
        <h3 style="color: var(--primary)">Jemuran Ajaib 👕</h3>
        <div style="font-size: 5rem; text-align: center; margin: 10px;">${task.weather}</div>
        <p style="text-align: center; margin-bottom: 20px;">${task.text}</p>
        
        <div id="clothes-hanger" style="display: flex; justify-content: center; gap: 15px; margin-bottom: 30px;">
            ${task.options
              .map(
                (opt, i) => `
                <div class="clothes-item" onclick="toggleClothe(this, '${opt}')"
                     style="padding: 15px; background: white; border: 3px solid #eee; border-radius: 15px; cursor: pointer; transition: 0.3s; text-align:center;">
                    <span style="font-size: 3rem; display: block;">${opt.split(" ")[0]}</span>
                    <small>${opt.split(" ")[1] || ""}</small>
                </div>
            `,
              )
              .join("")}
        </div>

        <div style="text-align: center;">
            <button class="btn-choice" style="background: var(--success); color: white;" onclick="checkClothes()">Siap Berangkat! 🏃</button>
        </div>
    `;

  updateContainer(html);
  speak(task.text);

  window.toggleClothe = (el, val) => {
    if (selected.includes(val)) {
      selected = selected.filter((v) => v !== val);
      el.style.borderColor = "#eee";
      el.style.background = "white";
    } else {
      selected.push(val);
      el.style.borderColor = "var(--primary)";
      el.style.background = "#fff0f0";
    }
  };

  window.checkClothes = () => {
    const isCorrect =
      selected.length > 0 && selected.every((v) => task.correct.includes(v));
    if (isCorrect) {
      currentState.score += 25;
      showSuccess(() => renderWeatherClothesGame());
    } else {
      alert("Oops! Pakaiannya belum cocok dengan cuacanya. Coba lagi ya! 😊");
      speak("Pilih pakaian yang cocok dengan cuacanya ya.");
    }
  };
}
