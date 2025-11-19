import { useState, useEffect } from 'react';

export const useScrollBehavior = (threshold = 10, hideThreshold = 200) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      
      // Ignorar micro-movimientos
      if (scrollDifference < 5) return;
      
      // Detectar dirección
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      
      // Top absoluto
      if (currentScrollY < threshold) {
        setIsScrolled(false);
        setIsVisible(true);
      } 
      // Scroll down - ocultar
      else if (direction === 'down' && currentScrollY > hideThreshold) {
        setIsVisible(false);
        setIsScrolled(true);
      } 
      // Scroll up - mostrar
      else if (direction === 'up' && currentScrollY > threshold) {
        setIsVisible(true);
        setIsScrolled(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, threshold, hideThreshold]);

  return { isScrolled, isVisible, scrollDirection };
};