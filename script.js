document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth scrolling for navigation links ---
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // The html { scroll-behavior: smooth; } in CSS handles this automatically.
            // This script part is for adding active class.
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // --- Intersection Observer for scroll animations ---
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: unobserve after animation to save resources
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    hiddenElements.forEach(el => observer.observe(el));

    // --- Dynamic text typing effect ---
    const dynamicText = document.querySelector('.dynamic-text');
    const textToType = "웹 개발자 & 크리에이터";
    let index = 0;

    function type() {
        if (index < textToType.length) {
            dynamicText.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust typing speed here
        }
    }
    
    // Clear initial text and start typing
    dynamicText.textContent = '';
    setTimeout(type, 1000); // Delay start of typing

});
