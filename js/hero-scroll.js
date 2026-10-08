(function () {
  const TOTAL_FRAMES = 30;

  function init() {
    const container = document.getElementById('hero-scroll-container');
    const imgEl = document.getElementById('hero-scroll-img');
    const imgWrap = document.getElementById('hero-img-wrap');
    const contentEl = document.getElementById('hero-content');

    if (!container || !imgEl) return;

    let maxProgress = 0;
    let currentProgress = 0;
    let lastFrame = -1;
    let rafId;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    maxProgress = 0;
    currentProgress = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const idx = String(i).padStart(6, '0');
      const img = new Image();
      img.src = `frames/frame_${idx}.png`;
    }

    function animate() {
      const diff = maxProgress - currentProgress;
      if (Math.abs(diff) > 0.001) {
        currentProgress += diff * 0.15;
      } else {
        currentProgress = maxProgress;
      }

      const currentFrame = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.floor(currentProgress * (TOTAL_FRAMES - 1)) + 1)
      );

      if (currentFrame !== lastFrame) {
        lastFrame = currentFrame;
        const idx = String(currentFrame).padStart(6, '0');
        imgEl.src = `frames/frame_${idx}.png`;
      }

      if (imgWrap) {
        imgWrap.style.transform = `scale(${1 + currentProgress * 0.05}) translateY(${currentProgress * 10}px)`;
      }
      if (contentEl) {
        contentEl.style.transform = `translateY(${currentProgress * -15}px)`;
        contentEl.style.opacity = String(1 - currentProgress * 0.2);
      }

      rafId = requestAnimationFrame(animate);
    }

    function handleScroll() {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollHeight = rect.height - windowHeight;
      const scrolled = -rect.top;

      let progress = scrolled / totalScrollHeight;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      if (progress > maxProgress) maxProgress = progress;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    setTimeout(() => {
      window.scrollTo(0, 0);
      maxProgress = 0;
      currentProgress = 0;
      handleScroll();
    }, 10);

    rafId = requestAnimationFrame(animate);
  }

  document.addEventListener('DOMContentLoaded', init);
})();