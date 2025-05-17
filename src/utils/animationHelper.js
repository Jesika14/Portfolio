export const initAnimationHelpers = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Watch for reveal button clicks
    const revealButton = document.querySelector('.reveal-button');
    
    if (revealButton) {
      revealButton.addEventListener('click', () => {
        // Adjust scroll position and height after animation
        setTimeout(() => {
          // Check if the button is now in "active" state
          const isActive = revealButton.classList.contains('active');
          
          if (isActive) {
            // Button has been clicked to show content
            // Make sure the expanded content is visible
            window.scrollTo({
              top: window.scrollY + 100, 
              behavior: 'smooth'
            });
          } else {
            // Button has been clicked to hide content
            // Scroll back to see the model
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
              const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
              window.scrollTo({
                top: heroSection.offsetTop - navbarHeight,
                behavior: 'smooth'
              });
            }
          }
        }, 300); // Wait for animation to start
      });
    }
    
    // Handle resize events to ensure proper layout
    window.addEventListener('resize', () => {
      const heroSection = document.querySelector('.hero-section');
      const revealButton = document.querySelector('.reveal-button');
      
      if (window.innerWidth > 768) {
        // On desktop, reset any mobile-specific styles
        if (heroSection) {
          heroSection.classList.remove('expanded');
        }
        
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
          heroContent.classList.remove('hidden');
        }
      } else {
        // On mobile, make sure the state matches the button
        if (revealButton && heroSection) {
          const isActive = revealButton.classList.contains('active');
          if (isActive) {
            heroSection.classList.add('expanded');
          } else {
            heroSection.classList.remove('expanded');
          }
        }
      }
    });
  });
};