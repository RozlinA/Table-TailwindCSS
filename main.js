import './style.css'

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
  } else {
    darkModeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i> Dark Mode';
  }
});