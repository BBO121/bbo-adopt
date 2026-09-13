// 전 페이지 공통 "맨 위로 이동" 버튼
// window.scrollY는 일부 모바일 브라우저(카카오톡/인스타그램 인앱 브라우저 등)에서
// 안정적으로 갱신되지 않는 경우가 있어 IntersectionObserver 기반으로 노출 여부를 판단한다.

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollTopBtn");
  const sentinel = document.getElementById("scrollSentinel");
  const SHOW_AFTER = 300;

  if (!btn) return;

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function getScrollTop() {
    return (
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  }

  if (sentinel && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          btn.classList.toggle("visible", !entry.isIntersecting);
        });
      },
      { rootMargin: `-${SHOW_AFTER}px 0px 0px 0px` }
    );
    observer.observe(sentinel);
  } else {
    function toggleVisibility() {
      btn.classList.toggle("visible", getScrollTop() > SHOW_AFTER);
    }
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    window.addEventListener("resize", toggleVisibility);
    toggleVisibility();
  }
});
