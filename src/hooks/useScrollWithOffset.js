import { useCallback } from 'react';

export const useScrollWithOffset = () => {
  return useCallback((elementId) => {
    const element = document.getElementById(elementId);
    const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;

    if (element) {
      const offset = 5;
      const yOffset = element.offsetTop - navbarHeight - offset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  }, []);
};