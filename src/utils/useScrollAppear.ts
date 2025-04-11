
import { useEffect, useRef } from 'react';

export const useScrollAppear = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    const currentRef = ref.current;
    if (currentRef) {
      const elements = currentRef.querySelectorAll('.scroll-appear');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll('.scroll-appear');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  
  return ref;
};
