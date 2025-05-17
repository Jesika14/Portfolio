// Helper function to initialize animation observers
export const initAnimationObservers = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const animateOnScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(animateOnScroll, options);
    
    // Observe project titles
    document.querySelectorAll('.project-title').forEach(title => {
      // Remove any existing animation
      title.style.animation = 'none';
      // Add observer class
      title.classList.add('observe-animation');
      observer.observe(title);
    });
  });
};