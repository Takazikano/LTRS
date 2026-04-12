// ==================== INFORMATION PAGE SCRIPTS ====================

document.addEventListener('DOMContentLoaded', function() {
    setupFAQInteractions();
    setupScrollAnimations();
    updateNavActiveState();
});

function setupFAQInteractions() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');

        header.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

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

    // Animate build cards
    document.querySelectorAll('.build-card').forEach((card, index) => {
        card.style.opacity = '0';
        const observer2 = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    }, index * 100);
                    observer2.unobserve(entry.target);
                }
            });
        }, observerOptions);
        observer2.observe(card);
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

// ==================== SMOOTH LINK NAVIGATION ====================

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

// ==================== BUILD CARD INTERACTIONS ====================

document.querySelectorAll('.build-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    // Add subtle glow effect on hover
    const image = card.querySelector('.build-image');
    if (image) {
        card.addEventListener('mouseenter', function() {
            image.style.filter = 'brightness(1.1)';
        });

        card.addEventListener('mouseleave', function() {
            image.style.filter = 'brightness(1)';
        });
    }
});

// ==================== CONTACT CARD INTERACTIONS ====================

document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ==================== PAGE TRANSITION ====================

window.addEventListener('load', function() {
    console.log('Information page loaded successfully');
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';