import { useEffect, useRef } from 'react';

const FEATURES = [
  {
    icon: 'fas fa-users',
    title: 'Community Focused',
    desc: 'Building stronger bonds through sports and bringing the community together.',
  },
  {
    icon: 'fas fa-seedling',
    title: 'Talent Development',
    desc: 'Nurturing young athletes and providing platforms for growth and skill enhancement.',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Unity & Brotherhood',
    desc: 'Fostering unity, teamwork, and brotherhood among all members of our community.',
  },
];

const CARDS = [
  {
    icon: 'fas fa-cricket-bat-ball',
    title: 'Cricket Tournaments',
    borderColor: 'var(--primary, #2ecc71)',
    rotation: '-8deg',
    translate: '-20px, -10px',
  },
  {
    icon: 'fas fa-football',
    title: 'Football Leagues',
    borderColor: 'var(--accent, #f39c12)',
    rotation: '5deg',
    translate: '20px, 10px',
  },
  {
    icon: 'fas fa-trophy',
    title: 'Championship Events',
    borderColor: '#9b59b6',
    rotation: '-3deg',
    translate: '-10px, 20px',
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-label">Who We Are</div>
        <h2 className="section-title">About <span className="highlight">JSA</span></h2>
        <div className="about-grid">
          <div className="about-text reveal">
            <p className="about-lead">Jhiltuly Sports Association (JSA) is the official sports body representing the community of Jhiltuly, Faridpur.</p>
            <p>We are dedicated to promoting sportsmanship, teamwork, and physical fitness among the youth and people of all ages. By organizing local tournaments and events in cricket, football, and various other disciplines, we strive to create a vibrant sports culture in our region.</p>
            <p>Our mission is simple — to bring people together through the universal language of sport, nurture local talent, and put Jhiltuly on the sporting map of Bangladesh.</p>
            <div className="about-features">
              <div className="feature-item">
                <span className="feature-icon"><i className="fas fa-users"></i></span>
                <div><strong>Community Focused</strong>
                  <p>Events designed for all ages and skill levels</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon"><i className="fas fa-seedling"></i></span>
                <div><strong>Talent Development</strong>
                  <p>Nurturing the next generation of athletes</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon"><i className="fas fa-handshake"></i></span>
                <div><strong>Unity &amp; Brotherhood</strong>
                  <p>Connecting families and communities</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual reveal">
            <div className="about-card-stack">
              <div className="acard acard-1">
                <div className="acard-icon"><i className="fas fa-cricket"></i></div>
                <div className="acard-text">Cricket Tournaments</div>
              </div>
              <div className="acard acard-2">
                <div className="acard-icon"><i className="fas fa-football"></i></div>
                <div className="acard-text">Football Leagues</div>
              </div>
              <div className="acard acard-3">
                <div className="acard-icon"><i className="fas fa-trophy"></i></div>
                <div className="acard-text">Championship Events</div>
              </div>
              <div className="about-center-logo">
                <img src="/images/JSA LOGO 2.png" alt="JSA Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
