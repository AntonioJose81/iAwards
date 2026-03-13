import styles from './ShowcaseBanner.module.css';

export function ShowcaseBanner() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.dynamicBackground}>
        <div className={styles.sceneWrapper}>
          <div className={styles.scene3D}>
            <div className={styles.cube}>
              <div className={`${styles.face} ${styles.front}`}></div>
              <div className={`${styles.face} ${styles.back}`}></div>
              <div className={`${styles.face} ${styles.right}`}></div>
              <div className={`${styles.face} ${styles.left}`}></div>
              <div className={`${styles.face} ${styles.top}`}></div>
              <div className={`${styles.face} ${styles.bottom}`}></div>
            </div>
            <div className={styles.cubeInner}>
              <div className={`${styles.faceInner} ${styles.front}`}></div>
              <div className={`${styles.faceInner} ${styles.back}`}></div>
              <div className={`${styles.faceInner} ${styles.right}`}></div>
              <div className={`${styles.faceInner} ${styles.left}`}></div>
              <div className={`${styles.faceInner} ${styles.top}`}></div>
              <div className={`${styles.faceInner} ${styles.bottom}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.vignette}></div>
        <div className={styles.glowOverlay}></div>
      </div>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>
          Cuando el trofeo también cuenta <span className={styles.highlight}>una historia</span>
        </h2>
      </div>
    </section>
  );
}
