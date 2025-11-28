/**
 * OMENA - Creative Agency Website
 * Main JavaScript with GSAP Animations
 */

// ================================
// GSAP Registration
// ================================
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ================================
// Custom Cursor
// ================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

// Update mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animate cursor with GSAP
gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        // Smooth cursor movement
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;

        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;

        if (cursor) {
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        }
        if (cursorFollower) {
            cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
        }
    }
});

// Cursor interactions
const interactiveElements = document.querySelectorAll('a, button, .service-card, .story-card, .portfolio-item');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 0.5,
            duration: 0.3
        });
        gsap.to(cursorFollower, {
            scale: 1.5,
            duration: 0.3
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.3
        });
        gsap.to(cursorFollower, {
            scale: 1,
            duration: 0.3
        });
    });
});

// ================================
// Navigation
// ================================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Animate mobile menu
        if (mobileMenu.classList.contains('active')) {
            gsap.from('.mobile-link', {
                x: 50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }
    });
}

// Close mobile menu when link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ================================
// Hero Section Animations
// ================================
if (document.querySelector('.hero')) {
    // Animate hero title lines
    gsap.from('.hero-title .line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.3
    });

    // Animate hero subtitle
    gsap.to('.hero-subtitle', {
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: 'power2.out'
    });

    // Animate hero CTA
    gsap.to('.hero-cta', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.3,
        ease: 'power2.out'
    });

    // Animate scroll indicator
    gsap.to('.scroll-indicator', {
        opacity: 1,
        duration: 1,
        delay: 1.6,
        ease: 'power2.out'
    });

    // Floating shapes animation
    gsap.to('.shape-1', {
        y: -50,
        x: -30,
        rotation: 360,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape-2', {
        y: 50,
        x: 30,
        rotation: -360,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape-3', {
        y: -30,
        x: 40,
        rotation: 180,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

// ================================
// Page Hero Animations
// ================================
if (document.querySelector('.page-hero')) {
    gsap.from('.page-title .line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.3
    });

    gsap.from('.page-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
        ease: 'power2.out'
    });
}

// ================================
// Scroll-Triggered Animations
// ================================

// Fade in on scroll
gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
        }
    });
});

// Section headers
gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// About section
if (document.querySelector('.about-grid')) {
    gsap.from('.about-image', {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.about-content', {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Stats counter animation
const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length > 0) {
    statNumbers.forEach(stat => {
        const count = parseInt(stat.getAttribute('data-count'));

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(stat, {
                    innerText: count,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: 'power1.out',
                    onUpdate: function() {
                        stat.innerText = Math.ceil(this.targets()[0].innerText);
                    }
                });
            },
            once: true
        });
    });
}

// Service cards
gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });

    // Parallax effect on scroll
    gsap.to(card, {
        y: -30,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });
});

// Process steps
gsap.utils.toArray('.process-step').forEach((step, index) => {
    gsap.from(step, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.15,
        scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Story cards
gsap.utils.toArray('.story-card').forEach((card, index) => {
    gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Story card hover effect
document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Value cards
gsap.utils.toArray('.value-card').forEach((card, index) => {
    gsap.from(card, {
        scale: 0.8,
        opacity: 0,
        rotation: -5,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Service detail sections
if (document.querySelector('.service-detail-grid')) {
    gsap.utils.toArray('.service-detail-grid').forEach(grid => {
        const content = grid.querySelector('.service-detail-content');
        const image = grid.querySelector('.service-detail-image');

        if (content && image) {
            const isReverse = grid.classList.contains('reverse');

            gsap.from(content, {
                x: isReverse ? 100 : -100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: grid,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            });

            gsap.from(image, {
                x: isReverse ? -100 : 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: grid,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    });
}

// Package cards
gsap.utils.toArray('.package-card').forEach((card, index) => {
    gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Portfolio items
gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
    gsap.from(item, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.05,
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Testimonial cards
gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
    gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Result cards
gsap.utils.toArray('.result-card').forEach((card, index) => {
    gsap.from(card, {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Contact form
if (document.querySelector('.contact-form')) {
    gsap.from('.contact-info', {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.contact-form-wrapper', {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });
}

// FAQ items
gsap.utils.toArray('.faq-item').forEach((item, index) => {
    gsap.from(item, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// ================================
// Portfolio Filter
// ================================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter items with GSAP animation
            portfolioItems.forEach(item => {
                const categories = item.getAttribute('data-category');

                if (filter === 'all' || categories.includes(filter)) {
                    gsap.to(item, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        display: 'block',
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(item, {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.5,
                        display: 'none',
                        ease: 'power2.in'
                    });
                }
            });
        });
    });
}

// ================================
// Contact Form
// ================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Here you would normally send the data to a server
        // For now, we'll just show the success message

        // Animate form out
        gsap.to(contactForm, {
            opacity: 0,
            y: -30,
            duration: 0.5,
            onComplete: () => {
                contactForm.style.display = 'none';
                formSuccess.classList.add('active');

                // Animate success message in
                gsap.from(formSuccess, {
                    opacity: 0,
                    y: 30,
                    duration: 0.5
                });

                // Reset form after 5 seconds
                setTimeout(() => {
                    gsap.to(formSuccess, {
                        opacity: 0,
                        y: -30,
                        duration: 0.5,
                        onComplete: () => {
                            formSuccess.classList.remove('active');
                            contactForm.style.display = 'flex';
                            contactForm.reset();

                            gsap.to(contactForm, {
                                opacity: 1,
                                y: 0,
                                duration: 0.5
                            });
                        }
                    });
                }, 5000);
            }
        });
    });
}

// ================================
// Smooth Scroll for Anchor Links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 100
                },
                ease: 'power3.inOut'
            });
        }
    });
});

// ================================
// Parallax Effect for Images
// ================================
gsap.utils.toArray('.image-wrapper').forEach(wrapper => {
    const image = wrapper.querySelector('.placeholder-image');

    if (image) {
        gsap.to(image, {
            y: 50,
            scrollTrigger: {
                trigger: wrapper,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    }
});

// ================================
// CTA Section Animation
// ================================
if (document.querySelector('.cta-section')) {
    gsap.from('.cta-content', {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
}

// ================================
// Footer Animation
// ================================
if (document.querySelector('.footer')) {
    gsap.from('.footer-col', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });
}

// ================================
// Button Hover Effects
// ================================
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.top = e.offsetY + 'px';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.pointerEvents = 'none';

        button.appendChild(ripple);

        gsap.to(ripple, {
            width: 200,
            height: 200,
            x: -100,
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => ripple.remove()
        });
    });
});

// ================================
// Loading Animation
// ================================
window.addEventListener('load', () => {
    // Refresh ScrollTrigger after everything is loaded
    ScrollTrigger.refresh();

    // Add loaded class to body
    document.body.classList.add('loaded');
});

// ================================
// Resize Handler
// ================================
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// ================================
// Performance: Disable animations on touch devices
// ================================
if ('ontouchstart' in window) {
    // Reduce motion for touch devices
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
        gsap.globalTimeline.timeScale(0.1);
        ScrollTrigger.config({
            limitCallbacks: true
        });
    }
}

// ================================
// Add magnetic effect to buttons
// ================================
document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});

// ================================
// Text reveal on scroll
// ================================
gsap.utils.toArray('h2, h3').forEach(heading => {
    if (!heading.closest('.hero') && !heading.closest('.page-hero')) {
        gsap.from(heading, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: heading,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    }
});

// ================================
// 3D TILT EFFECT ON MOUSE MOVE
// ================================
const tiltElements = document.querySelectorAll('.service-card, .story-card, .value-card, .portfolio-item');

tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(element, {
            duration: 0.3,
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            ease: 'power2.out'
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            duration: 0.5,
            rotationX: 0,
            rotationY: 0,
            ease: 'elastic.out(1, 0.3)'
        });
    });
});

// ================================
// 3D PARALLAX HERO WITH MOUSE TRACKING
// ================================
if (document.querySelector('.hero')) {
    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-cta');
    const shapes = document.querySelectorAll('.shape');

    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        // Move title
        gsap.to(heroTitle, {
            x: xPercent * 30,
            y: yPercent * 30,
            rotationY: xPercent * 5,
            rotationX: -yPercent * 5,
            duration: 0.5,
            ease: 'power2.out'
        });

        // Move subtitle
        gsap.to(heroSubtitle, {
            x: xPercent * 20,
            y: yPercent * 20,
            duration: 0.5,
            ease: 'power2.out'
        });

        // Move buttons
        gsap.to(heroButtons, {
            x: xPercent * 15,
            y: yPercent * 15,
            duration: 0.5,
            ease: 'power2.out'
        });

        // Move shapes with different speeds
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 10;
            gsap.to(shape, {
                x: xPercent * speed,
                y: yPercent * speed,
                rotationZ: xPercent * (index + 1) * 5,
                duration: 0.8,
                ease: 'power2.out'
            });
        });
    });
}

// ================================
// 3D SCROLL PERSPECTIVE ANIMATIONS
// ================================

// Add 3D rotation on scroll for service cards
gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.to(card, {
        rotationY: 15,
        rotationX: 5,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
            onEnter: () => {
                gsap.to(card, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5
                });
            }
        }
    });
});

// 3D rotate process steps on scroll
gsap.utils.toArray('.process-step').forEach((step, index) => {
    gsap.to(step, {
        rotationY: index % 2 === 0 ? 10 : -10,
        scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
        }
    });
});

// ================================
// 3D DEPTH LAYERING FOR SECTIONS
// ================================
gsap.utils.toArray('.section').forEach(section => {
    const elements = section.querySelectorAll('h2, h3, p, .service-card, .story-card');

    elements.forEach((element, index) => {
        gsap.to(element, {
            z: index * 20,
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });
});

// ================================
// 3D ROTATING GEOMETRIC SHAPES
// ================================
if (document.querySelector('.floating-shapes')) {
    gsap.to('.shape-1', {
        rotationX: 360,
        rotationY: 360,
        duration: 25,
        repeat: -1,
        ease: 'none'
    });

    gsap.to('.shape-2', {
        rotationX: -360,
        rotationZ: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
    });

    gsap.to('.shape-3', {
        rotationY: 360,
        rotationZ: -360,
        duration: 30,
        repeat: -1,
        ease: 'none'
    });
}

// ================================
// 3D TEXT REVEAL ANIMATIONS
// ================================
gsap.utils.toArray('.section-title').forEach(title => {
    const chars = title.textContent.split('');
    title.innerHTML = chars.map(char =>
        `<span style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    const charElements = title.querySelectorAll('span');

    gsap.from(charElements, {
        opacity: 0,
        rotationX: -90,
        y: 50,
        z: -100,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// ================================
// 3D HOVER EFFECT FOR STATS
// ================================
document.querySelectorAll('.stat-item').forEach(stat => {
    stat.addEventListener('mouseenter', () => {
        gsap.to(stat, {
            z: 50,
            scale: 1.1,
            rotationY: 5,
            duration: 0.4,
            ease: 'power2.out'
        });

        gsap.to(stat.querySelector('.stat-number'), {
            scale: 1.2,
            color: '#f8e800',
            duration: 0.3
        });
    });

    stat.addEventListener('mouseleave', () => {
        gsap.to(stat, {
            z: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.4,
            ease: 'elastic.out(1, 0.5)'
        });

        gsap.to(stat.querySelector('.stat-number'), {
            scale: 1,
            color: '#FFFFFF',
            duration: 0.3
        });
    });
});

// ================================
// 3D CARD STACK EFFECT ON SCROLL
// ================================
gsap.utils.toArray('.story-card').forEach((card, index) => {
    gsap.to(card, {
        rotationX: -10,
        z: index * 30,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top center',
            scrub: 1
        }
    });
});

// ================================
// 3D PERSPECTIVE SHIFT ON SCROLL
// ================================
ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
        const progress = self.progress;
        gsap.to('.hero-content', {
            rotationX: progress * 5,
            z: progress * 100,
            duration: 0.3
        });
    }
});

// ================================
// 3D BUTTON PRESS EFFECT
// ================================
document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button').forEach(button => {
    button.addEventListener('mousedown', () => {
        gsap.to(button, {
            scaleX: 0.95,
            scaleY: 0.95,
            z: -10,
            duration: 0.1
        });
    });

    button.addEventListener('mouseup', () => {
        gsap.to(button, {
            scaleX: 1,
            scaleY: 1,
            z: 0,
            duration: 0.2,
            ease: 'elastic.out(1, 0.3)'
        });
    });
});

// ================================
// 3D FLOATING SCROLL INDICATOR
// ================================
if (document.querySelector('.scroll-indicator')) {
    gsap.to('.scroll-indicator', {
        y: 15,
        rotationX: 10,
        z: 20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
}

// ================================
// DIMENSIONAL PORTAL & REALITY-BENDING EFFECTS
// ================================

// Portal opening effect when entering featured work section
if (document.querySelector('.featured-work-section')) {
    const featuredSection = document.querySelector('.featured-work-section');

    ScrollTrigger.create({
        trigger: featuredSection,
        start: 'top 80%',
        onEnter: () => {
            featuredSection.classList.add('portal-active');
            setTimeout(() => {
                featuredSection.classList.add('grid-active');
            }, 500);
        },
        onLeaveBack: () => {
            featuredSection.classList.remove('portal-active', 'grid-active');
        }
    });
}

// ================================
// EXPLOSIVE CIRCULAR REVEAL
// ================================

// Create particles for explosion effect
function createExplosionParticles(element) {
    const particleCount = 30;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${i % 2 === 0 ? '#f8e800' : '#272860'};
            border-radius: 50%;
            left: ${centerX}px;
            top: ${centerY}px;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 20px currentColor;
        `;
        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 200 + Math.random() * 200;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        gsap.to(particle, {
            x: tx,
            y: ty,
            opacity: 0,
            scale: 0,
            rotation: Math.random() * 720,
            duration: 1 + Math.random() * 0.5,
            ease: 'power3.out',
            onComplete: () => particle.remove()
        });
    }
}

// ================================
// VORTEX SCROLL EFFECT
// ================================

// Create vortex/tunnel effect on scroll
function createVortexEffect() {
    const vortex = document.createElement('div');
    vortex.className = 'vortex-effect';
    vortex.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
    `;

    for (let i = 0; i < 5; i++) {
        const ring = document.createElement('div');
        ring.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${100 + i * 100}px;
            height: ${100 + i * 100}px;
            border: 2px solid ${i % 2 === 0 ? '#f8e800' : '#272860'};
            border-radius: 50%;
            transform: translate(-50%, -50%);
            opacity: ${0.3 - i * 0.05};
        `;
        vortex.appendChild(ring);
    }

    document.body.appendChild(vortex);
    return vortex;
}

const vortex = createVortexEffect();

// Activate vortex during fast scrolling
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);

    gsap.to(vortex, {
        opacity: 0.6,
        scale: 1.5,
        rotation: 360,
        duration: 0.3
    });

    scrollTimeout = setTimeout(() => {
        gsap.to(vortex, {
            opacity: 0,
            scale: 1,
            rotation: 0,
            duration: 0.5
        });
    }, 150);
});

// ================================
// FEATURED WORK ANIMATIONS
// ================================

// ================================
// VARIED REVEAL ANIMATIONS FOR EACH PROJECT
// ================================

// Animate featured projects on scroll with DIFFERENT animations
gsap.utils.toArray('.featured-project').forEach((project, index) => {
    const media = project.querySelector('.project-media');
    const content = project.querySelector('.project-content');
    const number = project.querySelector('.project-number');
    const category = project.querySelector('.project-category');
    const title = project.querySelector('.project-title');
    const description = project.querySelector('.project-description');
    const stats = project.querySelectorAll('.stat-box');
    const cta = project.querySelector('.project-cta');
    const bgImage = project.querySelector('.project-bg-image');

    // Different reveal animations based on index
    const revealPatterns = [
        // Pattern 1: Diagonal wipe
        () => {
            gsap.from(project, {
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                duration: 1.5,
                ease: 'power4.inOut',
                scrollTrigger: {
                    trigger: project,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });
        },
        // Pattern 2: Split from center
        () => {
            gsap.from(project, {
                clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
                duration: 1.2,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: project,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });
        },
        // Pattern 3: Curtain reveal
        () => {
            gsap.from(project, {
                clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
                duration: 1.3,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: project,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    ];

    // Apply pattern based on index
    revealPatterns[index % revealPatterns.length]();

    // Explosion effect for first project only
    if (index === 0) {
        ScrollTrigger.create({
            trigger: project,
            start: 'top 70%',
            onEnter: () => {
                project.classList.add('explode');
                setTimeout(() => {
                    createExplosionParticles(project);
                }, 200);
                setTimeout(() => {
                    project.classList.remove('explode');
                }, 1200);
            },
            once: true
        });
    }

    // Create VARIED content animation timelines based on project index
    const contentAnimations = [
        // Animation 1: Spiral in
        (tl) => {
            tl.from(media, {
                scale: 0.5,
                rotation: -180,
                opacity: 0,
                duration: 1.5,
                ease: 'back.out(1.7)'
            }, 0);

            tl.from([number, category, title, description], {
                rotation: 90,
                x: -100,
                opacity: 0,
                duration: 1,
                stagger: {
                    each: 0.1,
                    from: 'end'
                },
                ease: 'expo.out'
            }, 0.5);
        },
        // Animation 2: Wave reveal
        (tl) => {
            tl.from(media, {
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                duration: 1.2,
                ease: 'power4.inOut'
            }, 0);

            tl.from([number, category, title, description], {
                y: 100,
                rotationX: -90,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'back.out(2)'
            }, 0.6);
        },
        // Animation 3: Bounce in
        (tl) => {
            tl.from(media, {
                y: -200,
                opacity: 0,
                duration: 1.2,
                ease: 'bounce.out'
            }, 0);

            tl.from([number, category, title, description], {
                scale: 0,
                rotation: 360,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'elastic.out(1, 0.5)'
            }, 0.4);
        }
    ];

    // Create timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Apply animation pattern
    contentAnimations[index % contentAnimations.length](tl);

    // Animate stats with varied patterns
    const statAnimations = [
        { y: -50, opacity: 0, rotation: -45 },
        { scale: 0, opacity: 0, rotation: 180 },
        { x: -100, opacity: 0, skewX: 20 }
    ];

    tl.from(stats, {
        ...statAnimations[index % statAnimations.length],
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(2)'
    }, 0.8);

    // Animate CTA with unique effect per project
    const ctaEffects = [
        { scale: 0, rotation: 720, opacity: 0 },
        { y: 100, opacity: 0, rotationX: 90 },
        { scaleX: 0, opacity: 0, skewY: 10 }
    ];

    tl.from(cta, {
        ...ctaEffects[index % ctaEffects.length],
        duration: 0.8,
        ease: 'back.out(2)'
    }, 1);

    // Parallax effect on image
    gsap.to(bgImage, {
        y: 100,
        scrollTrigger: {
            trigger: project,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    // 3D tilt on mouse move
    project.addEventListener('mousemove', (e) => {
        const rect = project.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 50;
        const rotateY = (centerX - x) / 50;

        gsap.to(content, {
            duration: 0.5,
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            ease: 'power2.out'
        });
    });

    project.addEventListener('mouseleave', () => {
        gsap.to(content, {
            duration: 0.8,
            rotationX: 0,
            rotationY: 0,
            ease: 'elastic.out(1, 0.3)'
        });
    });

    // Color shift on scroll through project
    gsap.to(project, {
        scrollTrigger: {
            trigger: project,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const hue = 220 + progress * 60; // Shift from blue to yellow
                const saturation = 40 + progress * 60;
                const lightness = 95 - progress * 10;
                project.style.filter = `hue-rotate(${progress * 30}deg) saturate(${1 + progress * 0.2})`;
            }
        }
    });

    // Floating particles on hover
    project.addEventListener('mouseenter', () => {
        createFloatingParticles(project);
    });
});

// ================================
// FLOATING PARTICLE SYSTEM
// ================================

function createFloatingParticles(container) {
    const particleCount = 15;
    const rect = container.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: ${4 + Math.random() * 6}px;
            height: ${4 + Math.random() * 6}px;
            background: ${Math.random() > 0.5 ? '#f8e800' : '#272860'};
            border-radius: 50%;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.7;
            box-shadow: 0 0 10px currentColor;
        `;
        document.body.appendChild(particle);

        gsap.to(particle, {
            y: -200 - Math.random() * 200,
            x: (Math.random() - 0.5) * 200,
            opacity: 0,
            scale: 0,
            rotation: Math.random() * 360,
            duration: 2 + Math.random() * 2,
            ease: 'power1.out',
            onComplete: () => particle.remove()
        });
    }
}

// ================================
// REALITY WARP ON SECTION TRANSITIONS
// ================================

gsap.utils.toArray('.featured-project').forEach((project, index) => {
    if (index === 0) return; // Skip first project

    ScrollTrigger.create({
        trigger: project,
        start: 'top center',
        end: 'center center',
        scrub: 2,
        onUpdate: (self) => {
            const progress = self.progress;

            // Warp previous sections
            const allProjects = gsap.utils.toArray('.featured-project');
            allProjects.slice(0, index).forEach((prevProject, i) => {
                gsap.to(prevProject, {
                    scale: 1 - progress * 0.1,
                    rotationX: progress * -10,
                    z: -progress * 200,
                    opacity: 1 - progress * 0.5,
                    filter: `blur(${progress * 5}px) brightness(${1 - progress * 0.3})`,
                    duration: 0.3
                });
            });
        }
    });
});

// Stat value counter animation
gsap.utils.toArray('.stat-box').forEach(stat => {
    const valueElement = stat.querySelector('.stat-value');
    const text = valueElement.textContent;

    // Extract number from text (handles 300%, 10x, 2.5M, etc.)
    const match = text.match(/[\d.]+/);
    if (match) {
        const number = parseFloat(match[0]);
        const suffix = text.replace(/[\d.]+/, '');

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            onEnter: () => {
                gsap.from({ val: 0 }, {
                    val: number,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function() {
                        const currentVal = this.targets()[0].val;
                        const formatted = number % 1 === 0
                            ? Math.ceil(currentVal)
                            : currentVal.toFixed(1);
                        valueElement.textContent = formatted + suffix;
                    }
                });
            },
            once: true
        });
    }
});

// ================================
// HORIZONTAL SCROLL ANIMATIONS
// ================================

if (document.querySelector('.horizontal-projects')) {
    const horizontalSection = document.querySelector('.horizontal-scroll-section');
    const horizontalProjects = document.querySelector('.horizontal-projects');
    const hProjects = gsap.utils.toArray('.h-project');

    // Animate horizontal scroll on vertical scroll
    gsap.to(horizontalProjects, {
        x: () => -(horizontalProjects.scrollWidth - window.innerWidth + 100),
        ease: 'none',
        scrollTrigger: {
            trigger: horizontalSection,
            start: 'top top',
            end: () => `+=${horizontalProjects.scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
        }
    });

    // Animate each project on entrance
    hProjects.forEach((project, index) => {
        gsap.from(project, {
            scale: 0.8,
            opacity: 0,
            rotationY: -45,
            duration: 0.8,
            scrollTrigger: {
                trigger: horizontalSection,
                start: 'top center',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
        });

        // 3D hover effect
        project.addEventListener('mouseenter', () => {
            gsap.to(project, {
                z: 50,
                rotationY: 10,
                rotationX: 5,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        project.addEventListener('mouseleave', () => {
            gsap.to(project, {
                z: 0,
                rotationY: 0,
                rotationX: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

// ================================
// PROJECT CTA ANIMATIONS
// ================================

document.querySelectorAll('.project-cta').forEach(button => {
    // Pulse animation
    gsap.to(button, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Enhanced hover effect
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.1,
            boxShadow: '0 30px 60px rgba(39, 40, 96, 0.4)',
            duration: 0.3
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            boxShadow: '0 10px 30px rgba(39, 40, 96, 0.2)',
            duration: 0.3
        });
    });

    // Click animation
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.pointerEvents = 'none';

        button.appendChild(ripple);

        gsap.to(ripple, {
            scale: 4,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => ripple.remove()
        });
    });
});

// ================================
// PROJECT NUMBER PARALLAX
// ================================

gsap.utils.toArray('.project-number').forEach(number => {
    gsap.to(number, {
        y: -50,
        opacity: 0.1,
        scrollTrigger: {
            trigger: number,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });
});

// ================================
// ENHANCED PORTFOLIO GRID ANIMATIONS
// ================================

// Re-animate portfolio items with more dramatic effects
gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
    const image = item.querySelector('.portfolio-image');
    const info = item.querySelector('.portfolio-info');

    // Entrance animation
    gsap.from(item, {
        y: 100,
        rotationX: -30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        delay: (index % 3) * 0.1
    });

    // Image reveal animation
    gsap.from(image, {
        scale: 1.2,
        duration: 1.5,
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });

    // 3D hover effect
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            z: 60,
            rotationY: 8,
            rotationX: 5,
            scale: 1.05,
            duration: 0.5,
            ease: 'power3.out'
        });

        gsap.to(image, {
            scale: 1.1,
            duration: 0.6
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            z: 0,
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.7,
            ease: 'elastic.out(1, 0.5)'
        });

        gsap.to(image, {
            scale: 1,
            duration: 0.6
        });
    });
});

// ================================
// MAGNETIC EFFECT FOR PROJECT CARDS
// ================================

gsap.utils.toArray('.featured-project').forEach(project => {
    const cta = project.querySelector('.project-cta');

    project.addEventListener('mousemove', (e) => {
        const rect = cta.getBoundingClientRect();
        const ctaCenterX = rect.left + rect.width / 2;
        const ctaCenterY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
            Math.pow(e.clientX - ctaCenterX, 2) +
            Math.pow(e.clientY - ctaCenterY, 2)
        );

        if (distance < 150) {
            const angle = Math.atan2(e.clientY - ctaCenterY, e.clientX - ctaCenterX);
            const pullStrength = (150 - distance) / 150;
            const moveX = Math.cos(angle) * pullStrength * 20;
            const moveY = Math.sin(angle) * pullStrength * 20;

            gsap.to(cta, {
                x: moveX,
                y: moveY,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });

    project.addEventListener('mouseleave', () => {
        gsap.to(cta, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});

// ================================
// LIQUID WAVE DISTORTION ON HORIZONTAL SCROLL
// ================================

if (document.querySelector('.horizontal-projects')) {
    const hProjects = gsap.utils.toArray('.h-project');

    hProjects.forEach((project, index) => {
        // Wave effect on scroll reveal
        ScrollTrigger.create({
            trigger: project,
            start: 'left right',
            end: 'right left',
            horizontal: true,
            onEnter: () => {
                gsap.from(project, {
                    scaleY: 0.8,
                    scaleX: 1.1,
                    skewX: 5,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.5)'
                });

                // Ripple effect
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 20px;
                    height: 20px;
                    background: radial-gradient(circle, #f8e800, transparent);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    pointer-events: none;
                `;
                project.appendChild(ripple);

                gsap.to(ripple, {
                    width: 400,
                    height: 400,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.out',
                    onComplete: () => ripple.remove()
                });
            }
        });
    });
}

// ================================
// DIMENSIONAL SHIFT ON PAGE HERO
// ================================

if (document.querySelector('.page-hero')) {
    const pageHero = document.querySelector('.page-hero');

    // Create dimension shift effect
    ScrollTrigger.create({
        trigger: pageHero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;
            pageHero.style.transform = `
                perspective(1000px)
                rotateX(${progress * 10}deg)
                scale(${1 - progress * 0.1})
            `;
            pageHero.style.filter = `brightness(${1 - progress * 0.3})`;
        }
    });
}

// ================================
// BREATHING EFFECT ON ENTIRE PAGE
// ================================

gsap.to('body', {
    '--breath-scale': 1.002,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

// ================================
// STAR FIELD BACKGROUND
// ================================

function createStarField() {
    const starField = document.createElement('div');
    starField.className = 'star-field';
    starField.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 0;
        opacity: 0.3;
    `;

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: ${1 + Math.random() * 2}px;
            height: ${1 + Math.random() * 2}px;
            background: ${Math.random() > 0.5 ? '#f8e800' : '#272860'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: twinkle ${2 + Math.random() * 3}s ease-in-out infinite;
        `;
        starField.appendChild(star);
    }

    // Add twinkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
        }
    `;
    document.head.appendChild(style);

    document.body.insertBefore(starField, document.body.firstChild);

    // Parallax effect for stars
    window.addEventListener('mousemove', (e) => {
        const stars = starField.querySelectorAll('div');
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        stars.forEach((star, index) => {
            const depth = (index % 5 + 1) / 5;
            gsap.to(star, {
                x: x * depth,
                y: y * depth,
                duration: 0.5
            });
        });
    });
}

createStarField();

// ================================
// ENERGY WAVES ON SCROLL
// ================================

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollSpeed = Math.abs(currentScrollY - lastScrollY);

    if (scrollSpeed > 10) {
        // Create energy wave
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: fixed;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, transparent, #f8e800, transparent);
            pointer-events: none;
            z-index: 9997;
            top: 50%;
        `;
        document.body.appendChild(wave);

        gsap.fromTo(wave,
            { scaleX: 0, opacity: 1 },
            {
                scaleX: 1,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                onComplete: () => wave.remove()
            }
        );
    }

    lastScrollY = currentScrollY;
});

// ================================
// TYPEWRITER EFFECT FOR TITLES
// ================================
gsap.utils.toArray('.project-title').forEach((title, index) => {
    const text = title.textContent;
    title.textContent = '';

    ScrollTrigger.create({
        trigger: title,
        start: 'top 80%',
        onEnter: () => {
            let i = 0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 30 + index * 10);
        },
        once: true
    });
});

// ================================
// GLITCH EFFECT ON NUMBERS
// ================================
gsap.utils.toArray('.project-number').forEach((number, index) => {
    ScrollTrigger.create({
        trigger: number,
        start: 'top 85%',
        onEnter: () => {
            // Glitch animation
            const glitchTl = gsap.timeline();
            for (let i = 0; i < 5; i++) {
                glitchTl.to(number, {
                    x: gsap.utils.random(-10, 10),
                    y: gsap.utils.random(-10, 10),
                    opacity: gsap.utils.random(0.3, 1),
                    duration: 0.05
                });
            }
            glitchTl.to(number, {
                x: 0,
                y: 0,
                opacity: 0.3,
                duration: 0.2
            });
        },
        once: true
    });
});

// ================================
// BOUNCING STATS REVEAL
// ================================
gsap.utils.toArray('.stat-box').forEach((stat, index) => {
    gsap.from(stat, {
        y: -100 + gsap.utils.random(-50, 50),
        rotation: gsap.utils.random(-360, 360),
        opacity: 0,
        duration: 1 + index * 0.1,
        ease: 'bounce.out',
        scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        delay: index * 0.15
    });
});

// ================================
// SECTION TRANSITION WIPES
// ================================
gsap.utils.toArray('.section').forEach((section, index) => {
    // Different wipe patterns for each section
    const wipePatterns = [
        'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Full
        'polygon(0 0, 0 0, 0 100%, 0 100%)',        // Left wipe
        'polygon(0 0, 100% 0, 100% 0, 0 0)',        // Top wipe
        'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' // Right wipe
    ];

    gsap.from(section, {
        clipPath: wipePatterns[(index + 1) % wipePatterns.length],
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });
});

// ================================
// MORPHING SHAPES
// ================================
if (document.querySelector('.floating-shapes')) {
    gsap.to('.shape-1', {
        morphSVG: 'circle',
        scale: gsap.utils.wrap([1, 1.5, 0.8]),
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

// ================================
// Console message
// ================================
console.log('%c🌌 OMENA - Unique Animation Showcase', 'color: #272860; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #f8e800;');
console.log('%c✨ Each section has DIFFERENT animations!', 'color: #f8e800; font-size: 14px; font-weight: bold;');
console.log('%c🎭 Diagonal wipes, spirals, waves, bounces & more', 'color: #272860; font-size: 12px;');
console.log('%c⚡ Typewriter effects, glitches & morphing shapes', 'color: #f8e800; font-size: 12px;');
console.log('%c🎨 Asymmetric layouts & reality-bending transitions', 'color: #272860; font-size: 12px; font-weight: bold;');
