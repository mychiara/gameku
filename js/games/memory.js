// 4. Memory Game
const MEMORY_THEMES = [
  ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"], // Hewan 1
  ["🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧"], // Hewan 2
  ["🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓"], // Buah 1
  ["🫐", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝"], // Buah 2
  ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑"], // Kendaraan 1
  ["🚒", "🚐", "🛻", "🚚", "🚛", "🚜", "🛵", "🏍️"], // Kendaraan 2
  ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱"], // Olahraga
  ["🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁"], // Manisan
  ["🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥗"], // Makanan
  ["🎒", "🎓", "🎖️", "🎗️", "🎫", "🎟️", "🎭", "🎨"], // Hobi
  ["🎸", "🎹", "🎺", "🎻", "🥁", "🎷", "🪗", "🪈"], // Musik
  ["🌈", "☀️", "🌙", "⭐", "☁️", "🌧️", "⚡", "❄️"], // Cuaca
  ["🦋", "🐜", "🐝", "🐞", "🦗", "🕷️", "🦂", "🦟"], // Serangga
  ["🐟", "🐬", "🐳", "🐋", "🦈", "🐙", "🐚", "🦀"], // Laut
  ["🌵", "🎄", "🌲", "🌳", "🌴", "🌱", "🌿", "🍂"], // Tanaman
  ["🌍", "🗺️", "🏔️", "🌋", "🏖️", "🏜️", "🏝️", "🏕️"], // Alam
  ["💎", "💍", "👑", "👚", "👕", "👖", "👗", "👜"], // Fashion
  ["🧪", "🔭", "🩺", "🗝️", "🧬", "⚙️", "⚖️", "🧭"], // Sains
  ["🏠", "🏢", "🏫", "🏪", "🏭", "🏰", "🗿", "🎡"], // Bangunan
  ["🎠", "🎢", "⛲", "🏮", "🎐", "🎑", "🎍", "🎎"], // Dekor
];

function renderMemoryGame() {
  // Pick one of the 20+ themes randomly
  const themeIdx = Math.floor(Math.random() * MEMORY_THEMES.length);
  const emojis = MEMORY_THEMES[themeIdx];

  let cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

  currentState.extra.flipped = [];
  currentState.extra.matched = [];

  const html = `
        <h3>Cari Pasangan yang Sama!</h3>
        <p style="margin-bottom: 10px; color: #666;">Tema: <b>Edisi Spesial #${themeIdx + 1}</b></p>
        <div class="memory-grid">
            ${cards
              .map(
                (emoji, idx) => `
                <div class="memory-card" id="card-${idx}" onclick="flipCard(${idx}, '${emoji}')">
                    <div class="card-front">?</div>
                    <div class="card-back">${emoji}</div>
                </div>
            `,
              )
              .join("")}
        </div>
        <button class="btn-choice" style="margin-top:20px; background: #ddd;" onclick="renderMemoryGame()">Ganti Tema</button>
    `;
  updateContainer(html);
}

function flipCard(idx, emoji) {
  if (currentState.extra.flipped.length === 2) return;
  if (currentState.extra.matched.includes(idx)) return;
  if (currentState.extra.flipped.some((c) => c.idx === idx)) return;

  const el = document.getElementById(`card-${idx}`);
  el.classList.add("flipped");

  currentState.extra.flipped.push({ idx, emoji });

  if (currentState.extra.flipped.length === 2) {
    setTimeout(checkMemoryMatch, 1000);
  }
}

function checkMemoryMatch() {
  const [c1, c2] = currentState.extra.flipped;
  if (c1.emoji === c2.emoji) {
    currentState.extra.matched.push(c1.idx, c2.idx);
    currentState.score += 20;
    updateScore();
    if (currentState.extra.matched.length === 16) {
      showSuccess(() => renderMemoryGame());
    }
  } else {
    document.getElementById(`card-${c1.idx}`).classList.remove("flipped");
    document.getElementById(`card-${c2.idx}`).classList.remove("flipped");
  }
  currentState.extra.flipped = [];
}
