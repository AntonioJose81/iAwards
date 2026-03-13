import { Link } from 'react-router-dom';
import { Mic, Aperture, ShieldCheck, ArrowLeft } from 'lucide-react';
import styles from './Club.module.css';

export function Club() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.mockupContainer}>
        <div className={styles.phoneFrame}>
          
          <header className={styles.header}>
            <Link to="/" className={styles.backBtn}>
              <ArrowLeft size={20} />
            </Link>
            <div className={styles.logo}>iawards<span className="text-cyan">.es</span> /club</div>
          </header>

          <main className={styles.mainContent}>
            
            <div className={styles.heroSection}>
              <div className={styles.badge}>Modo Experience</div>
              <h1 className={styles.title}>Has desbloqueado este premio</h1>
              
              <ul className={styles.bulletList}>
                <li><strong>Toca</strong> el premio con tu móvil</li>
                <li><strong>Escucha</strong> el veredicto oficial</li>
                <li><strong>Desbloquea</strong> la cápsula del evento</li>
              </ul>
            </div>

            <div className={styles.interactiveArea}>
              
              <div className={styles.actionCard}>
                <div className={styles.iconWrapper}><Mic size={24} className="text-cyan" /></div>
                <div className={styles.cardInfo}>
                  <h3>Audio Oficial</h3>
                  <p>Escuchar el veredicto del jurado</p>
                </div>
                <button className={styles.playBtn} aria-label="Play">▶</button>
              </div>

              <div className={styles.actionCard}>
                <div className={styles.iconWrapper}><Aperture size={24} className="text-cyan" /></div>
                <div className={styles.cardInfo}>
                  <h3>Recuerdos</h3>
                  <p>Ver fotos y aftermovie</p>
                </div>
              </div>

              <div className={styles.actionCard}>
                <div className={styles.iconWrapper}><ShieldCheck size={24} className="text-cyan" /></div>
                <div className={styles.cardInfo}>
                  <h3>Sello de edición</h3>
                  <p>Certificado de autenticidad 2026</p>
                </div>
              </div>

            </div>

          </main>
          
        </div>
        <p className={styles.demoLabel}>Demo visual de la interfaz web lanzada por NFC</p>
      </div>
    </div>
  );
}
