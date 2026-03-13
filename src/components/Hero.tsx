import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.noiseOverlay}></div>
      <div className={`container ${styles.gridContainer}`}>
        
        <div className={styles.textContent}>
          <div className={`${styles.badge} animate-fade-in`}>
            Reconocimiento B2B
          </div>
          <h1 className={`${styles.title} animate-fade-in delay-100`}>
            Sostenible. <br />
            Conectado. <br />
            <span className={styles.cyanAccent}>Memorable.</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-200`}>
            Trofeos diseñados con materiales eco y fabricación digital, elevados por una experiencia auditiva NFC.
          </p>
          <div className={`${styles.actions} animate-fade-in delay-300`}>
            <a href="#contacto" className={`btn btn-primary ${styles.heroBtn}`}>
              Pedir presupuesto <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className={`${styles.abstractVisual} animate-fade-in delay-200`}>
          <div className={styles.glowOrb}></div>
          <div className={styles.dynamicImageContainer}>
            <img 
              src="/assets/freepik__use-the-attached-trophy-img1-as-the-main-product-a__91109.png" 
              alt="Trofeo Mano IAwards" 
              className={styles.dynamicImage}
            />
            <div className={styles.scanline}></div>
          </div>
          <div className={styles.glassPlate3}></div>
          <div className={styles.decorativeLine}></div>
        </div>

      </div>
    </section>
  );
}
