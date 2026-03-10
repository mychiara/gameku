function renderPhysicsStackGame() {
  let score = 0;
  let isGameOver = false;
  let items = [];
  const gravity = 0.5;
  const canvasWidth = 320;
  const canvasHeight = 400;

  // Game state
  let currentObject = null;
  let stackedObjects = [];

  const html = `
        <h3 style="color: var(--primary)">Menumpuk Menara 🏗️</h3>
        <p>Ketuk layar untuk menjatuhkan benda!</p>
        <div id="physics-canvas" style="width: ${canvasWidth}px; height: ${canvasHeight}px; background: #87CEEB; margin: 0 auto; position: relative; overflow: hidden; border: 5px solid #fff; border-radius: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
            <div id="ground" style="position: absolute; bottom: 0; width: 100%; height: 20px; background: #4CAF50;"></div>
            <div id="objects-container"></div>
        </div>
        <div style="text-align:center; margin-top: 15px;">
            <button class="btn-choice" style="background: var(--secondary); color: white;" onclick="resetPhysics()">Mulai Ulang 🔄</button>
        </div>
    `;
  updateContainer(html);
  speak("Ayo susun menara yang tinggi! Ketuk untuk menjatuhkan kotaknya.");

  const container = document.getElementById("physics-canvas");
  const objectsGroup = document.getElementById("objects-container");

  function createNewObject() {
    if (isGameOver) return;

    const size = 50;
    const emojis = ["📦", "🎁", "🧱", "🏮", "🧊", "🪵"];
    const emj = emojis[Math.floor(Math.random() * emojis.length)];

    currentObject = {
      element: document.createElement("div"),
      x: 0,
      y: 20,
      w: size,
      h: size,
      vx: 3 + stackedObjects.length * 0.2, // increase speed with levels
      vy: 0,
      isDropped: false,
      rotation: 0,
    };

    currentObject.element.style.position = "absolute";
    currentObject.element.style.width = size + "px";
    currentObject.element.style.height = size + "px";
    currentObject.element.style.fontSize = "35px";
    currentObject.element.style.textAlign = "center";
    currentObject.element.style.lineHeight = size + "px";
    currentObject.element.innerHTML = emj;
    currentObject.element.style.left = "0px";
    currentObject.element.style.top = "20px";
    currentObject.element.style.zIndex = "10";

    objectsGroup.appendChild(currentObject.element);
  }

  container.onclick = () => {
    if (currentObject && !currentObject.isDropped) {
      currentObject.isDropped = true;
    }
  };

  function gameLoop() {
    if (isGameOver) return;

    if (currentObject) {
      if (!currentObject.isDropped) {
        // Moving back and forth
        currentObject.x += currentObject.vx;
        if (
          currentObject.x > canvasWidth - currentObject.w ||
          currentObject.x < 0
        ) {
          currentObject.vx *= -1;
        }
        currentObject.element.style.left = currentObject.x + "px";
      } else {
        // Falling
        currentObject.vy += gravity;
        currentObject.y += currentObject.vy;

        // Collision check
        let targetY = canvasHeight - 20 - currentObject.h; // Ground default

        // Check collision with the stack
        if (stackedObjects.length > 0) {
          const lastObj = stackedObjects[stackedObjects.length - 1];
          // Very simple AABB collision for kids game
          if (
            currentObject.x + currentObject.w > lastObj.x &&
            currentObject.x < lastObj.x + lastObj.w &&
            currentObject.y + currentObject.h >= lastObj.y
          ) {
            // Hit detection
            const offset = Math.abs(
              currentObject.x +
                currentObject.w / 2 -
                (lastObj.x + lastObj.w / 2),
            );
            if (offset < 35) {
              // Pretty centered
              targetY = lastObj.y - currentObject.h;
              landObject(targetY);
            } else {
              // Fall off
              gameOver();
            }
          }
        } else if (currentObject.y >= targetY) {
          landObject(targetY);
        }

        currentObject.element.style.top = currentObject.y + "px";

        // Missed the screen
        if (currentObject.y > canvasHeight) {
          gameOver();
        }
      }
    }

    requestAnimationFrame(gameLoop);
  }

  function landObject(y) {
    currentObject.y = y;
    currentObject.element.style.top = y + "px";
    currentObject.isDropped = false;
    stackedObjects.push(currentObject);
    score += 10;
    currentState.score = score;
    updateScore();
    createNewObject();

    // Move container down if too high? Simplification for now: just score
    if (stackedObjects.length % 5 === 0) {
      speak("Luar biasa! Lanjutkan!");
    }
  }

  function gameOver() {
    isGameOver = true;
    speak("Yah, menaranya jatuh! Skor kamu adalah " + score);
    showSuccess(() => renderPhysicsStackGame());
  }

  window.resetPhysics = () => {
    isGameOver = true;
    renderPhysicsStackGame();
  };

  createNewObject();
  gameLoop();

  // Cleanup for navigation
  currentState.extra.cleanup = () => {
    isGameOver = true;
  };
}
