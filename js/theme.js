(function () {
  const STORAGE_KEY = 'puretalk-theme';

  function applyTheme(theme) {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }

  function getStoredTheme() {
    try { return localStorage.getItem(STORAGE_KEY) || 'dark'; }
    catch (e) { return 'dark'; }
  }

  applyTheme(getStoredTheme());

  window.PureTalkTheme = {
    get() { return document.documentElement.classList.contains('light') ? 'light' : 'dark'; },
    toggle() {
      const next = this.get() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      window.dispatchEvent(new CustomEvent('themechange', { detail: next }));
    },
    apply: applyTheme,
  };
})();