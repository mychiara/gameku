function renderDrawLineGame() {
  let html = `
        <h3>Tarik Garis 🖍️</h3>
        <p style="text-align: center; margin-bottom: 20px;">Hubungkan Bayangan dan Benda!</p>
        <div id="dl-area" style="position: relative; width: 100%; max-width: 400px; height: 350px; background: #fff5f5; border-radius: 10px; border: 3px solid #ffbc00; overflow: hidden; margin: 0 auto;">
            <svg id="dl-svg" style="position: absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;"></svg>
            <div id="dl-left" style="position: absolute; left: 10px; top: 10%; bottom: 10%; display: flex; flex-direction: column; justify-content: space-around;"></div>
            <div id="dl-right" style="position: absolute; right: 10px; top: 10%; bottom: 10%; display: flex; flex-direction: column; justify-content: space-around;"></div>
        </div>
    `;
  updateContainer(html);
  speak(
    "Tarik garis dari bayangan di kiri ke benda yang sama warnanya di kanan!",
  );

  const area = document.getElementById("dl-area");
  const svg = document.getElementById("dl-svg");
  const leftCol = document.getElementById("dl-left");
  const rightCol = document.getElementById("dl-right");

  const items = ["🍎", "🚗", "🧸"];
  let leftItems = [...items].sort(() => Math.random() - 0.5);
  let rightItems = [...items].sort(() => Math.random() - 0.5);

  let drawingLine = null;
  let startEl = null;
  let matchCount = 0;

  leftItems.forEach((item, i) => {
    const d = document.createElement("div");
    d.innerHTML = item;
    d.style.fontSize = "3rem";
    d.style.filter = "brightness(0)"; // Shadow version
    d.style.cursor = "grab";
    d.dataset.type = item;
    leftCol.appendChild(d);

    d.onmousedown = d.ontouchstart = (e) => {
      e.preventDefault();
      if (d.style.opacity === "0.5") return; // already got
      startDrawing(e, d);
    };
  });

  rightItems.forEach((item, i) => {
    const d = document.createElement("div");
    d.innerHTML = item;
    d.style.fontSize = "3rem";
    d.dataset.type = item;
    rightCol.appendChild(d);

    d.onmouseup = d.ontouchend = (e) => {
      if (drawingLine && startEl.dataset.type === d.dataset.type) {
        // Success
        startEl.style.opacity = "0.5";
        d.style.opacity = "0.5";
        drawingLine.setAttribute("stroke", "#4caf50");
        drawingLine = null;
        startEl = null;
        matchCount++;
        if (matchCount >= items.length) {
          setTimeout(() => {
            currentState.score += 20;
            showSuccess(() => renderDrawLineGame());
          }, 500);
        }
      } else if (drawingLine) {
        // Wrong
        drawingLine.remove();
        drawingLine = null;
        startEl = null;
      }
    };
  });

  function startDrawing(e, el) {
    startEl = el;
    const pt = getCursorPt(e);
    drawingLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line",
    );
    drawingLine.setAttribute("x1", pt.x);
    drawingLine.setAttribute("y1", pt.y);
    drawingLine.setAttribute("x2", pt.x);
    drawingLine.setAttribute("y2", pt.y);
    drawingLine.setAttribute("stroke", "#2196f3");
    drawingLine.setAttribute("stroke-width", "4");
    svg.appendChild(drawingLine);
  }

  area.onmousemove = area.ontouchmove = (e) => {
    if (!drawingLine) return;
    const pt = getCursorPt(e);
    drawingLine.setAttribute("x2", pt.x);
    drawingLine.setAttribute("y2", pt.y);
  };

  area.onmouseup =
    area.ontouchend =
    area.onmouseleave =
      (e) => {
        if (drawingLine) {
          // Check if we dropped on right item handled by that item's mouseup.
          // If we are here, we missed or failed.
          setTimeout(() => {
            if (drawingLine) drawingLine.remove();
            drawingLine = null;
          }, 50);
        }
      };

  function getCursorPt(e) {
    const rect = area.getBoundingClientRect();
    let x, y;
    if (e.touches && e.touches.length) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      // handle touchend
      x =
        (e.clientX || (e.changedTouches && e.changedTouches[0].clientX)) -
        rect.left;
      y =
        (e.clientY || (e.changedTouches && e.changedTouches[0].clientY)) -
        rect.top;
    }
    return { x, y };
  }
}
