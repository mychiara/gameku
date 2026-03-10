function renderFindObjectGame() {
  let html = `
        <h3>Cari Objek 🔎</h3>
        <p style="text-align: center; margin-bottom: 20px;">Temukan 3 Mainan Tersembunyi!</p>
        <div id="fo-area" style="position: relative; width: 100%; height: 350px; background: #e0f2f1; border-radius: 10px; border: 3px solid #009688; margin: 0 auto; overflow: hidden;">
            <!-- Dummy clutter objects -->
            <div style="font-size: 5rem; position: absolute; top: 10%; left: 5%;">🌳</div>
            <div style="font-size: 4rem; position: absolute; bottom: 10%; right: 10%;">🏡</div>
            <div style="font-size: 6rem; position: absolute; top: 40%; left: 60%;">☁️</div>
            <div style="font-size: 4rem; position: absolute; bottom: 50%; left: 20%;">🌻</div>
            <div style="font-size: 5rem; position: absolute; top: 80%; left: 40%;">🍄</div>
            <div style="font-size: 3rem; position: absolute; top: 20%; right: 30%;">🐦</div>
        </div>
    `;
  updateContainer(html);
  speak("Ayo kita temukan 3 mainan tersembunyi di dalam taman ini!");

  const area = document.getElementById("fo-area");

  // The items to find
  const hiddenItems = ["🧸", "🚗", "⚽"];
  let remaining = hiddenItems.length;

  hiddenItems.forEach((item) => {
    const d = document.createElement("div");
    d.innerHTML = item;
    d.style.position = "absolute";

    // Slightly hide them behind other emojis visually (z-index) or partially clipping
    d.style.zIndex = 0;

    // Random placement avoiding borders directly
    let nx = Math.random() * 80 + 10;
    let ny = Math.random() * 80 + 10;

    d.style.left = nx + "%";
    d.style.top = ny + "%";
    d.style.fontSize = Math.random() > 0.5 ? "2.5rem" : "3.5rem"; // Varying size
    d.style.cursor = "pointer";
    d.style.transition =
      "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    // Rotate them so they blend better and look organic
    const rotationVal = Math.random() * 90 - 45;
    d.style.transform = `rotate(${rotationVal}deg)`;

    d.onmousedown = d.ontouchstart = (e) => {
      e.preventDefault();
      if (d.dataset.found === "yes") return;

      d.dataset.found = "yes";
      // Pop out animation
      d.style.zIndex = 100;
      d.style.transform = "scale(2) rotate(0deg)";

      // Sparkle
      speak("Ketemu!");

      setTimeout(() => {
        d.style.opacity = "0";
        d.style.transform = "scale(0)";
      }, 1000);

      remaining--;
      if (remaining <= 0) {
        setTimeout(() => {
          currentState.score += 25;
          showSuccess(() => renderFindObjectGame());
        }, 1500);
      }
    };

    area.appendChild(d);
  });
}
