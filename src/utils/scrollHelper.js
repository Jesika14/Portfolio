// Helper function to handle scrolling to next section
export const scrollToNextSection = () => {
  const heroSection = document.getElementById('hero');
  const aboutSection = document.getElementById('about');
  
  if (heroSection && aboutSection) {
    const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
    const yOffset = aboutSection.offsetTop - navbarHeight;
    window.scrollTo({ top: yOffset, behavior: "smooth" });
  }
};

// Initialize scroll button
export const initScrollButton = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.querySelector('.scroll-down-button');
    if (scrollButton) {
      scrollButton.addEventListener('click', scrollToNextSection);
    }
  });
};

// Initialize scroll button visibility
export const initScrollButtonVisibility = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.querySelector('.scroll-down-button');
    if (!scrollButton) return;
    
    // Hide button when scrolled down
    window.addEventListener('scroll', () => {
      // Hide button when scrolled down beyond viewport height
      if (window.scrollY > window.innerHeight * 0.7) {
        scrollButton.style.opacity = '0';
        scrollButton.style.pointerEvents = 'none';
      } else {
        scrollButton.style.opacity = '1';
        scrollButton.style.pointerEvents = 'auto';
      }
    });
  });
};