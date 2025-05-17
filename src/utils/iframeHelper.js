/**
 * Helper to prevent zoom in iframe on mobile devices
 */
export const preventIframeZoom = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Target the iframe
    const iframe = document.querySelector('.hero-iframe');
    if (!iframe) return;
    
    // Prevent default touchmove behavior on the iframe container
    const iframeContainer = document.querySelector('.hero-section-model');
    if (iframeContainer) {
      iframeContainer.addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      }, { passive: false });
      
      // For iOS Safari which might still allow zooming
      iframeContainer.addEventListener('gesturestart', (e) => {
        e.preventDefault();
      }, { passive: false });
      
      iframeContainer.addEventListener('gesturechange', (e) => {
        e.preventDefault();
      }, { passive: false });
    }
    
    // Add a transparent overlay to prevent direct interaction with the iframe
    // while still allowing the 3D model to be visible and rotatable
    const createOverlay = () => {
      // Only for mobile
      if (window.innerWidth >= 768) return;
      
      const overlay = document.createElement('div');
      overlay.className = 'iframe-touch-overlay';
      overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        pointer-events: none;
      `;
      
      if (iframeContainer) {
        iframeContainer.appendChild(overlay);
      }
    };
    
    createOverlay();
    
    // Listen for window resize to recreate overlay if needed
    window.addEventListener('resize', () => {
      const existingOverlay = document.querySelector('.iframe-touch-overlay');
      if (existingOverlay) {
        existingOverlay.remove();
      }
      createOverlay();
    });
  });
};