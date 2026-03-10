function renderDragFruitGame() {
  let html = `
        <h3>Drag Buah 🧺</h3>
        <p style="text-align: center; margin-bottom: 20px;">Masukkan Semua Buah ke Keranjang!</p>
        <div id="df-area" style="position: relative; width: 100%; height: 350px; background: #fffde7; border-radius: 10px; border: 3px solid #ffca28; margin: 0 auto; user-select: none;">
            <div id="df-basket" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); width: 120px; height: 80px; background: #8d6e63; border-radius: 10px 10px 40px 40px; border: 4px dashed #5d4037; display: flex; align-items: center; justify-content: center; font-size: 3rem;">🧺</div>
        </div>
    `;
  updateContainer(html);
  speak("Geser dan masukkan buah-buahan ini ke dalam keranjangnya!");

  const area = document.getElementById("df-area");
  const basket = document.getElementById("df-basket");

  const fruitsList = ["🍎", "🍌", "🍇", "🍓", "🍍"];
  let remaining = fruitsList.length;

  fruitsList.forEach((f, i) => {
    const d = document.createElement("div");
    d.innerHTML = f;
    d.style.position = "absolute";
    d.style.fontSize = "3.5rem";
    d.style.left = `${Math.random() * 60 + 10}%`;
    d.style.top = `${Math.random() * 30 + 10}%`;
    d.style.cursor = "grab";
    d.style.transition = "transform 0.1s";
    d.dataset.name = f;
    area.appendChild(d);

    let active = false;
    let startX, startY;
    let initialLeft, initialTop;

    const startDrag = (e) => {
      e.preventDefault();
      active = true;
      d.style.cursor = "grabbing";
      d.style.zIndex = 1000;
      const pt = getPoint(e);
      startX = pt.x;
      startY = pt.y;
      // Parse percentage to px for dragging smoothly, or just use bounding rect
      const rect = d.getBoundingClientRect();
      const areaRect = area.getBoundingClientRect();
      initialLeft = rect.left - areaRect.left;
      initialTop = rect.top - areaRect.top;
    };

    const moveDrag = (e) => {
      if (!active) return;
      e.preventDefault();
      const pt = getPoint(e);
      const dx = pt.x - startX;
      const dy = pt.y - startY;
      d.style.left = initialLeft + dx + "px";
      d.style.top = initialTop + dy + "px";
    };

    const stopDrag = (e) => {
      if (!active) return;
      active = false;
      d.style.cursor = "grab";
      d.style.zIndex = 1;

      const rect = d.getBoundingClientRect();
      const bRect = basket.getBoundingClientRect();

      // Check if center of fruit is inside basket
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      if (
        cx > bRect.left &&
        cx < bRect.right &&
        cy > bRect.top &&
        cy < bRect.bottom
      ) {
        // Success drop
        d.style.transition = "all 0.3s ease-in";
        d.style.transform = "scale(0) rotate(180deg)";
        d.style.top = bRect.top - area.getBoundingClientRect().top + 20 + "px";

        setTimeout(() => {
          d.remove();
          remaining--;
          if (remaining <= 0) {
            basket.style.transform = "translateX(-50%) scale(1.2)";
            setTimeout(() => {
              currentState.score += 20;
              showSuccess(() => renderDragFruitGame());
            }, 500);
          }
        }, 300);
      }
    };

    d.addEventListener("mousedown", startDrag);
    d.addEventListener("touchstart", startDrag, { passive: false });

    document.addEventListener("mousemove", moveDrag);
    document.addEventListener("touchmove", moveDrag, { passive: false });

    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);

    // cleanup listeners heavily attached to document on exit
    currentState.extra.cleanup = () => {
      document.removeEventListener("mousemove", moveDrag);
      document.removeEventListener("touchmove", moveDrag);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchend", stopDrag);
    };
  });

  function getPoint(e) {
    if (e.touches && e.touches.length) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if (e.changedTouches && e.changedTouches.length) {
      return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  }
}
