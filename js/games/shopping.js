function renderShoppingGame() {
  const data =
    CONFIG.shopping[Math.floor(Math.random() * CONFIG.shopping.length)];

  // Create an array to act as our shopping list requirement to be filled out
  currentState.extra.shoppingCart = [];
  currentState.extra.shoppingTarget = data;

  // Flatten options so the user has many items to choose from
  // We'll pick some random distractors plus the correct items
  let choices = [...data.items.map((i) => i.emoji)];
  while (choices.length < 8) {
    // Present 8 item buttons
    const randDB =
      CONFIG.shopping[Math.floor(Math.random() * CONFIG.shopping.length)];
    const randItem =
      randDB.items[Math.floor(Math.random() * randDB.items.length)].emoji;
    if (!choices.includes(randItem)) choices.push(randItem);
  }
  choices.sort(() => Math.random() - 0.5);

  updateShoppingView(choices);
  speak(`Minta tolong ya sayang, ${data.order_text}`);
}

function updateShoppingView(choices) {
  const data = currentState.extra.shoppingTarget;
  const cart = currentState.extra.shoppingCart;

  // Check if everything is collected
  let isComplete = true;
  for (const item of data.items) {
    const countInCart = cart.filter((c) => c === item.emoji).length;
    if (countInCart !== item.count) {
      isComplete = false;
    }
  }
  // Also check if they picked too much or wrong items
  let hasWrongItem = false;
  for (const itemInCart of cart) {
    const requiredItem = data.items.find((i) => i.emoji === itemInCart);
    if (!requiredItem) hasWrongItem = true;
    else {
      const countInCart = cart.filter((c) => c === itemInCart).length;
      if (countInCart > requiredItem.count) hasWrongItem = true;
    }
  }

  if (isComplete && !hasWrongItem) {
    currentState.score += 25;
    showSuccess(() => renderShoppingGame());
    return;
  }

  const html = `
        <h3>Toko Kecil 🛒</h3>
        ${addVoiceBtn(`Ibu mau pesan: ${data.order_text}.`)}
        
        <div style="background: #fff0f3; border: 3px solid #ffb3c6; padding: 15px; border-radius: 15px; font-weight: bold; font-size: 1.3rem; color: #d00000; margin: 20px 0;">
            📝 Daftar Belanja: ${data.order_text}
        </div>

        <div style="margin: 20px 0; background: var(--card-bg); border-radius: 15px; padding: 15px; border: 2px dashed #ccc; min-height: 120px;">
            <p style="font-size: 1.1rem; color: #888; font-weight: bold; margin-bottom: 10px;">🧺 Keranjang Belanja Kita:</p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; font-size: 3rem;">
                ${cart.length === 0 ? '<span style="font-size: 1.5rem; color: #aaa;">Masih kosong...</span>' : cart.join(" ")}
            </div>
            ${hasWrongItem ? '<p style="color: red; margin-top: 10px; font-weight: bold;">Ups! Ada barang yang salah masuk, keranjangnya kepenuhan tuh! ❌</p>' : ""}
        </div>

        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 20px;">
            ${choices
              .map(
                (c) => `
                <button class="btn-choice" style="font-size: 2.5rem; padding: 10px;" onclick="addToCart('${c}', '${encodeURIComponent(JSON.stringify(choices))}')">
                    ${c}
                </button>
            `,
              )
              .join("")}
        </div>
        
        ${cart.length > 0 ? `<button onclick="emptyCart('${encodeURIComponent(JSON.stringify(choices))}')" style="margin-top: 20px; background: transparent; border: none; color: red; text-decoration: underline; cursor: pointer; font-size: 1.1rem; font-weight: bold;">Kosongkan Keranjang 🗑️</button>` : ""}
    `;
  updateContainer(html);
}

function addToCart(emoji, choicesStr) {
  currentState.extra.shoppingCart.push(emoji);
  updateShoppingView(JSON.parse(decodeURIComponent(choicesStr)));
}

function emptyCart(choicesStr) {
  currentState.extra.shoppingCart = [];
  updateShoppingView(JSON.parse(decodeURIComponent(choicesStr)));
}
