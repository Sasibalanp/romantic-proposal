window.onload = function () {
  // Try playing the music (some browsers still require click)
  const bgMusic = document.getElementById('bg-music');
  if (bgMusic) {
    bgMusic.play().catch(() => {
      console.log("Autoplay blocked — music will play on button click.");
    });
  }

  typeEffect();
  startTimer();
};

// Also play music when she clicks Yes
function sayYes() {
  document.getElementById('bg-music').play(); // retry playing
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 },
  });

  document.body.innerHTML = `
    <h1 style="margin-top:100px;">She said YES! 💖💍</h1>
    <img src="assets/couple.jpg" style="width:300px;border-radius:20px;" />
    <p>Best day of my life 💞</p>
  `;
}
