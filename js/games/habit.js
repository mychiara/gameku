// 7. Habit Game
function renderHabitGame() {
  const habit = CONFIG.habits[Math.floor(Math.random() * CONFIG.habits.length)];

  const html = `
        <h3 style="color: ${habit.correct ? "var(--success)" : "var(--primary)"}">
            ${habit.correct ? "Kebiasaan Baik" : "Kebiasaan Buruk"}
        </h3>
        <div style="font-size: 8rem; margin: 20px">${habit.emoji}</div>
        <p style="font-size: 1.5rem; margin-bottom: 20px">Apakah <b>${habit.task}</b> itu baik?</p>
        <div class="choices" style="grid-template-columns: 1fr 1fr">
            <button class="btn-choice" onclick="checkHabit(true, ${habit.correct})">Ya, Bagus! 👍</button>
            <button class="btn-choice" onclick="checkHabit(false, ${habit.correct})">Tidak 👎</button>
        </div>
    `;
  updateContainer(html);
}

function checkHabit(selected, correct) {
  if (selected === correct) {
    currentState.score += 10;
    showSuccess(() => renderHabitGame());
  } else {
    alert("Yah, kurang tepat. Ayo coba lagi! 💪");
  }
}
