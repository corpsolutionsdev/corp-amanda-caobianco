// ================================
// AOS (Animate On Scroll) Initialization
// ================================
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 0
});

// ================================
// DOM Elements
// ================================
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenuMobile = document.getElementById('navMenuMobile');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const portfolioGrid = document.getElementById('portfolioGrid');
const scrollToTopBtn = document.getElementById('scrollToTop');
const whatsappFloat = document.querySelector('.whatsapp-float');

// ================================
// Navbar Scroll Effect & Scroll to Top Button
// ================================
window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
    
    // Change buttons color on dark sections (contact/footer)
    const contactSection = document.getElementById('contact');
    const footer = document.querySelector('.footer');
    
    if (contactSection && footer) {
        const contactTop = contactSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // If scroll position is within contact section or footer
        if (window.scrollY >= contactTop - 200) {
            scrollToTopBtn.classList.add('light');
            if (whatsappFloat) {
                whatsappFloat.classList.add('light');
            }
        } else {
            scrollToTopBtn.classList.remove('light');
            if (whatsappFloat) {
                whatsappFloat.classList.remove('light');
            }
        }
    }
});

// ================================
// Mobile Menu Toggle
// ================================
function toggleMobileMenu() {
    navMenuMobile.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenuMobile.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    navMenuMobile.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

mobileMenuToggle.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on overlay
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking on a link
navMenuMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenuMobile.classList.contains('active')) {
        closeMobileMenu();
    }
});

// ================================
// Scroll to Top Button
// ================================
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================
// Packages Carousel - Manual Navigation
// ================================
const packagesCarousel = document.getElementById('packagesCarousel');
const packagesPrev = document.getElementById('packagesPrev');
const packagesNext = document.getElementById('packagesNext');

if (packagesCarousel && packagesPrev && packagesNext) {
    const scrollAmount = 420; // Amount to scroll on button click

    // Manual navigation
    packagesNext.addEventListener('click', () => {
        packagesCarousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    packagesPrev.addEventListener('click', () => {
        packagesCarousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Update navigation buttons appearance
    function updateNavButtons() {
        const maxScroll = packagesCarousel.scrollWidth - packagesCarousel.clientWidth;
        
        if (packagesCarousel.scrollLeft <= 0) {
            packagesPrev.style.opacity = '0.5';
            packagesPrev.style.cursor = 'not-allowed';
        } else {
            packagesPrev.style.opacity = '1';
            packagesPrev.style.cursor = 'pointer';
        }

        if (packagesCarousel.scrollLeft >= maxScroll - 1) {
            packagesNext.style.opacity = '0.5';
            packagesNext.style.cursor = 'not-allowed';
        } else {
            packagesNext.style.opacity = '1';
            packagesNext.style.cursor = 'pointer';
        }
    }

    packagesCarousel.addEventListener('scroll', updateNavButtons);
    window.addEventListener('resize', updateNavButtons);
    updateNavButtons(); // Initial check
}

// ================================
// WhatsApp Function
// ================================
function openWhatsApp(message) {
    const phoneNumber = '5547984617179';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    return false;
}

// ================================
// Portfolio Grid - Load Images
// ================================
function loadPortfolioImages() {
    const totalImages = 32; // Total number of portfolio images
    
    for (let i = 1; i <= totalImages; i++) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        const img = document.createElement('img');
        img.src = `src/img/portifolio/portifolio${i}.webp`;
        img.alt = `Portfolio ${i}`;
        img.loading = 'lazy';
        
        // Error handling for missing images
        img.onerror = function() {
            portfolioItem.style.display = 'none';
        };
        
        portfolioItem.appendChild(img);
        portfolioGrid.appendChild(portfolioItem);
    }
}

// Load portfolio images on page load
loadPortfolioImages();

// ================================
// Current Year in Footer
// ================================
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ================================
// Smooth Scroll with Offset for Fixed Navbar
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// ================================
// Portfolio Image Lightbox (Simple Implementation)
// ================================
portfolioGrid.addEventListener('click', (e) => {
    const portfolioItem = e.target.closest('.portfolio-item');
    if (portfolioItem) {
        const img = portfolioItem.querySelector('img');
        if (img) {
            openLightbox(img.src, img.alt);
        }
    }
});

function openLightbox(src, alt) {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: zoom-out;
        animation: fadeIn 0.3s ease;
    `;
    
    // Create image
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
    `;
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        color: #314528;
        font-size: 3rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = '#fff';
        closeBtn.style.transform = 'scale(1.1)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.9)';
        closeBtn.style.transform = 'scale(1)';
    });
    
    // Append elements
    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Close lightbox
    const closeLightbox = () => {
        lightbox.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            lightbox.remove();
            document.body.style.overflow = '';
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Add fadeIn and fadeOut animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// ================================
// Scroll to Top on Page Load
// ================================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ================================
// Active Navigation Link Highlight
// ================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a, .nav-menu-mobile a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - navbar.offsetHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ================================
// Lazy Loading Enhancement
// ================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ================================
// Prevent Right Click on Images (Optional Protection)
// ================================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // Uncomment the line below to prevent right-click on images
        // e.preventDefault();
    });
});

// ================================
// Performance Optimization - Debounce Scroll Events
// ================================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

