import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export const useScroll = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const scrollToTop = () =>
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });

  const handleScroll = () => {
    setIsAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollToTop, isAtTop };
};
