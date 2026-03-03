const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
  root.classList.add('light');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  const isLight = root.classList.toggle('light');
  toggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

document.querySelector('#year').textContent = new Date().getFullYear();
