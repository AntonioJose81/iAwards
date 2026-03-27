import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mic, Aperture, ShieldCheck, Play, Pause } from 'lucide-react';
import styles from './NfcExperience.module.css';

const FEATURES = [
  {
    icon: <Mic size={24} />,
    title: 'Audio oficial',
    description: 'La voz oficial de tu evento dando la enhorabuena y el veredicto del jurado al premiado.'
  },
  {
    icon: <Aperture size={24} />,
    title: 'Cápsula del evento',
    description: 'Fotos, aftermovie y resultados accesibles con un solo toque desde el smartphone.'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Sello de edición',
    description: 'Autenticidad digital verificada. Un certificado inmutable del logro conseguido.'
  }
];

export function NfcExperience() {
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

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className={`section ${styles.nfcSection}`}>
      <div className={`container ${styles.nfcContainer}`}>
        
        <div className={styles.content}>
          <div className={styles.badge}>Experiencia Integrada</div>
          <h2 className={styles.title}>
            Más que un objeto. <br />
            Una <span className="text-cyan">plataforma de recuerdo.</span>
          </h2>
          <p className={styles.subtitle}>
            Cada trofeo incluye tecnología NFC pasiva. Sin baterías, sin apps. 
            Solo acerca el móvil para desbloquear un mundo de contenido exclusivo.
          </p>

          <div className={styles.featureList}>
            {FEATURES.map((feat, idx) => (
              <div key={idx} className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  {feat.icon}
                </div>
                <div>
                  <h4 className={styles.featureTitle}>{feat.title}</h4>
                  <p className={styles.featureDesc}>{feat.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.action}>
            <Link to="/club" className="btn btn-primary">
              <Smartphone size={18} />
              Ver demo /club
            </Link>
            
            <button 
              onClick={toggleAudio} 
              className={`btn btn-secondary ${styles.audioBtn} ${isPlaying ? styles.isPlaying : ''}`}
              title={isPlaying ? 'Pausar demo' : 'Reproducir demo de audio'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              <span>{isPlaying ? 'Detener Demo' : 'Escuchar Demo'}</span>
            </button>
            <audio 
              ref={audioRef} 
              src="/audios/demo_audio.mp3" 
              onEnded={handleAudioEnded}
              hidden 
            />
            <span className={styles.hint}>Pruébalo desde tu navegador</span>
          </div>
        </div>

        <div className={styles.abstractNfcVisual}>
          <div className={styles.nfcRipples}>
            <div className={styles.ripple1}></div>
            <div className={styles.ripple2}></div>
            <div className={styles.ripple3}></div>
          </div>
          <div className={styles.nfcCore}>
            <Smartphone size={48} className={styles.nfcIcon} />
            <div className={styles.coreGlow}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
