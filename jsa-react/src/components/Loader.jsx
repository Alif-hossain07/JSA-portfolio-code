import { useState, useEffect } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`} id="loader">
      <img src="/images/JSA LOGO 2.png" alt="JSA" className="loader-logo" />
      <div className="loader-bar">
        <div className="loader-fill"></div>
      </div>
      <div className="loader-text">LOADING JSA</div>
    </div>
  );
}
