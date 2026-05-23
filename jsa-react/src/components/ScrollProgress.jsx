import { useState, useEffect, useCallback } from 'react';


export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const totalScrollable = docHeight - windowHeight;
    const percentage = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
    setWidth(percentage);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="scroll-progress" id="scrollProgress">
      <div className="scroll-progress-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
}
