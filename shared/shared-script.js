// ==================== NAVIGATION ACTIVE STATE ====================

document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    setupSocialLinks();
});

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.classList.remove('active');

        const href = link.getAttribute('href');

        // Match the link with current path
        if (currentPath.includes(href.replace('../', '').split('/')[0]) ||
            (currentPath.includes('index.html') && href.includes('home')) ||
            (currentPath.endsWith('/') && href.includes(currentPath.split('/').pop()))) {
            link.classList.add('active');
        }
    });
}

function setupSocialLinks() {
    const socials = {
        discord: 'https://discord.gg/Hd9W58q4D4',
        youtube: 'https://youtube.com/@takazikano',
        tiktok: 'https://tiktok.com/@takazikano',
        github: 'https://github.com/takazikano'
    };

    Object.entries(socials).forEach(([key, url]) => {
        const element = document.querySelector(`[data-social="${key}"]`);
        if (element) {
            element.href = url;
            element.target = '_blank';
            element.rel = 'noopener noreferrer';
        }
    });
}

// ==================== SMOOTH SCROLL ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// ==================== RESPONSIVE MENU (for future mobile menu) ====================

let isMobileMenuOpen = false;

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    isMobileMenuOpen = !isMobileMenuOpen;

    if (navMenu) {
        navMenu.style.display = isMobileMenuOpen ? 'flex' : 'none';
    }
}

// ==================== UTILITY FUNCTIONS ====================

function getBasePath() {
    const path = window.location.pathname;
    const folders = ['homepage', 'information', 'online-store', 'local-store'];

    for (let folder of folders) {
        if (path.includes(folder)) {
            return '../';
        }
    }
    return './';
}

// ==================== SCROLL EFFECTS ====================

let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if (!nav) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== PAGE LOAD ANIMATION ====================

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '1';
});