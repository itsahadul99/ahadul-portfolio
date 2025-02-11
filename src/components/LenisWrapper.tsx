import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

const LenisWrapper: React.FC<{ children: React.ReactNode; disabled?: boolean }> = ({ children, disabled }) => {
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    if (disabled) return; 
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t: number) => t * (2 - t),
      orientation: 'vertical',
    });

    lenisRef.current = lenis;

    const smoothScroll = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(smoothScroll);
    };

    requestAnimationFrame(smoothScroll);

    return () => {
      lenis.destroy();
    };
  }, [disabled]);

  return <>{children}</>;
};

export default LenisWrapper;
