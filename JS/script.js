// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Magic cursor ring
const follower = document.getElementById('cursor-follower');

document.addEventListener('mousemove', e => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
});

document.addEventListener('click', () => {
    follower.classList.add('clicked');
    setTimeout(() => {
        follower.classList.remove('clicked');
    }, 600);
});

// Fun keypress
document.addEventListener('keypress', e => {
    console.log(`Clé magique : ${e.key} 🔥❄️`);
});