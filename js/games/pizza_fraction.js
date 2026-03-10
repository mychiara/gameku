function renderPizzaFractionGame() {
  const fractions = [
    {
      name: "Setengah",
      val: 0.5,
      parts: 2,
      take: 1,
      text: "Beri 1/2 pizza ke Monyet! 🐒",
    },
    {
      name: "Seperempat",
      val: 0.25,
      parts: 4,
      take: 1,
      text: "Beri 1/4 pizza ke Kelinci! 🐰",
    },
    {
      name: "Tiga Perempat",
      val: 0.75,
      parts: 4,
      take: 3,
      text: "Beri 3/4 pizza ke Beruang! 🐻",
    },
    {
      name: "Satu Perdua",
      val: 0.5,
      parts: 2,
      take: 1,
      text: "Beri 1/2 pizza ke Gajah! 🐘",
    },
    {
      name: "Satu Perempat",
      val: 0.25,
      parts: 4,
      take: 1,
      text: "Beri 1/4 pizza ke Kucing! 🐱",
    },
    {
      name: "Dua Perempat",
      val: 0.5,
      parts: 4,
      take: 2,
      text: "Beri 2/4 pizza ke Anjing! 🐶",
    },
    {
      name: "Empat Perempat",
      val: 1,
      parts: 4,
      take: 4,
      text: "Beri Satu Pizza Utuh ke Naga! 🐉",
    },
    {
      name: "Dua Perdua",
      val: 1,
      parts: 2,
      take: 2,
      text: "Beri Satu Pizza Utuh ke Jerapah! 🦒",
    },
  ];

  const task = fractions[Math.floor(Math.random() * fractions.length)];
  let selectedParts = [];

  let html = `
        <h3 style="color: var(--primary)">Koki Cilik: Pecah Pecahan 🍕</h3>
        <p style="text-align: center; font-size: 1.2rem; margin-bottom: 20px;">${task.text}</p>
        
        <div id="pizza-container" style="position: relative; width: 250px; height: 250px; margin: 0 auto; border-radius: 50%; overflow: hidden; background: #ddd; border: 5px solid #8d6e63;">
            ${Array.from({ length: task.parts })
              .map((_, i) => {
                const angle = 360 / task.parts;
                const rotate = angle * i;
                const clipPath =
                  task.parts === 2
                    ? `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)`
                    : `polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)`;

                return `
                    <div class="pizza-slice" data-idx="${i}" 
                         style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; 
                                background: url('assets/pizza_texture.png'), #ffa726; background-size: cover;
                                clip-path: ${clipPath}; transform: rotate(${rotate}deg); 
                                cursor: pointer; border: 1px solid #e65100; transition: 0.3s;"
                         onclick="togglePizzaSlice(this, ${i})">
                    </div>
                `;
              })
              .join("")}
        </div>

        <div style="text-align: center; margin-top: 30px;">
            <button class="btn-choice" style="background: var(--success); color: white;" onclick="checkPizzaFraction()">Sajikan Makanan! 🍽️</button>
        </div>
    `;

  updateContainer(html);
  speak(task.text);

  window.togglePizzaSlice = (el, idx) => {
    if (selectedParts.includes(idx)) {
      selectedParts = selectedParts.filter((i) => i !== idx);
      el.style.opacity = "1";
      el.style.transform = el.style.transform.replace(" scale(0.9)", "");
    } else {
      selectedParts.push(idx);
      el.style.opacity = "0.3";
      el.style.transform += " scale(0.9)";
    }
  };

  window.checkPizzaFraction = () => {
    if (selectedParts.length === task.take) {
      currentState.score += 30;
      showSuccess(() => renderPizzaFractionGame());
    } else {
      alert(
        `Waduh, jumlah potongannya salah! Berikan ${task.take} potong ya. 😊`,
      );
      speak(`Berikan ${task.take} potong pizza ya.`);
    }
  };
}
