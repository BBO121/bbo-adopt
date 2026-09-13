// commission.html 상단 이미지 슬라이더 (Vanilla JS, 외부 라이브러리 없음)

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  const dotsWrap = document.getElementById("sliderDots");
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");

  if (!track || !dotsWrap || !prevBtn || !nextBtn) return;

  const slides = Array.from(track.children);
  const total = slides.length;
  let current = 0;

  function update() {
    track.style.transform = `translateX(-${current * 100}%)`;
    Array.from(dotsWrap.children).forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  function goTo(index) {
    current = (index + total) % total;
    update();
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slider-dot";
    dot.setAttribute("aria-label", `${i + 1}번째 사진 보기`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  let touchStartX = null;

  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );

  track.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const swipeThreshold = 40;

    if (deltaX > swipeThreshold) {
      goTo(current - 1);
    } else if (deltaX < -swipeThreshold) {
      goTo(current + 1);
    }

    touchStartX = null;
  });

  update();
});
