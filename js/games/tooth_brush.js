function renderToothBrushGame() {
  let germs = 12;
  let brushed = new Set();

  let html = `
        <h3 style="color: var(--primary)">Gosok Gigi Kuman 🪥</h3>
        <p>Ayo bersihkan noda kotoran di gigi agar putih berkilau!</p>
        
    <div id="mouth-box" style="position: relative; width: 350px; height: 280px; margin: 0 auto; background: #ffcdd2; border-radius: 40px; border: 12px solid #ef9a9a; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 40px; overflow: hidden;">
        <div id="teeth-upper" style="display: grid; grid-template-columns: repeat(6, 45px); gap: 5px; transform: rotate(180deg);">
            ${Array.from({ length: 9 })
              .map(
                (_, i) => `
                <div class="tooth" data-idx="${i}" 
                     style="width: 45px; height: 50px; background: white; border-radius: 5px 5px 15px 15px; position: relative;"
                     onmouseover="brushTooth(${i})">
                    <div class="germ" style="position: absolute; top: 10%; left: 10%; width: 80%; height: 80%; background: #4e342e; border-radius: 50%; opacity: 0.8; transition: 0.5s;"></div>
                </div>
            `,
              )
              .join("")}
        </div>
        <div id="teeth-lower" style="display: grid; grid-template-columns: repeat(6, 45px); gap: 5px;">
            ${Array.from({ length: 9 })
              .map(
                (_, i) => `
                <div class="tooth" data-idx="${i + 9}" 
                     style="width: 45px; height: 50px; background: white; border-radius: 5px 5px 15px 15px; position: relative;"
                     onmouseover="brushTooth(${i + 9})">
                    <div class="germ" style="position: absolute; top: 10%; left: 10%; width: 80%; height: 80%; background: #4e342e; border-radius: 50%; opacity: 0.8; transition: 0.5s;"></div>
                </div>
            `,
              )
              .join("")}
        </div>
        <div id="toothbrush-cursor" style="position: absolute; pointer-events: none; font-size: 3rem; transform: translate(-50%, -50%); transition: 0.1s; z-index: 10;">🪥</div>
    </div>

        <div style="text-align: center; margin-top: 20px;">
            <div id="brush-msg" style="font-weight: bold; color: var(--secondary)">Gigi masih kotor! 🍫</div>
            <button class="btn-choice" style="margin-top: 10px; background: var(--secondary); color: white;" onclick="resetTeeth()">Ulangi 🔄</button>
        </div>
    `;

  updateContainer(html);
  speak(
    "Ih, ada kuman cokelat di gigi! Ayo gosok giginya sampai bersih semua ya.",
  );

  const mouth = document.getElementById("mouth-box");
  const brush = document.getElementById("toothbrush-cursor");

  mouth.onmousemove = (e) => {
    const rect = mouth.getBoundingClientRect();
    brush.style.left = e.clientX - rect.left + "px";
    brush.style.top = e.clientY - rect.top + "px";
  };

  window.brushTooth = (idx) => {
    if (!brushed.has(idx)) {
      brushed.add(idx);
      const tooth = document.querySelector(`.tooth[data-idx="${idx}"] .germ`);
      tooth.style.opacity = "0";
      tooth.style.transform = "scale(0)";

      if (brushed.size === 18) {
        document.getElementById("brush-msg").innerHTML =
          "GIGI SUDAH BERSIH! ✨🦷";
        speak("Wah, giginya sudah putih berkilau! Hebat!");
        setTimeout(() => {
          currentState.score += 20;
          showSuccess(() => renderToothBrushGame());
        }, 1500);
      }
    }
  };

  window.resetTeeth = () => renderToothBrushGame();
}
