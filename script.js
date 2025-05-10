// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Promo popup functionality
    const promoBtn = document.getElementById('promoBtn');
    const promoPopup = document.getElementById('promoPopup');
    const closePopup = document.querySelector('.close-popup');
    
    // Show popup when "Learn More" button is clicked
    if (promoBtn) {
        promoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            promoPopup.style.display = 'flex';
        });
    }
    
    // Close popup when X is clicked
    if (closePopup) {
        closePopup.addEventListener('click', function() {
            promoPopup.style.display = 'none';
        });
    }
    
    // Close popup when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === promoPopup) {
            promoPopup.style.display = 'none';
        }
    });
    
    // Automatically show popup after 5 seconds (optional)
    setTimeout(function() {
        promoPopup.style.display = 'flex';
    }, 5000);
    
    // Form submission in contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const interest = document.getElementById('interest').value;
            
            // Simple validation
            if (name && email && interest) {
                // Show success message
                alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon about your interest in ${interest}.`);
                
                // Reset form
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only for links within the same page
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});