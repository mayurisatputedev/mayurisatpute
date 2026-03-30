// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced fade-in animation on scroll with stagger
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

let animationDelay = 0;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, animationDelay);
            animationDelay += 150; // Stagger delay
        }
    });
}, observerOptions);

// Add fade-in class to sections and cards
document.querySelectorAll('section, .premium-card, .contact-card').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// Navbar background and style changes on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 50;

    if (scrolled) {
        navbar.classList.add('bg-white', 'shadow-lg');
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Typing effect for hero subtitle (optional enhancement)
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Uncomment to add typing effect to hero subtitle
// const heroSubtitle = document.querySelector('.letter-spacing');
// if (heroSubtitle) {
//     typeWriter(heroSubtitle, 'MBA | HR & Marketing Professional', 150);
// }

// Add hover effects to skill icons
document.querySelectorAll('.skill-icon i, .project-icon i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.color = '#d4af37'; // Gold on hover
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.color = '#1a365d'; // Back to primary
    });
});

// Smooth reveal for contact items
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.contact-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    contactObserver.observe(item);
});