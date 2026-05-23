import { useState } from 'react';

export default function Events() {
  const [filter, setFilter] = useState('all');

  return (
    <section id="events" className="section events-section">
      <div className="container">
        <div className="section-label">What's Happening</div>
        <h2 className="section-title">Events &amp; <span className="highlight">Tournaments</span></h2>
        <div className="events-tabs">
          <button className={`etab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Events</button>
          <button className={`etab ${filter === 'cricket' ? 'active' : ''}`} onClick={() => setFilter('cricket')}>Cricket</button>
          <button className={`etab ${filter === 'football' ? 'active' : ''}`} onClick={() => setFilter('football')}>Football</button>
        </div>
        <div className="events-grid">
          
          <div className="event-card reveal" style={{display: filter === 'all' || filter === 'cricket' ? 'flex' : 'none'}}>
            <div className="event-badge">Cricket</div>
            <div className="event-icon"><i className="fas fa-cricket"></i></div>
            <div className="event-info">
              <h3>Jhiltuly Premier League</h3>
              <p>Annual T20 cricket championship — the most prestigious cricket event in Jhiltuly, attracting top talent from across Faridpur district.</p>
              <div className="event-meta">
                <span><i className="fas fa-map-pin"></i> Jhiltuly Ground</span>
                <span><i className="fas fa-calendar"></i> Annual</span>
              </div>
            </div>
            <a href="https://www.facebook.com/JhiltulySA" target="_blank" rel="noreferrer" className="event-link">View on Facebook →</a>
          </div>

          <div className="event-card reveal" style={{display: filter === 'all' || filter === 'football' ? 'flex' : 'none'}}>
            <div className="event-badge" style={{background:'#1e4a7a'}}>Football</div>
            <div className="event-icon"><i className="fas fa-football"></i></div>
            <div className="event-info">
              <h3>JSA Football Cup</h3>
              <p>A knockout football tournament that draws teams from surrounding villages and creates unforgettable moments of community spirit and competition.</p>
              <div className="event-meta">
                <span><i className="fas fa-map-pin"></i> Jhiltuly Field</span>
                <span><i className="fas fa-calendar"></i> Seasonal</span>
              </div>
            </div>
            <a href="https://www.facebook.com/JhiltulySA" target="_blank" rel="noreferrer" className="event-link">View on Facebook →</a>
          </div>

          <div className="event-card reveal" style={{display: filter === 'all' || filter === 'cricket' ? 'flex' : 'none'}}>
            <div className="event-badge">Cricket</div>
            <div className="event-icon"><i className="fas fa-trophy"></i></div>
            <div className="event-info">
              <h3>Inter-Village Cricket</h3>
              <p>Friendly but fierce! Inter-village cricket matches that build bonds between communities and produce exciting cricket action for spectators.</p>
              <div className="event-meta">
                <span><i className="fas fa-map-pin"></i> Multiple Venues</span>
                <span><i className="fas fa-calendar"></i> Throughout Year</span>
              </div>
            </div>
            <a href="https://www.facebook.com/JhiltulySA" target="_blank" rel="noreferrer" className="event-link">View on Facebook →</a>
          </div>

          <div className="event-card reveal" style={{display: filter === 'all' || filter === 'football' ? 'flex' : 'none'}}>
            <div className="event-badge" style={{background:'#1e4a7a'}}>Football</div>
            <div className="event-icon"><i className="fas fa-person-running"></i></div>
            <div className="event-info">
              <h3>Youth Football League</h3>
              <p>Dedicated to developing young football talent, this league gives promising players their first taste of competitive football in a nurturing environment.</p>
              <div className="event-meta">
                <span><i className="fas fa-map-pin"></i> Jhiltuly Field</span>
                <span><i className="fas fa-calendar"></i> Youth Special</span>
              </div>
            </div>
            <a href="https://www.facebook.com/JhiltulySA" target="_blank" rel="noreferrer" className="event-link">View on Facebook →</a>
          </div>

          <div className="event-card reveal" style={{display: filter === 'all' || filter === 'cricket' ? 'flex' : 'none'}}>
            <div className="event-badge">Cricket</div>
            <div className="event-icon"><i className="fas fa-star"></i></div>
            <div className="event-info">
              <h3>Night Cricket Special</h3>
              <p>Under the lights, cricket takes on a magical quality. JSA's special night cricket events are among the most talked-about sporting spectacles in the area.</p>
              <div className="event-meta">
                <span><i className="fas fa-map-pin"></i> Main Ground</span>
                <span><i className="fas fa-calendar"></i> Special Edition</span>
              </div>
            </div>
            <a href="https://www.facebook.com/JhiltulySA" target="_blank" rel="noreferrer" className="event-link">View on Facebook →</a>
          </div>

          <div className="event-card reveal" style={{display: filter === 'all' || filter === 'football' ? 'flex' : 'none'}}>
            <div className="event-badge" style={{background:'#1e4a7a'}}>Football</div>
            <div className="event-icon"><i className="fas fa-bullseye"></i></div>
            <div className="event-info">
              <h3>Annual Sports Day</h3>
              <p>A grand celebration featuring football, athletics, and various games — the biggest community sporting event of the year in Jhiltuly.</p>
              <div className="event-meta">
                <span><i className="fas fa-map-pin"></i> Jhiltuly Sports Complex</span>
                <span><i className="fas fa-calendar"></i> Annual</span>
              </div>
            </div>
            <a href="https://www.facebook.com/JhiltulySA" target="_blank" rel="noreferrer" className="event-link">View on Facebook →</a>
          </div>

        </div>
      </div>
    </section>
  );
}
