const body = document.body;
const toggleBtn = document.getElementById('toggleTheme');
const icon = document.getElementById('themeIcon');

// Check stored theme or use system preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // system theme
        body.classList.add(prefersDark ? 'theme-dark' : 'theme-light');
    }
    icon.className = (body.classList.contains('theme-dark') ? 'bi bi-sun-fill' : 'bi bi-moon-fill');
}

// Toggle and save theme
function toggleTheme() {
    if (body.classList.contains('theme-light')) {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        localStorage.setItem('theme', 'theme-dark');
    } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        localStorage.setItem('theme', 'theme-light');
    }
    icon.className = (body.classList.contains('theme-dark') ? 'bi bi-sun-fill' : 'bi bi-moon-fill');

}

// Init and attach listener
initTheme();
toggleBtn.addEventListener('click', toggleTheme);
