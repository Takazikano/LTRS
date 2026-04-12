// ==================== ONLINE STORE / USLUGE SCRIPTS ====================

document.addEventListener('DOMContentLoaded', function() {
    setupScrollAnimations();
    updateNavActiveState();
    setupServiceCardInteractions();
});

// ==================== SCROLL ANIMATIONS ====================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }, index * 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ==================== NAVIGATION ACTIVE STATE ====================

function updateNavActiveState() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'index.html' || link.textContent === 'USLUGE') {
            link.classList.add('active');
        }
    });
}

// ==================== SERVICE CARD INTERACTIONS ====================

function setupServiceCardInteractions() {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    document.querySelectorAll('.principle-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    document.querySelectorAll('.reason-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ==================== SOCIAL LINKS ====================

document.querySelectorAll('a[data-social]').forEach(link => {
    link.addEventListener('click', function(e) {
        const social = this.getAttribute('data-social');
        const socials = {
            discord: 'https://discord.gg/Hd9W58q4D4',
            youtube: 'https://youtube.com/@takazikano',
            tiktok: 'https://tiktok.com/@takazikano',
            github: 'https://github.com/takazikano'
        };

        const url = socials[social];
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// ==================== PAGE TRANSITION ====================

window.addEventListener('load', function() {
    console.log('Services page loaded successfully');
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';