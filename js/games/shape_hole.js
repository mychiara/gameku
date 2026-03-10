function renderShapeHoleGame() {
  let html = `
        <h3>Cocokkan Bentuk 🧩</h3>
        <p style="text-align: center; margin-bottom: 20px;">Masukkan Bentuk Sesuai Warnanya!</p>
        <div id="sh-area" style="position: relative; width: 100%; height: 350px; background: #e8eaf6; border-radius: 10px; border: 3px solid #3f51b5; margin: 0 auto; user-select: none;">
            
            <!-- Holes Array -->
            <div style="position: absolute; bottom: 20px; left: 0; width: 100%; display: flex; justify-content: space-around;">
               <div id="hole-0" class="sh-hole" style="width: 80px; height: 80px; background: #ccc; border-radius: 50%; box-shadow: inset 0 5px 10px rgba(0,0,0,0.3); border: 2px solid #aaa;" data-id="circle"></div>
               <div id="hole-1" class="sh-hole" style="width: 80px; height: 80px; background: #ccc;                 box-shadow: inset 0 5px 10px rgba(0,0,0,0.3); border: 2px solid #aaa;" data-id="square"></div>
               <div id="hole-2" class="sh-hole" style="width: 0; height: 0; border-left: 45px solid transparent; border-right: 45px solid transparent; border-bottom: 80px solid #ccc; filter: drop-shadow(0 -5px 5px rgba(0,0,0,0.2));" data-id="triangle"></div>
            </div>
            
        </div>
    `;
  updateContainer(html);
  speak(
    "Tarik bentuk-bentuk balok ini ke dalam lubang cetakan yang sesuai dengan bentuknya!",
  );

  const area = document.getElementById("sh-area");

  // Creating shapes that user can drag
  const shapesConfig = [
    {
      id: "circle",
      color: "#f44336",
      borderRadius: "50%",
      clipHoleHack: false,
    },
    { id: "square", color: "#4caf50", borderRadius: "0", clipHoleHack: false },
    { id: "triangle", color: "#ffeb3b", borderRadius: "0", clipHoleHack: true }, // clip path triangle
  ];

  let remaining = shapesConfig.length;

  shapesConfig.forEach((cfg) => {
    const d = document.createElement("div");
    d.dataset.id = cfg.id;

    if (cfg.clipHoleHack) {
      d.style.width = "0";
      d.style.height = "0";
      d.style.borderLeft = "40px solid transparent";
      d.style.borderRight = "40px solid transparent";
      d.style.borderBottom = "70px solid " + cfg.color;
    } else {
      d.style.width = "70px";
      d.style.height = "70px";
      d.style.background = cfg.color;
      d.style.borderRadius = cfg.borderRadius;
    }

    d.style.position = "absolute";
    d.style.left = `${Math.random() * 60 + 10}%`;
    d.style.top = `${Math.random() * 20 + 10}%`;
    d.style.cursor = "grab";
    d.style.boxShadow = "0 5px 10px rgba(0,0,0,0.2)";

    // Triangle border trick causes rendering bounds issues with bounding client rect,
    // we wrap it to make collisions simpler
    const wrapper = document.createElement("div");
    wrapper.style.position = "absolute";
    wrapper.style.left = d.style.left;
    wrapper.style.top = d.style.top;
    wrapper.style.width = "80px";
    wrapper.style.height = "80px";
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";
    wrapper.style.cursor = "grab";
    wrapper.dataset.id = cfg.id;

    d.style.position = "relative";
    d.style.left = "0";
    d.style.top = "0";

    wrapper.appendChild(d);
    area.appendChild(wrapper);

    let active = false;
    let startX, startY;
    let initialLeft, initialTop;

    const startDrag = (e) => {
      e.preventDefault();
      active = true;
      wrapper.style.cursor = "grabbing";
      wrapper.style.zIndex = 1000;
      const pt = getPoint(e);
      startX = pt.x;
      startY = pt.y;
      const rect = wrapper.getBoundingClientRect();
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
      wrapper.style.left = initialLeft + dx + "px";
      wrapper.style.top = initialTop + dy + "px";
    };

    const stopDrag = (e) => {
      if (!active) return;
      active = false;
      wrapper.style.cursor = "grab";
      wrapper.style.zIndex = 1;

      const rect = wrapper.getBoundingClientRect();

      // Find target hole based on config id matching dataset
      const holeBoxes = document.querySelectorAll(
        '.sh-hole, div[data-id="triangle"]',
      ); // triangle CSS makes class trick
      const targetHole = Array.from(holeBoxes).find(
        (h) => h.dataset.id === wrapper.dataset.id,
      );

      if (!targetHole) return;

      const bRect = targetHole.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // Expanded collision boundary for kids
      const padding = 30;

      if (
        cx > bRect.left - padding &&
        cx < bRect.right + padding &&
        cy > bRect.top - padding &&
        cy < bRect.bottom + padding
      ) {
        // Success drop
        wrapper.style.transition = "all 0.3s ease-in";
        wrapper.style.transform = "scale(0.8)";
        wrapper.style.left =
          bRect.left - area.getBoundingClientRect().left + "px";
        wrapper.style.top = bRect.top - area.getBoundingClientRect().top + "px";

        // Snap in place locking it
        wrapper.removeEventListener("mousedown", startDrag);
        wrapper.removeEventListener("touchstart", startDrag);
        wrapper.style.cursor = "default";

        // Paint hole to represent it being filled
        setTimeout(() => {
          remaining--;
          if (remaining <= 0) {
            setTimeout(() => {
              currentState.score += 25;
              showSuccess(() => renderShapeHoleGame());
            }, 500);
          }
        }, 300);
      }
    };

    wrapper.addEventListener("mousedown", startDrag);
    wrapper.addEventListener("touchstart", startDrag, { passive: false });

    document.addEventListener("mousemove", moveDrag);
    document.addEventListener("touchmove", moveDrag, { passive: false });

    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);

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
