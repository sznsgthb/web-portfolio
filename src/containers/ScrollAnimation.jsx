import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimation.css';

function ScrollAnimation({ children, animation = 'fadeIn', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? animation : ''}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimation;
