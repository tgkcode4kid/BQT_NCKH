// Elements
const bookBtn = document.getElementById("bookBtn");
const dolphinBtn = document.getElementById("dolphinBtn");
const bookOverlay = document.getElementById("bookOverlay");
const dolphinOverlay = document.getElementById("dolphinOverlay");
const closeBtns = document.querySelectorAll(".close-btn");
const dolphinAudio = document.getElementById("dolphinAudio");
const subtitle = document.getElementById("subtitle");

// Hiển thị popup
bookBtn.onclick = () => (bookOverlay.style.display = "flex");
dolphinBtn.onclick = () => {
  dolphinOverlay.style.display = "flex";
  startDolphinScene();
};

// Đóng popup
closeBtns.forEach((btn) => {
  btn.onclick = () => {
    btn.parentElement.parentElement.style.display = "none";
    dolphinAudio.pause();
    subtitle.textContent = "";
  };
});

// Click ngoài popup để đóng
window.onclick = (e) => {
  if (e.target === bookOverlay) bookOverlay.style.display = "none";
  if (e.target === dolphinOverlay) dolphinOverlay.style.display = "none";
};

// Hiệu ứng chữ chạy từng ký tự
function typeText(text, element, speed = 45) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// Khi cá heo nói
function startDolphinScene() {
  const text = `Xin chào! 🐬
Tôi là cá heo AI – người bạn đồng hành của bạn trong hành trình khám phá trí tuệ nhân tạo.
Hãy cùng tôi tìm hiểu cách sử dụng AI đúng đắn, sáng tạo và có đạo đức nhé! 🌊`;

  subtitle.textContent = "";
  dolphinAudio.currentTime = 0;
  dolphinAudio.play();
  typeText(text, subtitle, 45);
}

// Lật trang trong popup sách
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const nextPage = document.getElementById("nextPage");
const prevPage = document.getElementById("prevPage");

let currentPage = 1;

nextPage.onclick = () => {
  if (currentPage === 1) {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
    currentPage = 2;
  }
};

prevPage.onclick = () => {
  if (currentPage === 2) {
    page2.classList.add("hidden");
    page1.classList.remove("hidden");
    currentPage = 1;
  }
};
