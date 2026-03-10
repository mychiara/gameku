function renderNumberSortGame() {
  // Generate random order problem: 3-5 numbers
  const count = Math.floor(Math.random() * 3) + 3; // 3 to 5 objects
  const isAscending = Math.random() > 0.5;
  const instructionTxt = isAscending
    ? "terkecil hingga terbesar"
    : "terbesar hingga terkecil";

  let numbers = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * 20) + 1; // Numbers 1-20
    if (!numbers.includes(num)) numbers.push(num);
  }

  // Scramble them for display
  const scrambled = [...numbers].sort(() => Math.random() - 0.5);

  // Expected answer
  const expectedArray = [...numbers].sort((a, b) =>
    isAscending ? a - b : b - a,
  );

  currentState.extra.nsExpected = expectedArray;
  currentState.extra.nsCurrent = [];
  currentState.extra.nsAvailable = scrambled;
  currentState.extra.nsIsAscending = isAscending;

  updateNumberSortView();
  speak(`Mari kita urutkan angka-angka ini dari yang ${instructionTxt}`);
}

function updateNumberSortView() {
  const expected = currentState.extra.nsExpected;
  const current = currentState.extra.nsCurrent;
  const available = currentState.extra.nsAvailable;
  const isAsc = currentState.extra.nsIsAscending;
  const dirTxt = isAsc
    ? "Menaik (Kecil → Besar) 📈"
    : "Menurun (Besar → Kecil) 📉";

  // Auto check logic
  if (current.length === expected.length) {
    if (current.join(",") === expected.join(",")) {
      currentState.score += 25;
      showSuccess(() => renderNumberSortGame());
      return;
    } else {
      alert("Urutannya belum pas sayang! Yuk coba perhatikan lagi angkanya.");
      let copy = [...expected].sort(() => Math.random() - 0.5);
      currentState.extra.nsCurrent = [];
      currentState.extra.nsAvailable = copy;
      updateNumberSortView();
      return;
    }
  }

  const html = `
        <h3>Urutkan Angka 📊</h3>
        ${addVoiceBtn(`Urutkan dari yang ${isAsc ? "terkecil" : "terbesar"}`)}
        
        <p style="font-size: 1.3rem; margin: 20px 0; color: var(--primary); font-weight: bold; background: #fff5f5; padding: 15px; border-radius: 12px; border: 2px dashed var(--primary);">
            Misi: ${dirTxt}
        </p>

        <div style="margin: 30px 0; min-height: 80px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            ${Array.from({ length: expected.length })
              .map(
                (_, i) => `
                <div style="width: 60px; height: 60px; background: ${current[i] ? "var(--secondary)" : "#eee"}; color: ${current[i] ? "#fff" : "transparent"}; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; text-shadow: 2px 2px 0 rgba(0,0,0,0.1); border: 4px solid ${current[i] ? "#11a89d" : "#ddd"}; transition: all 0.3s;">
                    ${current[i] || "?"}
                </div>
            `,
              )
              .join("")}
        </div>

        <p style="font-size: 1.1rem; color: #777; margin-bottom: 10px;">Tekan tombol angkanya:</p>
        
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            ${available
              .map(
                (num, idx) => `
                <button class="btn-choice" style="font-size: 2rem; width: 70px; height: 70px; padding: 0; background: white; border-color: var(--accent); color: #333;" onclick="selectNumberSort(${num}, ${idx})">
                    ${num}
                </button>
            `,
              )
              .join("")}
        </div>
        
        ${current.length > 0 ? `<button onclick="resetNumberSort()" style="margin-top: 30px; background: transparent; border: none; color: red; text-decoration: underline; cursor: pointer; font-size: 1.1rem; font-weight: bold;">Ulangi Urutan 🔄</button>` : ""}
    `;
  updateContainer(html);
}

function selectNumberSort(num, idx) {
  currentState.extra.nsCurrent.push(num);
  currentState.extra.nsAvailable.splice(idx, 1);
  updateNumberSortView();
}

function resetNumberSort() {
  let copy = [...currentState.extra.nsExpected].sort(() => Math.random() - 0.5);
  currentState.extra.nsCurrent = [];
  currentState.extra.nsAvailable = copy;
  updateNumberSortView();
}
