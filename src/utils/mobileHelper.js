// Handle potential issues with mobile viewport and scrolling

export const initMobileHelpers = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Only on mobile
    if (window.innerWidth > 768) return;
    
    // Fix for mobile browsers changing viewport on keyboard open
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, height=device-height';
    }
    
    // Fix for potential scrolling issues when content is shown
    const handlePullUpButtonClick = () => {
      const button = document.querySelector('.pull-up-button');
      const contentWrapper = document.querySelector('.hero-content-wrapper');
      
      if (!button || !contentWrapper) return;
      
      const isContentShown = button.classList.contains('active');
      
      if (isContentShown) {
        // When content is shown, prevent scrolling the background
        document.body.style.overflow = 'hidden';
      } else {
        // When content is hidden, allow scrolling
        document.body.style.overflow = 'auto';
      }
    };
    
    // Add event listener to the pull-up button
    const pullUpButton = document.querySelector('.pull-up-button');
    if (pullUpButton) {
      pullUpButton.addEventListener('click', handlePullUpButtonClick);
    }
    
    // Add event listener for escape key to close content
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const button = document.querySelector('.pull-up-button.active');
        if (button) {
          button.click();
        }
      }
    });
  });
};