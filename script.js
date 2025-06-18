const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.innerHTML = "Yayy! ❤️ I Love You Forever!";
  document.body.style.background = "radial-gradient(circle, pink, deeppink)";
  confettiRain();
});

noBtn.addEventListener("mouseover", () => {
  const i = Math.floor(Math.random() * 300);
  const j = Math.floor(Math.random() * 300);
  noBtn.style.position = "absolute";
  noBtn.style.top = i + "px";
  noBtn.style.left = j + "px";
});

function confettiRain() {
  const end = Date.now() + 2 * 1000;
  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
