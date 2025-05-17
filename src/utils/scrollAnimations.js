export const initScrollAnimations = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Set up the Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          entry.target.classList.add('animate-on-scroll');
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe the content wrapper for animation
    const contentWrapper = document.querySelector('.hero-content-wrapper');
    if (contentWrapper) {
      observer.observe(contentWrapper);
    }
    
    // Handle scroll down button
    const scrollButton = document.querySelector('.scroll-down-button');
    if (scrollButton) {
      // Make scroll button disappear after scrolling down
      window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 0.5) {
          scrollButton.style.opacity = '0';
          scrollButton.style.pointerEvents = 'none';
        } else {
          scrollButton.style.opacity = '1';
          scrollButton.style.pointerEvents = 'auto';
        }
      });
    }
  });
};