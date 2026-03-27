import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mic, Aperture, ShieldCheck, ArrowLeft, Play, Pause } from 'lucide-react';
import styles from './Club.module.css';

export function Club() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
              
              <div 
                className={`${styles.actionCard} ${isPlaying ? styles.cardActive : ''}`}
                onClick={toggleAudio}
              >
                <div className={styles.iconWrapper}>
                  {isPlaying ? (
                    <div className={styles.audioWave}>
                      <span></span><span></span><span></span>
                    </div>
                  ) : (
                    <Mic size={24} className="text-cyan" />
                  )}
                </div>
                <div className={styles.cardInfo}>
                  <h3>Habla el trofeo</h3>
                  <p>{isPlaying ? 'Reproduciendo audio...' : 'Escuchar el veredicto oficial'}</p>
                </div>
                <button 
                  className={`${styles.playBtn} ${isPlaying ? styles.playing : ''}`} 
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                </button>
                <audio 
                  ref={audioRef} 
                  src="/audios/demo_audio.mp3" 
                  onEnded={() => setIsPlaying(false)} 
                  hidden 
                />
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
