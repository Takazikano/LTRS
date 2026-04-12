// ==================== LOCAL STORE SCRIPTS ====================

document.addEventListener('DOMContentLoaded', function() {
    setupScrollAnimations();
    setupInteractions();
    setupKPLinks();
    updateNavActiveState();
});

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

    document.querySelectorAll('[data-animate]:not(.store-card)').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Separately handle store cards - keep them visible
    document.querySelectorAll('.store-card[data-animate]').forEach(el => {
        el.style.opacity = '1';
        observer.observe(el);
    });
}

function setupKPLinks() {
    const kpProfiles = {
        veletech: 'https://www.kupujemprodajem.com/veletech-servis-prodaja-kg-ja/svi-oglasi/4563065/1',
        comtech: 'https://www.kupujemprodajem.com/comtech-servis-prodaja-kg-ja/svi-oglasi/4922155/1',
        lazarus: 'https://www.kupujemprodajem.com/lazarus-tech-servis-kg-ja/svi-oglasi/3755433/1'
    };

    Object.entries(kpProfiles).forEach(([key, url]) => {
        const element = document.querySelector(`[data-kp="${key}"]`);
        if (element) {
            element.href = url;
            element.target = '_blank';
            element.rel = 'noopener noreferrer';
        }
    });
}

function setupInteractions() {
    // Method card interactions
    document.querySelectorAll('.method-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Service card interactions
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function updateNavActiveState() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
}

// Setup smooth social link handling
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

// ==================== PAGE LOAD ====================

window.addEventListener('load', function() {
    console.log('Local store page loaded successfully');
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';