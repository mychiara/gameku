function renderBlockStackGame() {
    let html = `
        <h3>Susun Balok 🧱</h3>
        <p style="text-align: center; margin-bottom: 20px;">Tumpuk 5 Balok Agar Tidak Jatuh!</p>
        <div id="bs-area" style="position: relative; width: 300px; height: 350px; background: #fdf5e6; border-radius: 10px; border: 3px solid #ffbc00; overflow: hidden; margin: 0 auto;">
            <div id="bs-base" style="position: absolute; bottom: 0; left: 0; right: 0; height: 20px; background: #8d6e63;"></div>
        </div>
    `;
    updateContainer(html);
    speak("Ketuk layar tepat saat baloknya berada di atas tumpukan agar ia terjatuh dengan pas!");

    const area = document.getElementById('bs-area');
    let stackIndex = 0;
    let playing = true;
    let currentBlock = null;
    let pos = 0;
    let dir = 3;
    let animationId;

    function createMovingBlock() {
        if (!playing) return;
        currentBlock = document.createElement('div');
        currentBlock.style.width = '80px';
        currentBlock.style.height = '40px';
        currentBlock.style.background = \`hsl(\${Math.random() * 360}, 70%, 50%)\`;
        currentBlock.style.border = '2px solid rgba(0,0,0,0.2)';
        currentBlock.style.position = 'absolute';
        currentBlock.style.top = '20px'; // Spawns at top
        currentBlock.style.left = '0px';
        area.appendChild(currentBlock);
        
        pos = 0;
        dir = 3 + (stackIndex * 0.5); // Speeds up slightly
        animateBlock();
    }

    function animateBlock() {
        if (!playing) return;
        pos += dir;
        if (pos > area.offsetWidth - 80 || pos < 0) dir *= -1;
        currentBlock.style.left = pos + 'px';
        animationId = requestAnimationFrame(animateBlock);
    }

    area.onmousedown = area.ontouchstart = (e) => {
        if (!playing || !currentBlock) return;
        e.preventDefault(); // prevent double hit
        cancelAnimationFrame(animationId);
        
        // "Drop" the block
        currentBlock.style.transition = 'top 0.3s ease-in';
        const targetTop = area.offsetHeight - 20 - ((stackIndex + 1) * 40);
        currentBlock.style.top = targetTop + 'px';

        setTimeout(() => {
            if (!playing) return;
            // Check alignment bounds... roughly center 150px
            if (pos > 50 && pos < 170) {
                stackIndex++;
                currentBlock = null;
                if (stackIndex >= 5) {
                    playing = false;
                    currentState.score += 30;
                    showSuccess(() => renderBlockStackGame());
                } else {
                    createMovingBlock();
                }
            } else {
                // Fail
                currentBlock.style.transform = 'rotate(20deg)';
                currentBlock.style.top = area.offsetHeight + 'px'; // falls off
                alert("Oh no, baloknya meleset dan jatuh! Susun hati-hati ya. 🧱");
                playing = false;
                setTimeout(renderBlockStackGame, 1000); // restart
            }
        }, 350);
    };

    setTimeout(createMovingBlock, 500);

    currentState.extra.cleanup = () => {
        playing = false;
        cancelAnimationFrame(animationId);
    };
}
