// ---- 雲アニメーション ----
const cloud = document.querySelector('.cloud');
const cloudSection = document.querySelector('.cloud-section');
const lines = document.querySelectorAll(".story p");

window.addEventListener('scroll', () => {
  const rect = cloudSection.getBoundingClientRect();

  // 全文が表示されているかチェック
  const allShown = Array.from(lines).every(line => line.classList.contains("show"));

  if (allShown && rect.top < window.innerHeight && rect.bottom > 0) {
    let progress = 1 - rect.bottom / window.innerHeight;
    cloud.style.transform = `translateX(${progress * -1000}px)`;
    cloudSection.style.opacity = 1;
  } else {
    cloudSection.style.opacity = 0;
  }
});

// ---- ストーリーテキスト ----
document.addEventListener("DOMContentLoaded", () => {
  const windowHeight = window.innerHeight;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    lines.forEach((line, index) => {
      const triggerPoint = index * (windowHeight * 0.5);

      if (scrollY > triggerPoint) {
        line.classList.add("show");
      } else {
        line.classList.remove("show");
      }
    });
  });
});
