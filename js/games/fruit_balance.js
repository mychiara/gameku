function renderFruitBalanceGame() {
  const weights = [
    {
      left: ["🍎", "🍎"],
      rightVal: 2,
      text: "Berapa buah jeruk 🍊 agar timbangan seimbang?",
    },
    {
      left: ["🍉"],
      rightVal: 3,
      text: "Berapa buah apel 🍎 agar seimbang dengan semangka 🍉?",
    },
    {
      left: ["🍍", "🍍"],
      rightVal: 4,
      text: "Berapa buah mangga 🥭 agar seimbang dengan nanas 🍍?",
    },
    {
      left: ["🍌", "🍌", "🍌"],
      rightVal: 3,
      text: "Berapa buah stroberi 🍓 agar seimbang dengan pisang 🍌?",
    },
    {
      left: ["🍇"],
      rightVal: 5,
      text: "Berapa buah ceri 🍒 agar seimbang dengan satu ikat anggur 🍇?",
    },
    {
      left: ["🥥", "🥥"],
      rightVal: 4,
      text: "Berapa buah jeruk 🍊 agar seimbang dengan kelapa 🥥?",
    },
    {
      left: ["🥑"],
      rightVal: 2,
      text: "Berapa buah tomat 🍅 agar seimbang dengan alpukat 🥑?",
    },
  ];

  const task = weights[Math.floor(Math.random() * weights.length)];
  let playerVal = 0;

  let html = `
        <h3 style="color: var(--primary)">Timbangan Buah ⚖️</h3>
        <p style="text-align: center; margin-bottom: 20px;">${task.text}</p>
        
        <div id="balance-scale" style="position: relative; width: 300px; height: 200px; margin: 0 auto; display: flex; align-items: flex-end; justify-content: space-between; border-bottom: 5px solid #795548;">
            <div id="scale-left" style="width: 120px; height: 100px; background: #eee; border-radius: 10px 10px 0 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; font-size: 2.5rem; transition: 0.5s;">
                ${task.left.join("")}
            </div>
            
            <div id="scale-middle" style="width: 10px; height: 150px; background: #795548; position: absolute; left: 145px; bottom: 0;"></div>

            <div id="scale-right" style="width: 120px; height: 100px; background: #eee; border-radius: 10px 10px 0 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; font-size: 2.5rem; transition: 0.5s;">
                <span id="player-fruits"></span>
            </div>
        </div>

        <div style="text-align: center; margin-top: 30px;">
            <div style="font-size: 2rem; margin-bottom: 15px;">
                <button class="btn-choice" style="width: 50px;" onclick="changeBalance(-1)">-</button>
                <span id="balance-count" style="margin: 0 20px;">0</span>
                <button class="btn-choice" style="width: 50px;" onclick="changeBalance(1)">+</button>
            </div>
            <button class="btn-choice" style="background: var(--success); color: white;" onclick="checkBalance()">Cek Timbangan! ✅</button>
        </div>
    `;

  updateContainer(html);
  speak(task.text);

  window.changeBalance = (val) => {
    playerVal = Math.max(0, playerVal + val);
    document.getElementById("balance-count").innerText = playerVal;

    const fruitMap = {
      jeruk: "🍊",
      apel: "🍎",
      mangga: "🥭",
      stroberi: "🍓",
      ceri: "🍒",
      tomat: "🍅",
    };
    let emoji = "🍎";
    for (let key in fruitMap) {
      if (task.text.toLowerCase().includes(key)) {
        emoji = fruitMap[key];
        break;
      }
    }
    document.getElementById("player-fruits").innerText =
      emoji.repeat(playerVal);

    // Visual tilt logic
    const diff = playerVal - task.rightVal;
    const tilt = Math.max(-15, Math.min(15, diff * 5));
    document.getElementById("scale-left").style.transform =
      `translateY(${tilt}px)`;
    document.getElementById("scale-right").style.transform =
      `translateY(${-tilt}px)`;
  };

  window.checkBalance = () => {
    if (playerVal === task.rightVal) {
      currentState.score += 35;
      showSuccess(() => renderFruitBalanceGame());
    } else {
      const hint =
        playerVal < task.rightVal
          ? "Masih enteng sebelah kanan, tambah lagi ya! ⚖️"
          : "Berat sebelah kanan, kurangi ya! ⚖️";
      alert(hint);
      speak(hint);
    }
  };
}
