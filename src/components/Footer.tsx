import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#111827', color: 'white', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          <div>
            <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'white' }}>
              iawards<span className="text-cyan">.es</span>
            </Link>
            <p style={{ color: '#9ca3af', marginTop: '0.5rem', maxWidth: '300px' }}>
              Reconocimiento B2B sostenible y conectado. La evolución del trofeo.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/club" style={{ color: '#d1d5db', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color='white'} onMouseOut={e => e.currentTarget.style.color='#d1d5db'}>Experiencia NFC</Link>
            <a href="#paquetes" style={{ color: '#d1d5db', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color='white'} onMouseOut={e => e.currentTarget.style.color='#d1d5db'}>Paquetes</a>
            <a href="#contacto" style={{ color: '#d1d5db', transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color='white'} onMouseOut={e => e.currentTarget.style.color='#d1d5db'}>Contacto</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#9ca3af', flexWrap: 'wrap', gap: '1rem' }}>
          <p>© {new Date().getFullYear()} iawards.es. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: '#9ca3af' }}>Aviso legal</a>
            <a href="#" style={{ color: '#9ca3af' }}>Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
