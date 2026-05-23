export default function Testimonials() {
  return (
    <section className="section" style={{background: 'var(--navy-mid)'}}>
      <div className="container">
        <div className="section-label">Community Voices</div>
        <h2 className="section-title">What People <span className="highlight">Say</span></h2>
        <div className="testimonial-slider" id="testSlider">
          <div className="testimonial-card">
            <div className="test-quote">"JSA has transformed the sports scene in Jhiltuly. The tournaments are well organized
              and bring so much excitement to our community!"</div>
            <div className="test-author">
              <div className="test-avatar"><i className="fas fa-cricket"></i></div>
              <div>
                <div className="test-name">Local Cricket Player</div>
                <div className="test-role">Premier League Participant</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="test-quote">"Thanks to JSA, our youth now have a proper platform to showcase their football
              skills. It's inspiring to watch them grow."</div>
            <div className="test-author">
              <div className="test-avatar"><i className="fas fa-football"></i></div>
              <div>
                <div className="test-name">Community Member</div>
                <div className="test-role">Football Supporter</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="test-quote">"The spirit of sportsmanship that JSA promotes is remarkable. They are truly bringing
              people together through sports."</div>
            <div className="test-author">
              <div className="test-avatar"><i className="fas fa-handshake"></i></div>
              <div>
                <div className="test-name">Sports Enthusiast</div>
                <div className="test-role">Faridpur District</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="test-quote">"As a parent, I'm grateful for JSA's youth programs. My children are learning
              discipline and teamwork through cricket and football."</div>
            <div className="test-author">
              <div className="test-avatar"><i className="fas fa-users"></i></div>
              <div>
                <div className="test-name">Parent</div>
                <div className="test-role">Jhiltuly Resident</div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-dots" id="sliderDots"></div>
      </div>
    </section>
  );
}
