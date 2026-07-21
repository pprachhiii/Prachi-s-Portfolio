export interface ConstellationOptions {
  canvas: HTMLCanvasElement;
  label?: HTMLDivElement | null;
  hint?: HTMLDivElement | null;
}

export function initializeConstellation({ canvas, label, hint }: ConstellationOptions) {
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return () => {};
  }

  const CATEGORIES = [
    {
      id: 'frontend',
      label: 'Frontend',
      col: '#facc15',
      x: 0.08,
      y: 0.35,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS', 'Bootstrap'],
    },
    {
      id: 'backend',
      label: 'Backend',
      col: '#facc15',
      x: 0.32,
      y: 0.16,
      skills: ['Node.js', 'Express', 'REST APIs', 'Redis'],
    },
    {
      id: 'databases',
      label: 'Databases',
      col: '#facc15',
      x: 0.68,
      y: 0.16,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      id: 'languages',
      label: 'Languages',
      col: '#facc15',
      x: 0.5,
      y: 0.75,
      skills: ['JavaScript', 'TypeScript', 'Java'],
    },
{
      id: 'devops',
      label: 'DevOps',
      col: '#facc15',
      x: 0.85,
      y: 0.35,
      skills: ['Docker', 'GitHub Actions', 'CI/CD'],
    },
    {
      id: 'tools',
      label: 'Tools',
      col: '#facc15',
      x: 0.78,
      y: 0.84,
      skills: ['Git', 'Postman', 'GitHub', 'APIDog', 'VS Code'],
    },
    
    
  ];

  let animationFrame = 0;
  let t = 0;

  const resizeCanvas = () => {
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;

    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  };

  const draw = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

const isMobile = width < 768;
    ctx.clearRect(0, 0, width, height);

    
    if (!isMobile) {
  CATEGORIES.forEach((cat, index) => {
      const hubX = cat.x * width + Math.sin(t * 0.4 + index) * 5;

      const hubY = cat.y * height + Math.cos(t * 0.3 + index) * 5;

      const radius = Math.min(width, height) * 0.14;

      cat.skills.forEach((skill, skillIndex) => {
        const angle = (Math.PI * 2 * skillIndex) / cat.skills.length + t;

        const skillX = hubX + Math.cos(angle) * radius;

        const skillY = hubY + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.moveTo(hubX, hubY);
        ctx.lineTo(skillX, skillY);
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(skillX, skillY, 4, 0, Math.PI * 2);
        ctx.fillStyle = cat.col;
        ctx.fill();

        ctx.fillStyle = '#f5f0e8';
        ctx.font = '12px monospace';
        ctx.textAlign = 'left';

        ctx.fillText(skill, skillX + 10, skillY + 5);
      });

      ctx.beginPath();
      ctx.arc(hubX, hubY, 12, 0, Math.PI * 2);
      ctx.fillStyle = cat.col;
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px monospace';
      ctx.textAlign = 'center';

      ctx.fillText(cat.label.toUpperCase(), hubX, hubY + 32);
    });

}else {
  
  const blockHeight = height / CATEGORIES.length;

  const baseRadius = Math.min(width, blockHeight) * 0.35;

  CATEGORIES.forEach((cat, index) => {
    // each category gets its own vertical section
    const gap=40;
    const sectionTop = index * (blockHeight + gap);
        const sectionCenterY = sectionTop + blockHeight / 2;

    const hubX = width / 2;
    const hubY = sectionCenterY;

    // rotating hub (same animation feel)
    const animatedHubX = hubX + Math.sin(t * 0.4 + index) * 4;
    const animatedHubY = hubY + Math.cos(t * 0.3 + index) * 4;

    // draw hub
    ctx.beginPath();
    ctx.arc(animatedHubX, animatedHubY, 10, 0, Math.PI * 2);
    ctx.fillStyle = cat.col;
    ctx.fill();

    ctx.fillStyle = '#fff';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(cat.label.toUpperCase(), animatedHubX, animatedHubY + 25);

    // SAME circular constellation logic (just scaled down)
    cat.skills.forEach((skill, skillIndex) => {
    const angle =
  (Math.PI * 2 * skillIndex) / cat.skills.length + t * 1.2;

      const spread = isMobile ? 1.1 : 1;

const skillX =
  animatedHubX + Math.cos(angle) * baseRadius * spread;

const skillY =
  animatedHubY + Math.sin(angle) * baseRadius * spread;
      // connection line
      ctx.beginPath();
      ctx.moveTo(animatedHubX, animatedHubY);
      ctx.lineTo(skillX, skillY);
      ctx.strokeStyle = isMobile
  ? 'rgba(255,255,255,0.25)'
  : 'rgba(255,255,255,0.15)';
      ctx.stroke();

      // node
      ctx.beginPath();
      ctx.arc(skillX, skillY, 3, 0, Math.PI * 2);
      ctx.fillStyle = cat.col;
      ctx.fill();

      // label
      ctx.fillStyle = '#f5f0e8';
      ctx.font = '10px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(skill, skillX + 8, skillY + 3);
    });
  });
}
  t += 0.01;
  animationFrame = requestAnimationFrame(draw);
}   
  resizeCanvas();
  draw();

  window.addEventListener('resize', resizeCanvas);

  return () => {
    cancelAnimationFrame(animationFrame);

    window.removeEventListener('resize', resizeCanvas);
  };
  }
