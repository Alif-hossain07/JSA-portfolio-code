export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/JSA LOGO 2.png" alt="JSA Logo" className="footer-logo" />
            <div>
              <div className="footer-name">Jhiltuly Sports Association</div>
              <div className="footer-tagline">Uniting the community through sport</div>
            </div>
          </div>
          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#sports">Sports</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Sports</h4>
            <ul>
              <li><a href="#sports">Cricket</a></li>
              <li><a href="#sports">Football</a></li>
              <li><a href="#sports">More Sports</a></li>
              <li><a href="#events">Tournaments</a></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://www.facebook.com/JhiltulySA" target="_blank" rel="noreferrer">Facebook Page</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#contact">Join JSA</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Jhiltuly Sports Association · Faridpur, Bangladesh · All Rights Reserved</p>
          <p>Built with <i className="fas fa-heart"></i> for the community of Jhiltuly</p>
        </div>
      </div>
    </footer>
  );
}
