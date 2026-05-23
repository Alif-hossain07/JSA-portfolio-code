import { useEffect, useRef, useCallback } from 'react';

export default function Sports() {
  const sectionRef = useRef(null);

  return (
    <section id="sports" className="section sports-section" ref={sectionRef}>
      <div className="container">
        <div className="section-label">What We Play</div>
        <h2 className="section-title">Our <span className="highlight">Sports</span></h2>
        <div className="sports-grid">
          <div className="sport-card reveal" id="sport-cricket">
            <div className="sport-bg" style={{background: 'linear-gradient(135deg,#1a3a2a,#0d2b1a)'}}></div>
            <div className="sport-icon"><i className="fas fa-cricket"></i></div>
            <h3>Cricket</h3>
            <p>The heartbeat of JSA. We organize competitive cricket tournaments ranging from inter-village matches to district-level championships, fostering the spirit of the gentleman's game.</p>
            <ul className="sport-tags">
              <li>T20 Format</li>
              <li>One-Day Matches</li>
              <li>Inter-Village</li>
              <li>Youth Leagues</li>
            </ul>
            <div className="sport-hover-line"></div>
          </div>
          <div className="sport-card reveal" id="sport-football">
            <div className="sport-bg" style={{background: 'linear-gradient(135deg,#1a2a3a,#0d1b2b)'}}></div>
            <div className="sport-icon"><i className="fas fa-football"></i></div>
            <h3>Football</h3>
            <p>Football brings electric energy to Jhiltuly. Our football programs range from friendly kickabouts to full league tournaments, providing a platform for passionate players to shine.</p>
            <ul className="sport-tags">
              <li>Local Leagues</li>
              <li>Knockout Cups</li>
              <li>Youth Programs</li>
              <li>Friendly Matches</li>
            </ul>
            <div className="sport-hover-line"></div>
          </div>
          <div className="sport-card reveal" id="sport-other">
            <div className="sport-bg" style={{background: 'linear-gradient(135deg,#2a1a3a,#1b0d2b)'}}></div>
            <div className="sport-icon"><i className="fas fa-person-running"></i></div>
            <h3>More Sports</h3>
            <p>Beyond cricket and football, JSA hosts a variety of sporting events — from athletics and badminton to traditional Bangladeshi games — ensuring everyone finds their passion.</p>
            <ul className="sport-tags">
              <li>Athletics</li>
              <li>Badminton</li>
              <li>Traditional Games</li>
              <li>Annual Sports Day</li>
            </ul>
            <div className="sport-hover-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
