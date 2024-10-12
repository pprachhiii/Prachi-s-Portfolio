const createSkillWheel = (id, percentage) => {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [percentage, 100 - percentage],
                backgroundColor: ['#00A7E1', '#f0f0f0'],
                borderWidth: 0,
            }],
        },
        options: {
            cutoutPercentage: 70,
            tooltips: { enabled: false },
            animation: {
                animateRotate: true,
                animateScale: true,
            },
        },
    });
};

// Theme toggle functionality
const themeToggleBtn = document.querySelector('.toggle-theme');
const body = document.body;

// Check for saved user preference and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('dark-theme', savedTheme === 'dark');
    themeToggleBtn.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Event listener for the theme toggle button
themeToggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-theme');
    themeToggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load skill wheels when the page is loaded
window.onload = () => {
    createSkillWheel('htmlSkill', 90);
    createSkillWheel('cssSkill', 80);
    createSkillWheel('jsSkill', 70);
    createSkillWheel('reactSkill', 60); // Example skill
    createSkillWheel('wordpressSkill', 50); // Example skill
    createSkillWheel('cybersecuritySkill', 40); // Example skill
};
