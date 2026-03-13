import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Menu, X, Phone } from 'lucide-react';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <img 
            src="/assets/LOGO.png" 
            alt="iawards.es" 
            style={{ 
              height: '84px', 
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)' 
            }} 
          />
        </Link>
        
        <div className={styles.desktopNav}>
          <Link to="/club" className={`btn ${styles.nfcBtn}`}>
            <Smartphone size={18} />
            <span>Ver experiencia NFC</span>
          </Link>
          <a href="#contacto" className="btn btn-primary">
            Pedir presupuesto
          </a>
          <a href="tel:+34690639712" className={styles.phoneLink} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Phone size={16} />
            690 639 712
          </a>
          <a href="https://wa.me/34690639712" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
            WhatsApp
          </a>
        </div>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/club" className={`btn ${styles.nfcBtn}`} onClick={() => setIsMobileMenuOpen(false)}>
            <Smartphone size={18} />
            <span>Ver experiencia NFC</span>
          </Link>
          <a href="#contacto" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Pedir presupuesto
          </a>
          <a href="tel:+34690639712" className={styles.phoneLink} onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={18} />
            690 639 712
          </a>
          <a href="https://wa.me/34690639712" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink} onClick={() => setIsMobileMenuOpen(false)}>
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
