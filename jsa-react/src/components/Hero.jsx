import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const PARTICLE_COLORS = ['#2ecc71', '#f39c12', '#3498db', '#9b59b6', '#e74c3c'];
const FULL_SUBTITLE = 'Uniting the community through cricket, football & the spirit of sport. Building champions on and off the field.';

const STATS_DATA = [
  { value: 479, label: 'Followers', suffix: '' },
  { value: 2, label: 'Sports', suffix: '' },
  { value: 2025, label: 'Founded', suffix: '' },
];

function generateParticles(count) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 6 + 3; // 3-9px
    particles.push({
      id: i,
      size,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 5}s`,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    });
  }
  return particles;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function useAnimatedCounter(target, duration, shouldStart) {
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shouldStart, target, duration]);

  return count;
}

export default function Hero() {
  const [subtitle, setSubtitle] = useState('');
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const typingStarted = useRef(false);

  const particles = useMemo(() => generateParticles(30), []);

  // Typing effect
  useEffect(() => {
    if (typingStarted.current) return;
    typingStarted.current = true;

    let charIndex = 0;
    let typingTimer;

    const delayTimer = setTimeout(() => {
      typingTimer = setInterval(() => {
        charIndex++;
        setSubtitle(FULL_SUBTITLE.slice(0, charIndex));
        if (charIndex >= FULL_SUBTITLE.length) {
          clearInterval(typingTimer);
        }
      }, 22);
    }, 600);

    return () => {
      clearTimeout(delayTimer);
      if (typingTimer) clearInterval(typingTimer);
    };
  }, []);

  // IntersectionObserver for stats counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const followers = useAnimatedCounter(479, 1800, statsVisible);
  const sports = useAnimatedCounter(2, 1800, statsVisible);
  const founded = useAnimatedCounter(2025, 1800, statsVisible);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-particles" id="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              backgroundColor: p.color,
            }}
          ></div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge"> Est. 2025 · Faridpur, Bangladesh</div>
        <h1 className="hero-title">
          Jhiltuly<br />
          <span className="hero-title-accent">Sports Association</span>
        </h1>
        <p className="hero-sub">
          {subtitle}
          <span className="typing-cursor">|</span>
        </p>
        <div className="hero-btns">
          <a href="#events" className="btn btn-primary" onClick={(e) => handleLinkClick(e, 'events')}>Our Events</a>
          <a href="#about" className="btn btn-outline" onClick={(e) => handleLinkClick(e, 'about')}>Learn More</a>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div className="hstat"><span className="hstat-num">{followers}</span><span className="hstat-label">Followers</span></div>
          <div className="hstat-divider"></div>
          <div className="hstat"><span className="hstat-num">{sports}</span><span className="hstat-label">Sports</span></div>
          <div className="hstat-divider"></div>
          <div className="hstat"><span className="hstat-num">{founded}</span><span className="hstat-label">Founded</span></div>
        </div>
      </div>
      <div className="hero-logo-wrap">
        <div className="hero-logo-ring"></div>
        <img src="/images/JSA LOGO 2.png" alt="JSA Logo" className="hero-logo-img" />
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
