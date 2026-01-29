// Initialize Lucide Icons
lucide.createIcons();

// Optimized Form Handling
const form = document.getElementById('inviteForm');
const notification = document.getElementById('notification');
let notificationTimeout;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Manage existing timeout to reset duration
    if (notificationTimeout) clearTimeout(notificationTimeout);
    
    notification.classList.remove('show');
    // Smooth reset for repeated interactions
    requestAnimationFrame(() => {
        setTimeout(() => {
            notification.classList.add('show');
            form.reset();
            
            notificationTimeout = setTimeout(() => { 
                notification.classList.remove('show'); 
            }, 4500);
        }, 50);
    });
});
// Procedural Steam Animation for Atmosphere
const steamContainer = document.getElementById('steam');
function createParticle() {
    if (window.innerWidth < 600 && steamContainer.children.length > 3) return; 
    const particle = document.createElement('div');
    const size = Math.random() * (window.innerWidth > 600 ? 100 : 50) + 50;
    const x = Math.random() * window.innerWidth;
    
    particle.style.cssText = `
        position: absolute;
        bottom: -100px;
        left: ${x}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%);
        border-radius: 50%;
        filter: blur(20px);
        pointer-events: none;
        transition: transform 15s linear, opacity 5s linear;
        opacity: 0;
    `;
    steamContainer.appendChild(particle);

    setTimeout(() => {
        particle.style.transform = `translateY(-${window.innerHeight + 200}px) translateX(${Math.random() * 100 - 50}px)`;
        particle.style.opacity = '0.3';
    }, 100);

    setTimeout(() => { particle.remove(); }, 15000);
}

setInterval(createParticle, window.innerWidth < 600 ? 3000 : 7000);
for(let i=0; i<3; i++) createParticle();
// Parallax Effects (Optimized for performance)
if (window.innerWidth > 1024) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        const logo = document.querySelector('.logo-wrapper');
        const content = document.querySelector('.content');
        if(logo) logo.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
        if(content) content.style.transform = `translate(${x * -8}px, ${y * -8}px)`;
    });
}