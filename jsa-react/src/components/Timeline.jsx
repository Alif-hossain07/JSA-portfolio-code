export default function Timeline() {
  return (
    <section className="section" style={{background: 'var(--navy)'}}>
      <div className="container">
        <div className="section-label">Our Story</div>
        <h2 className="section-title">The JSA <span className="highlight">Journey</span></h2>
        <div className="timeline">
          <div className="tl-item reveal">
            <div className="tl-dot"></div>
            <div className="tl-content">
              <div className="tl-year">2025</div>
              <h4>JSA Founded</h4>
              <p>Jhiltuly Sports Association was established with a vision to unite the community through sport.</p>
            </div>
          </div>
          <div className="tl-item reveal">
            <div className="tl-dot"></div>
            <div className="tl-content">
              <div className="tl-year">2025</div>
              <h4>First Cricket Tournament</h4>
              <p>The inaugural Jhiltuly Premier League attracted teams from across Faridpur district.</p>
            </div>
          </div>
          <div className="tl-item reveal">
            <div className="tl-dot"></div>
            <div className="tl-content">
              <div className="tl-year">2025</div>
              <h4>Football League Launch</h4>
              <p>JSA expanded into football, creating the first organized league in the area.</p>
            </div>
          </div>
          <div className="tl-item reveal">
            <div className="tl-dot"></div>
            <div className="tl-content">
              <div className="tl-year">2025-26</div>
              <h4>Growing Community</h4>
              <p>With 479+ followers and counting, JSA continues to grow and inspire Jhiltuly's sports culture.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
