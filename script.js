// Dark mode toggle & year
const root = document.documentElement;
const key = 'theme';
const yearEl = document.getElementById('year');
const saved = localStorage.getItem(key);
if (saved) document.documentElement.className = saved;
yearEl.textContent = new Date().getFullYear();
document.getElementById('themeToggle').addEventListener('click', () => {
  const current = root.classList.contains('light') ? '' : 'light';
  root.className = current;
  localStorage.setItem(key, current);
});
