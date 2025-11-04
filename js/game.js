const nextBtn = document.getElementById("nextBtn");
const intro = document.getElementById("intro");
const rules = document.getElementById("rules");
const dolphin = document.getElementById("dolphin");
const dolphinSound = document.getElementById("dolphinSound");
const transition = document.getElementById("transition");
const gamePlay = document.getElementById("gamePlay");
const startGameBtn = document.getElementById("startGameBtn");
const backBtn = document.getElementById("backBtn");

const progress = document.getElementById("progress");
const fish = document.getElementById("fish");
const bigFish = document.getElementById("bigFish");
const evolveSound = document.getElementById("evolveSound");
const answerBtns = document.querySelectorAll(".answer-btn");

let level = 0;
const maxLevel = 15;

// Danh sách các giai đoạn cá
const fishStages = [
  "./images/fish1.png", // level 1-6
  "./images/fish2.png", // level 7-10
  "./images/fish3.png", // level 11-15
];

// Tạo overlay cho màn hình tối
const gameOverlay = document.createElement('div');
gameOverlay.className = 'game-overlay';
const wrongText = document.createElement('div');
wrongText.className = 'wrong-text';
wrongText.textContent = 'Bạn đã trả lời sai';
const tryAgainBtn = document.createElement('button');
tryAgainBtn.className = 'try-again-btn';
tryAgainBtn.textContent = 'THỬ LẠI';
gameOverlay.appendChild(wrongText);
gameOverlay.appendChild(tryAgainBtn);
document.body.appendChild(gameOverlay);

// --- NÚT BACK ---
backBtn.addEventListener("click", goBack);

function goBack() {
  // Ẩn overlay nếu đang hiện
  gameOverlay.classList.remove('show');
  
  if (gamePlay.classList.contains("hidden") === false) {
    // Đang ở màn 3 -> quay lại màn 2
    gamePlay.classList.add("hidden");
    rules.classList.remove("hidden");
  } else if (rules.classList.contains("hidden") === false) {
    // Đang ở màn 2 -> quay lại màn 1
    rules.classList.add("hidden");
    intro.classList.remove("hidden");
  } else if (intro.classList.contains("hidden") === false) {
    // Đang ở màn 1 -> về trang chủ 
    window.history.back(); // Quay lại trang trước
  }
}

// --- MÀN 1 → MÀN 2 ---
nextBtn.addEventListener("click", showRules);
intro.addEventListener("click", showRules);

function showRules() {
  intro.classList.add("hidden");
  rules.classList.remove("hidden");

  // Hiện cá heo intro sau 1 giây
  setTimeout(() => {
    dolphin.classList.remove("hidden");
    dolphinSound.play();
  }, 1000);
}

// --- THỂ LỆ GAME → GAME CHÍNH ---
startGameBtn.addEventListener("click", startGame);
rules.addEventListener("click", startGame);

function startGame() {
  rules.classList.add("hidden");
  gamePlay.classList.remove("hidden");
}

// Hàm hiển thị khi trả lời sai
function showWrongAnswer() {
  // Hiện màn hình tối
  gameOverlay.classList.add('show');
}

// Click nút thử lại
tryAgainBtn.addEventListener('click', () => {
  gameOverlay.classList.remove('show');
});

// --- TRÒ CHƠI CHÍNH ---
answerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const correct = btn.getAttribute("data-correct") === "true";
    if (correct) {
      levelUp();
    } else {
      showWrongAnswer();
    }
  });
});

function levelUp() {
  if (level >= maxLevel) return;
  level++;

  // Cập nhật thanh tiến trình
  const progressPercent = (level / maxLevel) * 100;
  progress.style.width = `${progressPercent}%`;
  fish.style.left = `calc(${progressPercent}% - 40px)`;

  // Xác định giai đoạn cá hiện tại
  let currentStage = 0;
  if (level >= 11) {
    currentStage = 2;
  } else if (level >= 7) {
    currentStage = 1;
  }

  // Nếu cá đổi giai đoạn -> đổi hình & phát âm thanh
  const newFishSrc = fishStages[currentStage];
  if (fish.src !== newFishSrc) {
    fish.src = newFishSrc;
    bigFish.src = newFishSrc;
    evolveSound.play();
  }

  // Cá lớn trong bể to dần theo cấp
  const scale = 1 + level * 0.04;
  bigFish.classList.add("scaling");
  bigFish.style.transform = `scale(${scale})`;

  // Khi đạt cấp tối đa
  if (level === maxLevel) {
    evolveSound.play();
    bigFish.style.transform = "scale(1.8)";
  }
}
