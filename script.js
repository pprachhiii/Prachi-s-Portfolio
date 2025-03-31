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

// Load skill wheels when the page is loaded
window.onload = () => {
    createSkillWheel('htmlSkill', 90);
    createSkillWheel('cssSkill', 80);
    createSkillWheel('jsSkill', 70);
    createSkillWheel('reactSkill', 60); // Example skill
    createSkillWheel('wordpressSkill', 50); // Example skill
    createSkillWheel('cybersecuritySkill', 40); // Example skill
};
