// Function to initialize touch interactions and improve scrolling experience
export const initTouchHandlers = () => {
  // Only run on mobile devices
  if (window.innerWidth > 768) return;
  
  document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    // Track touch start position
    let touchStartY = 0;
    let scrollStarted = false;
    
    // Handle touch start
    heroSection.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
      scrollStarted = false;
    }, { passive: true });
    
    // Handle touch move
    heroSection.addEventListener('touchmove', (e) => {
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;
      
      // If scrolling down and we're at the top of hero section
      if (diff > 30 && window.scrollY <= 10 && !scrollStarted) {
        scrollStarted = true;
        
        // Allow normal scrolling through the section
        document.body.style.overflow = 'auto';
        
        // Close any open drawer
        const mobileDrawer = document.querySelector('.mobile-cv-drawer.show');
        if (mobileDrawer) {
          mobileDrawer.classList.remove('show');
          const button = document.querySelector('.pull-up-button.active');
          if (button) button.classList.remove('active');
        }
      }
    }, { passive: true });
  });
};

// Export to import in your main.jsx or index.js