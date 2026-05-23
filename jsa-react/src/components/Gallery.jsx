import { useState } from 'react';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openLightbox = (imgSrc, title, desc, fbUrl) => {
    setSelectedItem({ imgSrc, title, desc, fbUrl });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <section id="gallery" className="section gallery-section">
        <div className="container">
          <div className="section-label">Moments</div>
          <h2 className="section-title">Our <span className="highlight">Gallery</span></h2>
          <p className="gallery-sub">Relive the best moments from JSA events. A picture is worth a thousand cheers!</p>
          
          <div className="gallery-grid">
            <div className="gallery-item gi-large reveal" onClick={() => openLightbox('fas fa-cricket', 'Cricket Championship', 'The intense final match of the Jhiltuly Premier League.', 'https://www.facebook.com/JhiltulySA')}>
              <div className="gallery-item-placeholder" style={{background: 'linear-gradient(135deg,#0f3020,#1a5a35)'}}><i className="fas fa-cricket"></i></div>
              <div className="gallery-overlay">
                <span className="go-text">Cricket Championship</span>
              </div>
            </div>

            <div className="gallery-item reveal" onClick={() => openLightbox('fas fa-football', 'Football Match', 'Action-packed moments from the JSA Football Cup.', 'https://www.facebook.com/JhiltulySA')}>
              <div className="gallery-item-placeholder" style={{background: 'linear-gradient(135deg,#0f2030,#1a3a5a)'}}><i className="fas fa-football"></i></div>
              <div className="gallery-overlay">
                <span className="go-text">Football Match</span>
              </div>
            </div>

            <div className="gallery-item reveal" onClick={() => openLightbox('fas fa-trophy', 'Trophy Ceremony', 'Celebrating the champions with the community.', 'https://www.facebook.com/JhiltulySA')}>
              <div className="gallery-item-placeholder" style={{background: 'linear-gradient(135deg,#30200f,#5a3a1a)'}}><i className="fas fa-trophy"></i></div>
              <div className="gallery-overlay">
                <span className="go-text">Trophy Ceremony</span>
              </div>
            </div>

            <div className="gallery-item reveal" onClick={() => openLightbox('fas fa-celebration', 'Sports Day', 'Fun, games, and laughter at the Annual Sports Day.', 'https://www.facebook.com/JhiltulySA')}>
              <div className="gallery-item-placeholder" style={{background: 'linear-gradient(135deg,#200f30,#3a1a5a)'}}><i className="fas fa-medal"></i></div>
              <div className="gallery-overlay">
                <span className="go-text">Sports Day</span>
              </div>
            </div>

            <div className="gallery-item gi-large reveal" onClick={() => openLightbox('fas fa-people-group', 'Community Event', 'Bringing everyone together for a cause.', 'https://www.facebook.com/JhiltulySA')}>
              <div className="gallery-item-placeholder" style={{background: 'linear-gradient(135deg,#0f2820,#1a4a38)'}}><i className="fas fa-people-group"></i></div>
              <div className="gallery-overlay">
                <span className="go-text">Community Event</span>
              </div>
            </div>
          </div>

          <div className="gallery-cta">
            <a href="https://www.facebook.com/JhiltulySA" target="_blank" rel="noreferrer" className="btn btn-outline">
              <i className="fab fa-facebook"></i> View More on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxOpen && selectedItem && (
        <div className="lightbox-overlay active" id="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-close" id="lbClose" onClick={closeLightbox}><i className="fas fa-times"></i></span>
            <div className="lb-icon" id="lbImg"><i className={selectedItem.imgSrc}></i></div>
            <div className="lb-info">
              <h3 id="lbTitle">{selectedItem.title}</h3>
              <p id="lbDesc">{selectedItem.desc}</p>
              <a href={selectedItem.fbUrl} target="_blank" rel="noreferrer" id="lbLink" className="btn btn-primary" style={{marginTop:'16px'}}>
                View Original Post →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
