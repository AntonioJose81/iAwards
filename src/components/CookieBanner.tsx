import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieBanner.module.css';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p>
          Utilizamos cookies para ofrecerte la mejor experiencia en nuestra web. Al continuar navegando, aceptas nuestra <Link to="/privacidad">política de privacidad</Link>.
        </p>
        <button onClick={acceptCookies} className={`btn btn-primary ${styles.acceptBtn}`}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
