const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const rocket = document.getElementById('Roket');

// ---- ハンバーガーメニュー操作 ----
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// ---- ストーリーアニメーション & ロケット移動 ----
const lines = document.querySelectorAll(".story p");

document.addEventListener("DOMContentLoaded", () => {
  const windowHeight = window.innerHeight;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // テキストの表示制御
    lines.forEach((line, index) => {
      const triggerPoint = index * (windowHeight * 0.5);
      if (scrollY > triggerPoint) {
        line.classList.add("show");
      } else {
        line.classList.remove("show");
      }
    });

    // ---- ロケット移動 ----
    const moveX = scrollY * -0.5;
    const moveY = scrollY * 0.3;
    rocket.style.transform = `translate(calc(-50% + ${moveX}px), ${moveY}px)`;

    if (moveX < -300 && moveY > 200) {
      hamburger.classList.add('show');
    } else {
      hamburger.classList.remove('show');
    }
  });
});
