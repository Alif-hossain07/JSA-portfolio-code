import { useEffect, useRef, useState } from 'react';

function useAnimatedCounter(target, duration, shouldStart) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [shouldStart, target, duration]);
  return count;
}

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const f1 = useAnimatedCounter(479, 1800, visible);
  const f2 = useAnimatedCounter(10, 1800, visible);
  const f3 = useAnimatedCounter(2, 1800, visible);
  const f4 = useAnimatedCounter(1, 1800, visible);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-bg-pattern"></div>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item reveal">
            <div className="stat-num">{f1}</div>
            <div className="stat-label">Facebook Followers</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-num">{f2}</div>
            <div className="stat-label">Events Organized</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-num">{f3}</div>
            <div className="stat-label">Sports Disciplines</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-num">{f4}</div>
            <div className="stat-label">Year of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
