(function () {
  let observer;

  function observeAll() {
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || '0', 10);
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
    }
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', observeAll);
  document.addEventListener('reveal:refresh', observeAll);
})();