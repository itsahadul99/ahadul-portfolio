import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

const LenisWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, // Smoothing duration
      easing: (t: number) => t * (2 - t), // Easing function for smooth effect
      orientation: 'vertical', // Vertical scrolling
    });

    lenisRef.current = lenis;

    // Smooth scroll loop
    const smoothScroll = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(smoothScroll); // Recurse with the next frame
    };

    requestAnimationFrame(smoothScroll);

    // Cleanup function to destroy Lenis when the component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;
