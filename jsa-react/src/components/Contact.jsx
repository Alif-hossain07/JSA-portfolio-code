import { useState, useEffect } from 'react';

export default function Contact() {
  const [btnText, setBtnText] = useState('Send Message ');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('Sending...');
    setTimeout(() => {
      setSuccess(true);
      setBtnText('Send Message ');
      e.target.reset();
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  useEffect(() => {
    const reveals = document.querySelectorAll('#contact .reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Contact <span className="highlight">Us</span></h2>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Join the JSA Family</h3>
            <p>Whether you're a player, supporter, or sponsor — we'd love to have you as part of the Jhiltuly Sports
              Association community. Reach out to us through Facebook or come visit us at our events!</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon"><i className="fas fa-map-pin"></i></span>
                <div><strong>Location</strong>
                  <p>Jhiltuly, Faridpur, Bangladesh</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><i className="fas fa-calendar"></i></span>
                <div><strong>Founded</strong>
                  <p>2025</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><i className="fas fa-medal"></i></span>
                <div><strong>Sports</strong>
                  <p>Cricket, Football &amp; More</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/JhiltulySA" target="_blank" rel="noreferrer" className="social-btn facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
              </a>
            </div>
          </div>
          <div className="contact-form-wrap reveal">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="form-group">
                <label htmlFor="fname">Your Name</label>
                <input type="text" id="fname" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="femail">Email Address</label>
                <input type="email" id="femail" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="fsubject">Subject</label>
                <select id="fsubject" name="subject">
                  <option value="">Select a subject</option>
                  <option>Join as Player</option>
                  <option>Become a Sponsor</option>
                  <option>Event Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="fmsg">Message</label>
                <textarea id="fmsg" name="message" rows="4" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                {btnText} <i className="fas fa-rocket"></i>
              </button>
              {success && (
                <div className="form-success" style={{display: 'block'}}>✅ Message sent! We'll get back to you soon.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
