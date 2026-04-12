// ==================== HOMEPAGE SPECIFIC SCRIPTS ====================

document.addEventListener('DOMContentLoaded', function() {
    setupFloatingCardInteractions();
    setupScrollAnimations();
    updateNavActiveState();
});

function setupFloatingCardInteractions() {
    const cards = document.querySelectorAll('.floating-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
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

    document.querySelectorAll('.feature-card').forEach((card, index) => {
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

// ==================== PARALLAX SCROLL EFFECT ====================

let ticking = false;
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            applyParallax();
            ticking = false;
        });
        ticking = true;
    }
});

function applyParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual && lastScrollY < 600) {
        const offset = lastScrollY * 0.3;
        heroVisual.style.transform = `translateY(${offset}px)`;
    }
}

// ==================== SMOOTH INTERACTION FEEDBACK ====================

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        const startTime = Date.now();
        const duration = 600;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const size = 200 * progress;

            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.marginLeft = -size / 2 + 'px';
            ripple.style.marginTop = -size / 2 + 'px';
            ripple.style.opacity = (1 - progress) * 0.6;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                ripple.remove();
            }
        };

        animate();
    });
});

// ==================== COUNTER ANIMATION ====================

function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = target / 60;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCounter();
    });
}

// ==================== PAGE LOAD ANIMATION ====================

window.addEventListener('load', function() {
    // Add any post-load animations here
    console.log('Homepage loaded successfully');
});